import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    resources: {
      sv: {
        translation: {
          headerSpan: 'Innovativ webbdesign av',
          headerSpan1: 'Frontendutvecklare',
          headerSpan2:
            'Designar intuitiva och responsiva digitala upplevelser',
          headerP:
            'Jag hjälper företag och varumärken att förvandla idéer till moderna, användarvänliga och visuellt starka digitala upplevelser. Genom att kombinera design, teknik och affärsförståelse skapar jag lösningar som både engagerar användare och stärker varumärket.',
          scrollDown: 'Skrolla ner',
          // about
          aboutSpan: 'Om mig',
          aboutH2: 'Min berättelse',
          aboutH5: 'Utbildning och erfarenhet',
          aboutSmall: 'KYH Yrkeshögskola',
          aboutH6: 'Frontendutvecklare',
          aboutSmall1: 'DVNOWEB WEBBAGENTUR',
          aboutH6one: 'VD / grundare',
          aboutSmall2: 'sedan 2019',
          aboutH5one: 'Global kundkrets',
          aboutSmall3: 'Betjänar över 20 kunder globalt',
          aboutH5two: 'Olika projekt',
          aboutSmall4: 'Har framgångsrikt slutfört över 20 projekt',
          aboutP1:
            'Jag är en driven och ambitiös frontendutvecklare med ett starkt fokus på kvalitet, detaljer och användarupplevelse. Genom att ständigt hålla mig uppdaterad om branschens utveckling kan jag leverera moderna lösningar som är både hållbara och effektiva.',
          aboutP2:
            'Jag kombinerar stark kommunikationsförmåga med ett naturligt sinne för samarbete, vilket gör mig till en flexibel och lösningsorienterad partner i både team och kundprojekt. Min drivkraft är att skapa tydligt affärsvärde genom genomtänkt design, smart teknik och ett genuint engagemang i varje uppdrag.',
          aboutBtn: 'Låt oss prata',
          // Skills
          skillsSpan: 'En lista över mina tekniska färdigheter',
          skillsH2: 'Mina färdigheter',
          skillsSmall: 'Erfaren',
          skillsSmall1: 'Mellannivå',
          skillsSmall2: 'Grundläggande',
          // Services
          servicesP1:
            'Jag erbjuder tjänster inom webbutveckling, design, rådgivning och teknisk support för företag som vill stärka sin digitala närvaro. Oavsett om du behöver en helt ny webbplats eller vill vidareutveckla en befintlig lösning, tar jag fram ett upplagg som är anpassat efter dina mål, din målgrupp och ditt varumärke. Från idé och design till utveckling och lansering arbetar jag med fullt fokus på kvalitet, tydlighet och resultat.',
          servicesP2:
            'Målet är alltid detsamma: att skapa en lösning som inte bara ser bra ut, utan också fungerar effektivt, bygger förtroende och hjälper dig att sticka ut i en konkurrensutsatt digital miljö.',
          servicesH2: 'Tjänster',
          servicesH3: 'Frontendutveckling',
          listP:
            'Stark grund i HTML och CSS med fokus på responsiv design, tillgänglighet och grundläggande SEO för att säkerställa hög prestanda och tydlig närvaro på alla enheter.',
          listP1:
            'Skicklig på att förbättra webbplatsers estetik och funktionalitet med Sass. Erfaren i att implementera JavaScript för dynamiska och interaktiva webbelement samt att säkerställa robust testning och kompatibilitet.',
          listP2:
            'Duktig på att använda React för att bygga skalbara webbapplikationer och React Native för att skapa plattformsoberoende mobilappar, alltid med fokus på användarupplevelse, prestanda och långsiktig kvalitet.',
          listP3:
            'Bekant med TypeScript för att lägga till stark typning i JavaScript, vilket förbättrar kodkvaliteten och underhållbarheten. Har även grundläggande kunskaper i Next.js för att förbättra prestandan i webbapplikationer genom serversiderendering.',
          listP4:
            'Kompetent inom UI/UX-design och van att använda verktyg som Figma för att skapa användarcentrerade gränssnitt som är både visuellt tilltalande och funktionella.',
          listP5:
            'Mycket skicklig i att använda WordPress för att utveckla anpassade webbplatser skräddarsydda efter specifika kundbehov, inklusive olika plugins och teman. Duktig på att tillämpa Scrum-tekniker för att effektivisera projektprocesser och förbättra samarbetet i teamet.',
          servicesH3one: 'Backendutveckling',
          listP6:
            'Skicklig på att använda Node.js för att köra JavaScript utanför en traditionell webbläsarmiljö, vilket möjliggör utveckling av skalbara och effektiva serverapplikationer.',
          listP7:
            'Kunnig i NoSQL-databastekniker, särskilt MongoDB. Erfaren i att designa och implementera databaslösningar som lagrar och hanterar data effektivt i ett JSON-liknande format, vilket optimerar dataåtkomst och skalbarhet.',
          listP8:
            'Duktig på att använda Express för att bygga robusta REST-API:er som möjliggör smidiga integrationer mellan klient- och serversidan. Jag lägger stor vikt vid tydliga, konsekventa och hållbara API-strukturer.',
          servicesH3two: 'Arbetsmetodik',
          listP9:
            'Erfaren av flera projektmetoder, inklusive Agile, Scrum, Kanban och traditionella modeller. Min mångsidiga bakgrund hjälper mig att förstå och anpassa mig till varje metods unika krav. Jag är skicklig i att använda utvecklingsverktyg, versionshantering och testdriven utveckling för att säkerställa kvalitet i varje projekt.',
          listP10:
            'Med en stark grund i UX-designprinciper, användbarhet, beteendevetenskap och kommunikationsteori har jag en god förståelse för målgrupper och deras behov. Det gör att jag kan skapa användarcentrerade lösningar som känns tydliga, relevanta och enkla att använda.',
          listP11:
            'Jag har omfattande erfarenhet av UI-design och använder beprövade metoder för att skapa tydliga, konsekventa och effektiva gränssnitt. Min arbetsmetod bygger på skalbara designprinciper som gör lösningarna lättare att underhålla och vidareutveckla över tid.',
          // Portfolio
          portfolioSpan: 'Mitt senaste arbete',
          portfolioH2: 'Projekt',
          // Testimonials
          testimonialsSpan: 'Vad folk säger om mig',
          testimonialsH2: 'Recensioner',
          testimonials: [
            {
              id: 't1',
              avatar: 'AVT1',
              title: 'VD för VAconsulting',
              name: 'Vladan Andric',
              review: 'DVNOWEB AB är ett lyhört, kunnigt och mycket professionellt företag. De skapade en fantastisk webbplats för mitt företag, VAconsulting, och tog hand om hela processen på ett tryggt och smidigt sätt. För en småföretagare är det ovärderligt att få den typen av stöd. De är dessutom både kreativa och strategiska när det gäller att hitta lösningar som hjälper ett företag att sticka ut.'
            },
            {
              id: 't2',
              avatar: 'AVT2',
              title: 'VD för Hår3000',
              name: 'Gabriel Pulgu',
              review: 'De är responsiva och mycket professionella, och de har byggt vår webbplats två gånger till vår fulla belåtenhet. Nu har de dessutom fått ett nytt uppdrag att bygga vår nya webbshop, och hittills är jag mer än nöjd. Jag kan varmt rekommendera dem.'
            },
            // More testimonials
          ],
          // Contact
          contactSpan: 'Hör av dig till mig',
          contactH4: 'Telefon',
          contactH2: 'Kontakt',
          contactA1: 'Skicka SMS',
          contactA2: 'Ring mig',
          contactA3: 'Ring mig eller skicka mig ett SMS',
          contactInput1: 'Ditt fullständiga namn',
          contactInput2: 'Din e-postadress',
          contactInput3: 'Ditt meddelande',
          contactBtn: 'Skicka meddelande',
          contactAlertSuccess: 'Meddelandet skickades!',
          contactAlertError: 'Ett fel uppstod. Försök igen.',
          // Footer
          footerA1: 'Skrolla upp',
          footerA2: 'Upp',
          footerA3: 'Om mig',
          footerA4: 'Färdigheter',
          footerA5: 'Tjänster',
          footerA6: 'Projekt',
          footerA7: 'Recensioner',
          footerA8: 'Kontakt',
          footerCopy: 'Alla rättigheter förbehållna.',
        },
      },
      en: {
        translation: {
          headerSpan: 'Innovative Web Design by',
          headerSpan1: 'Frontend Developer',
          headerSpan2: 'Designing intuitive and responsive digital experiences',
          headerP:
            'I help businesses and brands turn ideas into modern, user-friendly, and visually compelling digital experiences. By combining design, technology, and business insight, I create solutions that engage users and strengthen brands.',
          scrollDown: 'Scroll down',
          // about
          aboutSpan: 'About me',
          aboutH2: 'My story',
          aboutH5: 'Education and Experience',
          aboutSmall: 'KYH University of Applied Sciences',
          aboutH6: 'Frontend developer',
          aboutSmall1: 'DVNOWEB WEB AGENCY',
          aboutH6one: 'CEO / Founder',
          aboutSmall2: 'since 2019',
          aboutH5one: 'Global Clientele',
          aboutSmall3: 'Serving over 20 clients worldwide',
          aboutH5two: 'Diverse Projects',
          aboutSmall4: 'Successfully completed 20+ projects',
          aboutP1:
            'I am a driven and ambitious frontend developer with a strong focus on quality, detail, and user experience. By staying current with industry trends, I am able to deliver modern solutions that are both sustainable and effective.',
          aboutP2:
            'I combine strong communication skills with a natural collaborative mindset, which makes me a flexible and solution-oriented partner in both team environments and client projects. My goal is to create real business value through thoughtful design, smart technology, and a genuine commitment to every project I take on.',
          aboutBtn: "Let's talk",
          // Skills
          skillsSpan: 'A list of my technical skills',
          skillsH2: 'My skills',
          skillsSmall: 'Experienced',
          skillsSmall1: 'Intermediate',
          skillsSmall2: 'Basic',
          // Services
          servicesP1:
            'I offer services in web development, design, consultation, and technical support for businesses that want to strengthen their digital presence. Whether you need a brand-new website or want to improve an existing solution, I create an approach tailored to your goals, your audience, and your brand. From concept and design to development and launch, I work with a clear focus on quality, clarity, and results.',
          servicesP2:
            'The goal is always the same: to create a solution that not only looks great, but also performs effectively, builds trust, and helps you stand out in a competitive digital landscape.',
          servicesH2: 'Services',
          servicesH3: 'Frontend Development',
          listP:
            'Strong foundation in HTML and CSS, with a focus on responsive design, accessibility, and basic SEO to ensure high performance and visibility across all devices.',
          listP1:
            'Skilled in enhancing website aesthetics and functionality using Sass. Experienced in implementing JavaScript for dynamic and interactive web elements, ensuring robust testing and compatibility.',
          listP2:
            'Proficient in using React to build scalable web applications and React Native to create cross-platform mobile apps, always with a strong focus on user experience, performance, and long-term quality.',
          listP3:
            'Familiar with TypeScript for adding strong typing to JavaScript, enhancing code quality and maintainability. I also have basic knowledge of Next.js for improving web application performance through server-side rendering.',
          listP4:
            'Experienced in UI/UX design and comfortable using tools like Figma to create user-centered interfaces that are both visually appealing and highly functional.',
          listP5:
            'Highly skilled in using WordPress to develop custom websites tailored to specific client needs, incorporating various plugins and themes. Proficient in applying Scrum techniques to streamline project processes and enhance team collaboration.',
          servicesH3one: 'Backend Development',
          listP6:
            'Skilled in using Node.js to run JavaScript outside of a traditional browser environment, enabling the development of scalable and efficient server-side applications.',
          listP7:
            'Knowledgeable in NoSQL database technologies, especially MongoDB. Experienced in designing and implementing database solutions that store and manage data efficiently in a JSON-like format, optimizing data retrieval and scalability.',
          listP8:
            'Proficient in using Express to build robust REST APIs that support smooth integration between client-side and server-side technologies. I place strong emphasis on creating clear, consistent, and maintainable API structures.',
          servicesH3two: 'Work Methodology',
          listP9:
            'Experienced with multiple project methodologies, including Agile, Scrum, Kanban, and traditional models. My diverse background helps me understand and adapt to each method\'s unique demands. I am proficient in using development tools, version control, and test-driven development to ensure quality in every project.',
          listP10:
            'With a strong foundation in UX design principles, usability, behavioral science, and communication theory, I have a solid understanding of target audiences and their needs. This allows me to create user-centered solutions that feel clear, relevant, and easy to use.',
          listP11:
            'I have extensive experience in UI design and use proven methods to create clear, consistent, and effective interfaces. My approach is built on scalable design principles that make solutions easier to maintain and develop over time.',
          // Portfolio
          portfolioSpan: 'My latest work',
          portfolioH2: 'Projects',
          // Testimonials
          testimonialsSpan: 'What people say about me',
          testimonialsH2: 'Reviews',
          testimonials: [
            {
              id: 't1',
              avatar: 'AVT1',
              title: 'CEO of VAconsulting',
              name: 'Vladan Andric',
              review: 'DVNOWEB AB is a responsive, knowledgeable, and highly professional company. They created an excellent website for my company, VAconsulting, and managed the entire process in a smooth and reliable way. As a small business owner, that kind of support is invaluable. They are also creative and strategic when it comes to finding solutions that help a business stand out.'
            },
            {
              id: 't2',
              avatar: 'AVT2',
              title: 'CEO of Hår3000',
              name: 'Gabriel Pulgu',
              review: 'They are responsive and highly professional. They have built our website twice, both times to our full satisfaction. They have now taken on a new project to build our new webshop, and so far I am more than satisfied. I can highly recommend them.'
            },
            // More testimonials
          ],
          // Contact
          contactSpan: 'Get in touch with me',
          contactH4: 'Phone',
          contactH2: 'Contact',
          contactA1: 'Send SMS',
          contactA2: 'Call me',
          contactA3: 'Call me or send me an SMS',
          contactInput1: 'Your full name',
          contactInput2: 'Your email address',
          contactInput3: 'Your message',
          contactBtn: 'Send message',
          contactAlertSuccess: 'Message sent successfully!',
          contactAlertError: 'An error occurred. Please try again.',
          // Footer
          footerA1: 'Scroll up',
          footerA2: 'Top',
          footerA3: 'About me',
          footerA4: 'Skills',
          footerA5: 'Services',
          footerA6: 'Projects',
          footerA7: 'Reviews',
          footerA8: 'Contact',
          footerCopy: 'All rights reserved.',
        },
      },
    },
  })
