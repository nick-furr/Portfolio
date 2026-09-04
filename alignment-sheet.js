/* Alignment-sheet backdrop — the LinkedIn banner graphic, reusable.
   renderAlignmentSheet(target, {labels, occlusion, opacity})
   Draws into `target` (an element) at a 1584x396 viewBox, scaled to fill. */
(function(){
const NS="http://www.w3.org/2000/svg";
const P="M -80 306 C 220 306 390 302 600 276 C 800 251 940 194 1200 175 C 1380 162 1520 158 1680 155";
const el=(n,a)=>{const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);return e};
function rng(seed){let s=seed;return()=>{s=(s*1664525+1013904223)%4294967296;return s/4294967296}}

window.renderAlignmentSheet=function(target,opt){
  opt=opt||{};
  const labels=opt.labels!==false, occlusion=opt.occlusion!==false;
  const svg=el('svg',{viewBox:'0 0 1584 396',fill:'none',preserveAspectRatio:opt.preserve||'xMidYMid slice'});
  svg.setAttribute('aria-hidden','true');
  svg.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block';
  svg.innerHTML='<defs>'
    +'<filter id="as-glow" x="-20%" y="-200%" width="140%" height="500%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
    +'<linearGradient id="as-fade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".15"/><stop offset=".45" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity=".35"/></linearGradient>'
    +'<mask id="as-mask"><rect width="1584" height="396" fill="url(#as-fade)"/></mask>'
    +'</defs>';
  const gTerrain=el('g',{mask:'url(#as-mask)'}), gTech=el('g',{mask:'url(#as-mask)'}),
        gRow=el('g',{mask:'url(#as-mask)'}), gPave=el('g',{mask:'url(#as-mask)'}),
        gTicks=el('g',{}), gCenter=el('g',{}), gLabels=el('g',{});
  [gTerrain,gTech,gRow,gPave,gTicks,gCenter,gLabels].forEach(g=>svg.appendChild(g));
  target.appendChild(svg);

  const off=(dy,a)=>el('path',Object.assign({d:P,transform:'translate(0 '+dy+')',fill:'none'},a));

  [-226,-196,-166,-136,-106,106,136,166,196,226,256].forEach(dy=>{
    const idx=Math.abs(dy)===166;
    gTerrain.appendChild(off(dy*1.02,{stroke:'#8e979f','stroke-width':idx?1.1:.8,'stroke-opacity':idx?.40:.22}));
  });
  [-88,-76,76,88].forEach(dy=>gTerrain.appendChild(off(dy,{stroke:'#8e979f','stroke-width':.8,'stroke-opacity':.17})));
  [-58,58].forEach(dy=>gRow.appendChild(off(dy,{stroke:'#79828a','stroke-width':.9,'stroke-opacity':.34,'stroke-dasharray':'26 7 4 7'})));
  [-27,27].forEach(dy=>gPave.appendChild(off(dy,{stroke:'#d3d9de','stroke-width':2,'stroke-opacity':.72})));
  [-36,36].forEach(dy=>gPave.appendChild(off(dy,{stroke:'#aab2b9','stroke-width':.9,'stroke-opacity':.30,'stroke-dasharray':'12 9'})));
  gCenter.appendChild(el('path',{d:P,fill:'none',stroke:'#9b7cff','stroke-width':2,'stroke-opacity':.9,'stroke-dasharray':'34 10 3 10',filter:'url(#as-glow)'}));

  const MEAS=el('path',{d:P}); svg.appendChild(MEAS); MEAS.style.display='none';
  const L=MEAS.getTotalLength();
  const ptAt=f=>MEAS.getPointAtLength(L*Math.max(0,Math.min(1,f)));

  let sta=0;
  for(let s=170;s<L-40;s+=132){
    const a=MEAS.getPointAtLength(s), b=MEAS.getPointAtLength(Math.min(s+1,L));
    const dx=b.x-a.x, dy=b.y-a.y, len=Math.hypot(dx,dy)||1, nx=-dy/len, ny=dx/len;
    const major=sta%2===0, h=major?11:6;
    gTicks.appendChild(el('line',{x1:a.x+nx*27,y1:a.y+ny*27,x2:a.x+nx*(27+h),y2:a.y+ny*(27+h),stroke:major?'#c9d0d6':'#8a9299','stroke-width':major?1.4:.8,'stroke-opacity':major?.85:.5}));
    if(labels&&major&&a.x>40&&a.x<1450){
      const t=el('text',{x:a.x+nx*(27+h+13),y:a.y+ny*(27+h+15),fill:'#b9a3ff','font-size':'9.5','font-family':"'JetBrains Mono',ui-monospace,monospace",'letter-spacing':'.12em','text-anchor':'middle','fill-opacity':.92});
      t.textContent=(10+sta*5)+'+00';
      gLabels.appendChild(t);
    }
    sta++;
  }

  const r=rng(23), buckets=[[],[],[],[]];
  const HALF=150, STEPO=7, PASSES=190;
  let pass=0;
  for(let f=0;f<=1;f+=1/PASSES,pass++){
    const a=ptAt(f), b=ptAt(Math.min(1,f+.002));
    const dx=b.x-a.x, dy=b.y-a.y, len=Math.hypot(dx,dy)||1, nx=-dy/len, ny=dx/len;
    const section=pass%8===0;
    let drop=section?.04:.3;
    let occHalf=0;
    if(occlusion){
      const d1=Math.abs(f-.40), d2=Math.abs(f-.735);
      if(d1<.052)occHalf=(1-d1/.052)*118; else if(d2<.030)occHalf=(1-d2/.030)*74;
    }
    for(let o=-HALF;o<=HALF;o+=STEPO){
      if(r()<drop)continue;
      if(occHalf&&o>18-occHalf&&o<18+occHalf&&r()<.93)continue;
      const jit=(r()-.5)*5.5;
      const x=a.x+nx*(o+jit)+(r()-.5)*4.5, y=a.y+ny*(o+jit)+(r()-.5)*4.5;
      const ao=Math.abs(o), near=Math.max(0,1-ao/HALF);
      let bi=ao<30?3:near>.62?2:near>.32?1:0;
      if(section&&bi<2)bi=Math.min(2,bi+1);
      buckets[bi].push('M'+x.toFixed(1)+' '+y.toFixed(1)+'h.1');
    }
  }
  const cfg=[['#79838c',.26,1.5],['#98a2ab',.38,1.7],['#c3cad2',.58,1.9],['#d9cfff',.85,2.2]];
  buckets.forEach((b,i)=>{
    if(!b.length)return;
    gTech.appendChild(el('path',{d:b.join(''),stroke:cfg[i][0],'stroke-opacity':cfg[i][1],'stroke-width':cfg[i][2],'stroke-linecap':'round',fill:'none'}));
  });
  return svg;
};
})();
