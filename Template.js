/*
  Template
*/
function Template(e){//dom element
  //init
  var tpl=e.querySelector('[type="text/template"]').innerHTML;
  e.innerHTML='';
  //private
  var parse=function(s,o){
    var a=s.split(/§\[|\]§/);
    for(var k=1;k<a.length;k+=2)o.hasOwnProperty(a[k])?a[k]=o[a[k]]:a[k]='';
    return a.join('');
  }
  //public
  this.gen=function(d){//data
    var r='';
    if(d instanceof Array){
      for(var k=0;k<d.length;k++)r+=parse(tpl,d[k]);
    }else{
      r=parse(tpl,d);
    }
    e.innerHTML=r;
  }
  return this;
}
