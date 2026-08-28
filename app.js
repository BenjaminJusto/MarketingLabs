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


const areaByTitle={
  "Fundamentos de Marketing Estratégico":["strategy","Estrategia & Growth"],
  "Plan de Marketing Aplicado":["strategy","Estrategia & Growth"],
  "Estrategia de Marketing Integrada":["strategy","Estrategia & Growth"],
  "Data-Driven Marketing Fundamentals":["data","Data & Analytics"],
  "KPIs y Métricas Fundamentales":["performance","Performance & Finanzas"],
  "Marketing Fundamentals for Business":["strategy","Estrategia & Growth"],
  "Marketing, Ventas y Finanzas":["performance","Performance & Finanzas"],
  "Arquitectura de Valor":["value","Marca, Producto & Pricing"],
  "Marca que Crea Valor":["value","Marca, Producto & Pricing"],
  "Estrategia para el Crecimiento Rentable":["strategy","Estrategia & Growth"],
  "Marketing Intelligence, Analytics & ROI":["data","Data & Analytics"],
  "Marketing Performance":["performance","Performance & Finanzas"],
  "Customer Intelligence para el Crecimiento":["customer","Cliente & CRM"],
  "CRM Estratégico":["customer","Cliente & CRM"],
  "Customer Retention & Growth":["customer","Cliente & CRM"],
  "Data-Driven Marketing Advanced":["data","Data & Analytics"]
};

const featuredTitles=new Set([
  "Fundamentos de Marketing Estratégico",
  "Data-Driven Marketing Fundamentals",
  "Marketing Fundamentals for Business",
  "Arquitectura de Valor",
  "Marketing Performance",
  "Customer Intelligence para el Crecimiento"
]);

courses.forEach(function(c){
  const meta=areaByTitle[c.title]||["strategy","Estrategia & Growth"];
  c.area=meta[0];
  c.areaLabel=meta[1];
  c.featured=featuredTitles.has(c.title);
});

const grid=document.getElementById("courseGrid");
const count=document.getElementById("courseCount");
const profileFilter=document.getElementById("profileFilter");
const areaFilter=document.getElementById("areaFilter");
const clearFilters=document.getElementById("clearFilters");
const showAllCourses=document.getElementById("showAllCourses");

let profile="all";
let area="all";
let showAll=false;

const revealObserver=new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:"0px 0px -35px 0px"});

function observeReveals(root){
  root=(root||document);
  root.querySelectorAll(".principle,.aud-card,.method-step,.path,.course,.case,.faculty-copy,.faculty-model,.division").forEach(function(el,i){
    if(el.dataset.revealReady) return;
    el.dataset.revealReady="1";
    el.classList.add("reveal");
    el.style.transitionDelay=Math.min((i%4)*70,210)+"ms";
    revealObserver.observe(el);
  });
}

function getVisibleCourses(){
  let visible=courses.map(function(c,i){
    return Object.assign({},c,{index:i});
  }).filter(function(c){
    return profile==="all"||c.aud.includes(profile);
  }).filter(function(c){
    return area==="all"||c.area===area;
  });

  const hasFilters=profile!=="all"||area!=="all";
  if(!hasFilters&&!showAll){
    visible=visible.filter(function(c){return c.featured;});
  }
  return {visible:visible,hasFilters:hasFilters};
}

function render(){
  const result=getVisibleCourses();
  const visible=result.visible;
  const hasFilters=result.hasFilters;

  if(!hasFilters&&!showAll){
    count.textContent=visible.length+" destacados de "+courses.length+" cursos";
    showAllCourses.textContent="Ver todos los cursos";
  }else if(!hasFilters&&showAll){
    count.textContent=courses.length+" cursos";
    showAllCourses.textContent="Ver destacados";
  }else{
    count.textContent=visible.length+(visible.length===1?" curso":" cursos");
    showAllCourses.textContent="Ver todos los cursos";
  }

  if(!visible.length){
    grid.innerHTML='<div class="no-courses"><strong>No encontramos cursos con esa combinación.</strong><span>Prueba otro perfil o área académica.</span></div>';
  }else{
    grid.innerHTML=visible.map(function(c){
      return '<article class="course">'+
        '<div class="course-top"><span class="who">'+c.who+'</span><span class="case-badge">'+c.areaLabel+'</span></div>'+
        '<h3>'+c.title+'</h3>'+
        '<p>'+c.desc+'</p>'+
        '<div class="tags">'+c.tags.map(function(t){return '<span class="tag">'+t+'</span>';}).join("")+'</div>'+
        '<button class="details" data-i="'+c.index+'">Ver programa →</button>'+
      '</article>';
    }).join("");
  }

  document.querySelectorAll(".details").forEach(function(b){
    b.addEventListener("click",function(){openCourse(+b.dataset.i);});
  });
  observeReveals(grid);
}

profileFilter.addEventListener("change",function(){
  profile=profileFilter.value;
  showAll=false;
  render();
});

areaFilter.addEventListener("change",function(){
  area=areaFilter.value;
  showAll=false;
  render();
});

clearFilters.addEventListener("click",function(){
  profile="all";
  area="all";
  showAll=false;
  profileFilter.value="all";
  areaFilter.value="all";
  render();
});

showAllCourses.addEventListener("click",function(){
  if(profile!=="all"||area!=="all"){
    profile="all";
    area="all";
    profileFilter.value="all";
    areaFilter.value="all";
    showAll=true;
  }else{
    showAll=!showAll;
  }
  render();
});

const modal=document.getElementById("modal");
function openCourse(i){
  const c=courses[i];
  document.getElementById("mwho").textContent=c.who+" · "+c.areaLabel;
  document.getElementById("mtitle").textContent=c.title;
  document.getElementById("mdesc").textContent=c.desc;
  document.getElementById("mcontent").textContent=c.content;
  document.getElementById("mcase").textContent=c.case;
  document.getElementById("moutcome").textContent=c.outcome;
  modal.classList.add("show");
  document.body.style.overflow="hidden";
}

function closeModal(){
  modal.classList.remove("show");
  document.body.style.overflow="";
}

document.getElementById("closeModal").addEventListener("click",closeModal);
modal.addEventListener("click",function(e){if(e.target===modal) closeModal();});
document.addEventListener("keydown",function(e){if(e.key==="Escape") closeModal();});

observeReveals();
render();


/* v3.6.1 — interactive dashboard by business case */
const heroCases={
  strategy:{
    area:"ESTRATEGIA DE MARKETING",
    question:"¿Qué segmento debería priorizar la marca?",
    data:[
      ["Segmento A","42%"],
      ["Crecimiento","+18%"],
      ["Margen","24%"],
      ["Competidores","7"]
    ],
    chart:[
      ["Atractivo","82%","82"],
      ["Fit","67%","67"],
      ["Margen","58%","58"]
    ],
    decisionTitle:"Priorizar el segmento con mejor equilibrio.",
    decisionText:"El mayor mercado no siempre es el segmento más atractivo para competir."
  },
  performance:{
    area:"MARKETING PERFORMANCE",
    question:"¿Aumentarías el presupuesto de marketing 25%?",
    data:[
      ["Ventas","-10%"],
      ["Conversión","8%"],
      ["CAC","$100"],
      ["Meta","+25%"]
    ],
    chart:[
      ["Leads","82%","5,750"],
      ["Conversión","48%","8%"],
      ["Margen","64%","10%"]
    ],
    decisionTitle:"Primero recuperar conversión.",
    decisionText:"Más presupuesto no corrige un funnel que ya perdió eficiencia."
  },
  customer:{
    area:"CUSTOMER INTELLIGENCE",
    question:"¿Captar más clientes o crecer con los actuales?",
    data:[
      ["CLV","S/ 820"],
      ["CAC","S/ 190"],
      ["Churn","14%"],
      ["Recompra","31%"]
    ],
    chart:[
      ["Retención","76%","76"],
      ["CLV","88%","88"],
      ["Potencial","69%","69"]
    ],
    decisionTitle:"Priorizar retención en clientes de mayor valor.",
    decisionText:"El crecimiento rentable puede venir de desarrollar mejor la cartera actual antes de acelerar captación."
  }
};

const dashboardTabs=document.querySelectorAll("[data-case]");
const heroCaseArea=document.getElementById("heroCaseArea");
const heroCaseQuestion=document.getElementById("heroCaseQuestion");
const heroDataGrid=document.getElementById("heroDataGrid");
const heroMiniChart=document.getElementById("heroMiniChart");
const heroDecisionTitle=document.getElementById("heroDecisionTitle");
const heroDecisionText=document.getElementById("heroDecisionText");
const heroVisual=document.querySelector(".hero-visual");

function setHeroCase(key){
  const c=heroCases[key];
  if(!c) return;

  dashboardTabs.forEach(function(btn){
    btn.classList.toggle("active",btn.dataset.case===key);
  });

  if(heroVisual) heroVisual.classList.add("is-switching");

  window.setTimeout(function(){
    heroCaseArea.textContent=c.area;
    heroCaseQuestion.textContent=c.question;

    heroDataGrid.innerHTML=c.data.map(function(item){
      return '<div class="data-cell"><span>'+item[0]+'</span><strong>'+item[1]+'</strong></div>';
    }).join("");

    heroMiniChart.innerHTML=c.chart.map(function(item){
      return '<div class="chart-row"><span>'+item[0]+'</span><i style="--bar:'+item[1]+'"></i><b>'+item[2]+'</b></div>';
    }).join("");

    heroDecisionTitle.textContent=c.decisionTitle;
    heroDecisionText.textContent=c.decisionText;

    if(heroVisual) heroVisual.classList.remove("is-switching");
  },100);
}

dashboardTabs.forEach(function(btn){
  btn.addEventListener("click",function(){
    setHeroCase(btn.dataset.case);
  });
});

setHeroCase("strategy");
