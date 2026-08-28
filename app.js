const courses=[
{title:"Fundamentos de Marketing Estratégico",aud:["early"],who:"Early Marketers",desc:"Construye criterio para entender mercado, cliente, competencia, propuesta de valor y posicionamiento antes de pasar a la ejecución.",tags:["Estrategia","STP","Valor"],content:"Mercado · Cliente · Competencia · Segmentación · Targeting · Propuesta de valor · Posicionamiento",case:"Una empresa debe elegir a qué segmento entrar, con qué propuesta y cómo diferenciarse frente a competidores establecidos.",outcome:"El participante termina con una lógica completa para diagnosticar una situación de marketing y convertirla en decisiones."},
{title:"Plan de Marketing Aplicado",aud:["early"],who:"Early Marketers",desc:"Del diagnóstico a la acción: un plan de marketing desarrollado sobre un caso, un presupuesto y objetivos concretos.",tags:["Planificación","KPIs","Presupuesto"],content:"Diagnóstico · Objetivos · Estrategia · Acciones · Presupuesto · KPIs · Seguimiento",case:"Una empresa necesita recuperar crecimiento y construir un plan defendible con recursos limitados.",outcome:"Construir y sustentar un plan de marketing conectado con objetivos, recursos y métricas."},
{title:"Estrategia de Marketing Integrada",aud:["early"],who:"Early Marketers",desc:"Conecta cliente, producto, precio, canales, comunicación y ventas dentro de una sola estrategia.",tags:["Integración","Marketing Mix","Ejecución"],content:"Cliente · Producto · Precio · Canal · Comunicación · Ventas · Coherencia estratégica",case:"Una marca tiene acciones aisladas que funcionan por separado, pero no construyen una estrategia coherente.",outcome:"Diseñar una estrategia integrada donde cada decisión refuerce a las demás."},
{title:"Data-Driven Marketing Fundamentals",aud:["early"],who:"Early Marketers",desc:"Aprende a pasar de preguntas de negocio a datos, métricas, insights y decisiones.",tags:["Datos","Insights","Dashboards"],content:"Fuentes · Calidad de datos · Métricas vs KPIs · Funnel · Dashboards · Insights · Decisión",case:"Un dataset de marketing contiene ventas, leads y comportamiento; el reto es descubrir qué está ocurriendo y qué hacer.",outcome:"Convertir información dispersa en una lectura útil para la toma de decisiones."},
{title:"KPIs y Métricas Fundamentales",aud:["early","leaders"],who:"Early · Business Leaders",desc:"Qué medir en mercado, marca, cliente, producto, ventas y marketing, sin caer en un catálogo de métricas.",tags:["KPIs","Métricas","Negocio"],content:"Mercado · Marca · Cliente · Producto · Ventas · Marketing · Indicadores de resultado y drivers",case:"Un dashboard tiene demasiadas métricas; el reto es elegir cuáles explican realmente el desempeño del negocio.",outcome:"Construir un sistema de indicadores que ayude a controlar, explicar y decidir."},
{title:"Marketing Fundamentals for Business",aud:["leaders"],who:"Business Leaders",desc:"Marketing para quienes deben dirigirlo, evaluarlo y financiarlo sin convertirse en especialistas operativos.",tags:["Dirección","Marketing","Negocio"],content:"Mercado · Cliente · Valor · Marca · Precio · Canales · Crecimiento · Métricas",case:"Un gerente debe decidir entre bajar precio, aumentar inversión o redefinir la propuesta de valor.",outcome:"Entender marketing como una función de negocio y formular mejores preguntas a los equipos especialistas."},
{title:"Marketing, Ventas y Finanzas",aud:["leaders","strategic"],who:"Business Leaders · Strategic Marketers",desc:"Integra generación de demanda, conversión comercial, margen y rentabilidad en una misma lógica.",tags:["Ventas","Finanzas","Rentabilidad"],content:"Demanda · Funnel · Conversión · Ticket · Margen · CAC · Forecast · ROI · Punto de equilibrio",case:"Las ventas caen 10% y Marketing solicita mayor presupuesto. ¿El incremento de inversión realmente resolverá el problema?",outcome:"Evaluar decisiones de marketing considerando su impacto comercial y financiero."},
{title:"Arquitectura de Valor",aud:["leaders","strategic"],who:"Business Leaders · Strategic Marketers",desc:"Producto, precio y marca como un sistema integrado para crear, comunicar y capturar valor.",tags:["Producto","Pricing","Marca"],content:"Producto · Diferenciación · Pricing · Marca · Posicionamiento · Valor percibido · Willingness to Pay",case:"Un producto busca pasar de una propuesta estándar a una premium con cambio de marca y precio.",outcome:"Diseñar una ecuación de valor consistente entre lo que se ofrece, lo que se percibe y lo que se cobra."},
{title:"Marca que Crea Valor",aud:["leaders","strategic"],who:"Business Leaders · Strategic Marketers",desc:"Brand strategy más allá del diseño: cómo la marca afecta preferencia, precio, elección y crecimiento.",tags:["Brand Strategy","Valor","Posicionamiento"],content:"Propuesta de valor · Posicionamiento · Identidad · Experiencia · Preferencia · Brand Equity · Pricing",case:"Una empresa plantea un rebranding. El reto es demostrar qué debería cambiar en el negocio además de la identidad visual.",outcome:"Evaluar y construir marca como activo estratégico y no solo como sistema gráfico."},
{title:"Estrategia para el Crecimiento Rentable",aud:["strategic"],who:"Strategic Marketers",desc:"Identifica dónde crecer, cómo hacerlo y qué condiciones deben cumplirse para que el crecimiento cree valor.",tags:["Growth","Estrategia","Rentabilidad"],content:"Mercado · Penetración · Clientes · Producto · Precio · Canales · Mix · Rentabilidad",case:"Una empresa puede crecer por precio, volumen, nuevos clientes, frecuencia o portafolio, pero no puede financiar todas las opciones.",outcome:"Priorizar oportunidades de crecimiento por atractivo, viabilidad e impacto económico."},
{title:"Marketing Intelligence, Analytics & ROI",aud:["strategic"],who:"Strategic Marketers",desc:"Convierte información de mercado, cliente y negocio en decisiones estratégicas sustentadas.",tags:["Intelligence","Analytics","ROI"],content:"Market Intelligence · KPIs · CAC · CLV · ROI · MROI · Dashboards · Escenarios",case:"Marketing debe defender una nueva asignación presupuestaria utilizando información de mercado, cliente y ventas.",outcome:"Integrar inteligencia, analítica y evaluación financiera para sustentar decisiones de marketing."},
{title:"Marketing Performance",aud:["strategic"],who:"Strategic Marketers",desc:"Evalúa el desempeño del marketing como función de negocio, no como una colección de campañas.",tags:["CAC","CLV","MROI"],content:"CAC · CLV · Churn · Margen · ROAS · ROI · MROI · Incrementalidad · Payback · Presupuesto",case:"Tres estrategias muestran resultados distintos en ventas, CAC y margen. ¿Cuál es realmente más efectiva?",outcome:"Relacionar eficacia, eficiencia y rentabilidad para optimizar inversión y desempeño."},
{title:"Customer Intelligence para el Crecimiento",aud:["strategic"],who:"Strategic Marketers",desc:"Convierte conocimiento del cliente en decisiones de adquisición, desarrollo y retención.",tags:["Customer","CLV","Segmentación"],content:"Segmentación · RFM · Journey · Cohortes · CLV · Comportamiento · Oportunidades de crecimiento",case:"Un dataset de clientes muestra diferencias en recencia, frecuencia, ticket y churn que exigen estrategias distintas.",outcome:"Priorizar segmentos y acciones según comportamiento, potencial y valor económico."},
{title:"CRM Estratégico",aud:["strategic"],who:"Strategic Marketers",desc:"CRM no es un software: es una estrategia para captar, desarrollar, retener y recuperar clientes.",tags:["CRM","Relación","Retención"],content:"Captación · Identificación · Segmentación · Conversión · Desarrollo · Retención · Win-back · Medición",case:"Una empresa implementó CRM, pero sigue enviando la misma comunicación a todos sus clientes.",outcome:"Diseñar la estrategia de relación que debería existir antes de elegir herramientas y automatizaciones."},
{title:"Customer Retention & Growth",aud:["strategic"],who:"Strategic Marketers",desc:"Crecer desde la base actual de clientes mediante retención, frecuencia, recompra y desarrollo de valor.",tags:["Retention","Growth","CLV"],content:"Retención · Churn · Frecuencia · Recompra · Cross-sell · Upsell · Win-back · CLV",case:"El negocio puede invertir en captación o en retención. Los datos de cohortes y CLV deben definir la decisión.",outcome:"Diseñar estrategias de crecimiento basadas en la economía y comportamiento de la cartera."},
{title:"Data-Driven Marketing Advanced",aud:["strategic"],who:"Strategic Marketers",desc:"Pasa de describir resultados a diagnosticar, anticipar escenarios y optimizar decisiones.",tags:["Advanced Analytics","Forecast","Atribución"],content:"Cohortes · Atribución · Incrementalidad · Forecast · Escenarios · Experimentación · Optimización",case:"Múltiples canales muestran resultados positivos, pero no está claro cuál genera crecimiento incremental.",outcome:"Tomar decisiones avanzadas con escenarios, experimentación y análisis de incrementalidad."}
];

const grid=document.getElementById("courseGrid");
const count=document.getElementById("courseCount");
let active="all";

function render(){
  const visible=courses.map((c,i)=>({...c,index:i})).filter(c=>active==="all"||c.aud.includes(active));
  count.textContent=visible.length+" cursos";
  grid.innerHTML=visible.map(c=>`
    <article class="course">
      <div class="course-top"><span class="who">${c.who}</span><span class="case-badge">CASE + DATA</span></div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <button class="details" data-i="${c.index}">Ver programa →</button>
    </article>`).join("");
  document.querySelectorAll(".details").forEach(b=>b.addEventListener("click",()=>openCourse(+b.dataset.i)));
}

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active"); active=btn.dataset.f; render();
}));

const modal=document.getElementById("modal");
function openCourse(i){
  const c=courses[i];
  document.getElementById("mwho").textContent=c.who;
  document.getElementById("mtitle").textContent=c.title;
  document.getElementById("mdesc").textContent=c.desc;
  document.getElementById("mcontent").textContent=c.content;
  document.getElementById("mcase").textContent=c.case;
  document.getElementById("moutcome").textContent=c.outcome;
  modal.classList.add("show");
  document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.remove("show");document.body.style.overflow=""}
document.getElementById("closeModal").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
render();


/* V4 — subtle reveal animations */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:"0px 0px -35px 0px"});

function observeReveals(root=document){
  root.querySelectorAll(".principle,.aud-card,.method-step,.path,.course,.case,.faculty-copy,.faculty-model,.division").forEach((el,i)=>{
    if(el.dataset.revealReady) return;
    el.dataset.revealReady="1";
    el.classList.add("reveal");
    el.style.transitionDelay=Math.min((i%4)*70,210)+"ms";
    revealObserver.observe(el);
  });
}
observeReveals();

const courseMutationObserver=new MutationObserver(()=>observeReveals(grid));
courseMutationObserver.observe(grid,{childList:true});
