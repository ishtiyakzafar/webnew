import{r,j as e,L as t,p as u,b as h}from"./index-DNRZ_Kra.js";import{O as p}from"./OurClient-EfJL6Uq2.js";import{S as l}from"./SectionHeading-CD5rP92E.js";import{S as g}from"./index-BSEpDyXc.js";import{_ as x,a as j}from"./scrollspy-CSwZTpQF.js";import{S as v}from"./SectionOne-BnzSwKau.js";import{i as N}from"./img1-kkOQHOJO.js";import"./index-CxYsjn9Q.js";const f=({data:i})=>{const[o,n]=r.useState(!1);return r.useEffect(()=>{const s=()=>{const a=window.innerHeight*.8,c=window.scrollY+a,m=document.getElementById("countup-section").offsetTop;c>=m?n(!0):n(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),e.jsx("div",{className:"counter",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row gy-3",children:[e.jsx("div",{className:"bg-style",children:e.jsx("div",{className:"angle"})}),i.map(s=>e.jsx("div",{className:"col-xl-3 col-md-6",children:e.jsxs("div",{className:"info",children:[e.jsx("h1",{children:e.jsx(x,{items:["countup-section"],currentClassName:"active",children:e.jsxs("div",{id:"countup-section",children:[o&&e.jsx(j,{start:0,end:s.value,duration:2}),s.unit]})})}),e.jsx("p",{children:s.title})]})},s.id))]})})})},b="/assets/img9-s2NiSqox.jpg",y="/assets/img2-Qyq245xN.jpg",w="/assets/img2-DoO8GfbK.jpg",S="/assets/img6-BZuRlwuG.jpg",d=[{id:1,image:b,title:"Automation Services",desc:"Transform your business operations with our innovative automation services. Our solutions are designed to simplify processes, increase productivity, and accelerate business growth. Experience seamless integration and unparalleled reliability for your business needs.",path:"/custom-automation"},{id:2,image:y,title:"Mobile App Solutions",desc:"Elevate your business with our app development solutions. From concept to launch, we craft engaging apps tailored to your needs. We are committed to customer satisfaction and always go the extra mile to ensure that our clients are happy with the final product design.",path:"/mobile-app-solution"},{id:3,image:w,title:"Blockchain Development",desc:"We are one of the leading blockchain service providers having expertise in developing blockchain based enterprise business applications, smart contracts, ICO’s and cryptocurrencies including blockchain based business networks.",path:"/blockchain-solution"},{id:4,image:S,title:"Software Solutions",desc:"We offer a complete suite of enterprise software solutions designed to streamline your business operations and drive growth. Our tailored approach ensures that every solution is aligned with your unique requirements and objectives.",path:"/software-solution"}],O=()=>{const[i,o]=r.useState(0);r.useEffect(()=>{const s=setInterval(()=>{o(a=>(a+1)%d.length)},1e4);return()=>clearInterval(s)},[]);const n=s=>{o(s)};return e.jsx("div",{className:"our-services",children:e.jsxs("div",{className:"slider",children:[e.jsx("div",{className:"list",children:d.map((s,a)=>e.jsxs("div",{className:`item ${a===i?"active":""}`,style:{backgroundColor:s.bgColor},children:[e.jsx("img",{src:s.image,alt:s.title}),e.jsxs("div",{"data-aos":"fade-up",className:"content",children:[e.jsx("p",{children:"Our services"}),e.jsx("h2",{children:s.title}),e.jsx("p",{children:s.desc}),e.jsx(t,{to:s.path,children:e.jsx("button",{className:"btn btn-outline-light mt-4",children:"Learn More"})})]})]},s.id))}),e.jsx("div",{"data-aos":"fade-up",className:"thumbnail",children:d.map((s,a)=>e.jsxs("div",{className:`item ${a===i?"active":""}`,onClick:()=>n(a),children:[e.jsx("img",{src:s.image,alt:s.title}),e.jsx("div",{className:"content",children:s.title})]},s.id))})]})})},C="/assets/HPCL-ItWuaoq8.jpg",k=()=>e.jsx("div",{className:"our-work",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{"data-aos":"fade-up",className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"heading",children:e.jsx(l,{title:"WORKS",heading:"Our Works",description:"As an IT company, we provide a wide range of services to help your business achieve its goals."})})})}),e.jsxs("div",{className:"row g-0",children:[e.jsx("div",{"data-aos":"fade-up",className:"col-md-6 nrhm",children:e.jsx("img",{className:"work-img",src:u,alt:"work"})}),e.jsx("div",{"data-aos":"fade-up",className:"col-md-6",children:e.jsxs("div",{className:"work-card",style:{background:"#333787"},children:[e.jsx("h6",{children:"ONGC, Gujarat"}),e.jsx("h1",{children:"Oil and Natural Gas Corporation"}),e.jsx("p",{children:"IoT-based SRP Wells Online Monitoring System, implemented by ONGC at Cambay Asset, Gujarat, serves as an e-channel for real-time surveillance and management of oil wells. Leveraging advanced technology, it ensures efficient operation, predictive maintenance, and data-driven decision-making, enhancing productivity and safety in oilfield operations."}),e.jsx(t,{to:"case-study/well-monitoring",children:e.jsx("button",{className:"btn btn-outline-light btn-lg",children:"See case study"})})]})}),e.jsx("div",{"data-aos":"fade-up",className:"col-md-6 order-md-1 order-2",children:e.jsxs("div",{className:"work-card mid",style:{background:"#e2e5f2"},children:[e.jsx("h6",{children:"ONGC, Bokaro"}),e.jsx("h1",{children:"Oil and Natural Gas Corporation"}),e.jsx("p",{children:"IOT Based Real Time Well Monitoring System ONGC, CBM Asset Bokaro (ONGC RTMS), is an e-channel for real-time monitoring of well performance by collecting data from IOT devices installed in the wells."}),e.jsx(t,{to:"case-study/well-monitoring",children:e.jsx("button",{className:"btn btn-outline-light btn-lg",children:"See case study"})})]})}),e.jsx("div",{"data-aos":"fade-up",className:"col-md-6 order-md-2 order-1 vshop",children:e.jsx("img",{className:"work-img",src:h,alt:"work"})}),e.jsx("div",{"data-aos":"fade-up",className:"col-md-6 order-3 food",children:e.jsx("img",{className:"work-img",src:C,alt:"work"})}),e.jsx("div",{"data-aos":"fade-up",className:"col-md-6 order-4",children:e.jsxs("div",{className:"work-card",style:{background:"#333787"},children:[e.jsx("h6",{children:"HPCL"}),e.jsx("h1",{children:"Hindustan Petroleum Corporation Limited"}),e.jsx("p",{children:"HPCL's IoT-based energy monitoring system at its Hoshiarpur LPG Plant in Punjab is a real-time web application that optimizes operational efficiency and facilitates predictive maintenance, leading to significant cost savings and enhanced energy efficiency."}),e.jsx(t,{to:"case-study/energy-monitoring",children:e.jsx("button",{className:"btn btn-outline-light btn-lg",children:"See case study"})})]})})]})]})}),W="/assets/join1-BDc0j2tg.jpg",I="/assets/join2-BtJ5ye6q.jpg",A=()=>e.jsx("div",{className:"join-us",children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"row g-0",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("img",{"data-aos":"zoom-out",className:"join1 rounded-1",src:W,alt:"img"}),e.jsx("img",{"data-aos":"zoom-out",className:"join2 rounded-1",src:I,alt:"img"})]}),e.jsxs("div",{"data-aos":"fade-up",className:"col-xl-4 col-md-5 px-md-0 px-3",children:[e.jsx(l,{title:"JOIN US",heading:"Where Aspirations Meet Opportunities",description:"We’re always searching for amazing people to join our team. If you're passionate about innovation, dedicated to excellence, and thrive in a collaborative environment, we want to hear from you. Explore our current job openings and discover exciting opportunities to contribute your talents and expertise."}),e.jsx(t,{to:"career",children:e.jsx("button",{className:"btn btn-outline-info btn-lg mt-4",children:"Join us now"})})]})]})})}),T="/assets/blog1-CIEnNx4A.jpg",P="/assets/blog2-B_MMjQq0.jpg",E="/assets/blog3-D4x1CAgS.jpg",B="/assets/blog4-CVXDQ5AH.jpg",G=[{id:1,titile:"Commitment",img:T,date:"Our team is dedicated to delivering top-notch services for your technical needs, ensuring excellence every step of the way."},{id:2,titile:"24x7 Support",img:P,date:"We offer round-the-clock support for crisis situations, with a dedicated customer care team available 24/7 to assist you."},{id:3,titile:"Privacy",img:E,date:"Our company are specialized in helping IT security solutions, while privacy is our main core to keep the professionalism in order to gain client's trust."},{id:4,titile:"Best Equipment",img:B,date:"We ensure our clients receive only the best equipment sourced from our finest resources. With a commitment to quality, we meticulously select and provide top-tier products to meet your needs."}],H=()=>e.jsx("div",{className:"blog",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{"data-aos":"fade-up",className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"heading",children:e.jsx(l,{title:"WHY CHOOSE US",heading:"What Sets Us Apart",description:"We Listen, We Understand, We Deliver. Choose iOTAS for Personalized IT Solutions."})})})}),e.jsx("div",{className:"row gy-4",children:G.map(i=>e.jsx("div",{"data-aos":"fade-up",className:"col-md-3",children:e.jsxs("div",{className:"blog-card",children:[e.jsx("img",{src:i.img,alt:"blog"}),e.jsxs("div",{className:"content",children:[e.jsx("h1",{children:i.titile}),e.jsx("p",{children:i.date})]})]})},i.id))})]})}),L="/assets/2-CI9XA-y6.mp4",D="/assets/3-DwY8uVbW.mp4",M="/assets/4-C8sIoON1.mp4",q="/assets/5-BYv5FpiN.mp4",z="/assets/7-BJeLU0zM.mp4",_=()=>{const i={dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,speed:3e3,autoplaySpeed:5e3,cssEase:"linear",arrows:!1};return e.jsxs("div",{"data-aos":"zoom-out",className:"home",children:[e.jsxs(g,{...i,children:[e.jsx("div",{className:"video-sliderx",children:e.jsx("video",{autoPlay:"autoplay",loop:!0,muted:!0,children:e.jsx("source",{type:"video/mp4",src:D})})}),e.jsx("div",{className:"video-sliderx",children:e.jsx("video",{autoPlay:"autoplay",loop:!0,muted:!0,children:e.jsx("source",{type:"video/mp4",src:M})})}),e.jsx("div",{className:"video-sliderx",children:e.jsx("video",{autoPlay:"autoplay",loop:!0,muted:!0,children:e.jsx("source",{type:"video/mp4",src:L})})}),e.jsx("div",{className:"video-sliderx",children:e.jsx("video",{autoPlay:"autoplay",loop:!0,muted:!0,children:e.jsx("source",{type:"video/mp4",src:z})})}),e.jsx("div",{className:"video-sliderx",children:e.jsx("video",{autoPlay:"autoplay",loop:!0,muted:!0,children:e.jsx("source",{type:"video/mp4",src:q})})})]}),e.jsx("div",{className:"bg-overlay"}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"hero-box",children:e.jsx("div",{className:"row align-items-center hero",children:e.jsx("div",{className:"col-sm-12 col-md-10 col-lg-8 col-xl-7",children:e.jsxs("div",{"data-aos":"fade-up",className:"hero-content",children:[e.jsxs("h1",{children:[e.jsx("span",{children:"iOTAS"})," Solutions a leading CMMi-3 certified IT Services and Consulting Company."]}),e.jsx("p",{children:"We provide software solution that aligns technology with human and business.!"}),e.jsx(t,{to:"/contact-us",children:e.jsx("button",{className:"btn btn-outline-light btn-lg",children:"Get in Touch"})})]})})})})})]})},U="/assets/img1-bWuApjW_.jpg",J="/assets/img2-vFNJ7ugn.jpg",$="/assets/img3-DQzQHGJr.jpg",R=()=>e.jsx("div",{className:"our_stories",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{"data-aos":"fade-up",className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"heading",children:e.jsx(l,{title:"Stories",heading:"Our Success Stories",description:"We are a team of talented digital experts who constantly strive to improve ourselves with the aim of providing the best services for our clients."})})})}),e.jsx("div",{className:"story_box",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{"data-aos":"fade-up",className:"col_one",children:[e.jsx("img",{src:$,alt:"img",className:"img-fluid"}),e.jsxs("div",{className:"content",children:[e.jsx("button",{className:"btn btn-light",children:"view more"}),e.jsx("h4",{children:"We build great products to solve your business problems."})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12",children:e.jsxs("div",{"data-aos":"fade-up",className:"col_two",children:[e.jsx("img",{src:U,alt:"img",className:"img-fluid"}),e.jsxs("div",{className:"content",children:[e.jsx("button",{className:"btn btn-light",children:"view more"}),e.jsx("h4",{children:"Streamlined complex workflows, reducing operational costs by 40%."})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{"data-aos":"fade-up",className:"col_two",children:[e.jsx("img",{src:J,alt:"img",className:"img-fluid"}),e.jsxs("div",{className:"content",children:[e.jsx("button",{className:"btn btn-light",children:"view more"}),e.jsx("h4",{children:"Achieved a 98% client retention rate by deploying an intuitive customer service platform."})]})]})})]})})]})})]})}),Q=[{id:1,title:"Year's Experience",value:7,unit:"+"},{id:2,title:"Talented Squad",value:100,unit:"+"},{id:3,title:"Apps Developed",value:30,unit:"+"},{id:4,title:"Client Satisfaction",value:100,unit:"%"}],Y={order1:"order-2",order2:"order-1",img:N,title:"ABOUT US",heading:"Empowering Industries With Intelligent Insights.",desc:"iOTAS helps enterprise evolve digitally using industrial AI, synthesizing industrial data into actionable insights for enhanced productivity and optimized operations. Our comprehensive software-as-a-service platform, applications, and solutions leverage advanced analytics, deep learning, and conversational AI to drive measurable outcomes. We are dedicated to reshaping industries through innovation and intelligence."},ae=()=>e.jsxs("div",{children:[e.jsx(_,{}),e.jsx(f,{data:Q}),e.jsxs("div",{className:"bg-section",children:[e.jsx(v,{data:Y}),e.jsx(O,{}),e.jsx(R,{}),e.jsx(p,{}),e.jsx(k,{}),e.jsx(A,{}),e.jsx(H,{})]})]});export{ae as default};