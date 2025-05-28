/* Janklow.ai – UX sparkle */
/* 1️⃣  Scroll-reveal  */
const revealItems = document.querySelectorAll('.industry, .card, .stat');
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  })
},{threshold:.15});
revealItems.forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  io.observe(el);
});

/* 2️⃣  Particles in hero.
      No external libs – dead-simple canvas dots */
const cvs = document.getElementById('bg');
if(cvs){
  const ctx = cvs.getContext('2d');
  let w,h,particles=[];
  const resize=()=>{w=cvs.width=window.innerWidth;h=cvs.height=document.querySelector('.hero').offsetHeight};
  window.addEventListener('resize',resize);resize();

  for(let i=0;i<120;i++){
    particles.push({x:Math.random()*w,y:Math.random()*h,
                    vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,
                    r:Math.random()*2+1});
  }
  (function anim(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='rgba(255,255,255,.8)';
    particles.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>w)p.vx*=-1;
      if(p.y<0||p.y>h)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
    });
    requestAnimationFrame(anim);
  })();
}
