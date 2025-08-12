import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ['en', 'sv'],
    load: 'languageOnly',
    resources: {
      sv: {
        translation: {
          headerSpan: 'Innovativ webbdesign av',
          headerSpan1: 'Frontendutvecklare',
          headerSpan2:
            'Skapande av intuitiva och responsiva användargränssnitt',
          headerP:
            'Med en stark passion för frontendutveckling är jag framstående på att integrera design och funktionalitet för att utveckla användarvänliga gränssnitt. Mitt engagemang och min kreativitet gör att jag effektivt kan omvandla kundvisioner till praktiska och attraktiva designer.',
          scrollDown: 'Skrolla ner',
          // about
          aboutSpan: 'Om mig',
          aboutH2: 'Min berättelse',
          aboutH5: 'Utbildning och Erfarenhet',
          aboutSmall: 'KYH Yrkeshögskola',
          aboutH6: 'Frontendutvecklare',
          aboutSmall1: 'DVNOWEB WEBBAGENTUR',
          aboutH6one: 'VD / grundare',
          aboutSmall2: 'sedan 2019',
          aboutH5one: 'Global Klientel',
          aboutSmall3: 'Betjänar över 20 kunder globalt',
          aboutH5two: 'Olika projekt',
          aboutSmall4: 'Har framgångsrikt slutfört över 20 projekt',
          aboutP1:
            'Jag är en driven och ambitiös yrkesperson, engagerad i att uppnå excellens i allt jag gör. Med en skarp blick för detaljer håller jag mig ständigt uppdaterad med de senaste branschtrenderna för att leverera spetslösningar.',
          aboutP2:
            'Mina starka kommunikationsförmågor och naturliga samarbetsförmåga gör mig till en snabblärd och mångsidig teammedlem. Jag är djupt motiverad av strävan efter ständig förbättring och ser fram emot att bidra med min entusiasm och expertis till ert team. Jag ser fram emot att ta mig an nya utmaningar och ge varje projekt en unik prägel.',
          aboutBtn: 'Låt oss prata',
          // Skills
          skillsSpan: 'En lista över mina tekniska färdigheter',
          skillsH2: 'Mina färdigheter',
          skillsSmall: 'Erfaren',
          skillsSmall1: 'Medel',
          skillsSmall2: 'Grundläggande',
          // Services
          servicesP1:
            'Jag erbjuder en mängd dynamiska tjänster som inkluderar webbutveckling, design, rådgivning och teknisk support. Oavsett om du planerar att skapa en helt ny webbplats från början eller vill lyfta en befintlig, har jag de kunskaper som krävs för att utforma en skräddarsydd lösning som passar just dina behov. Från att utveckla nyskapande designidéer till att tillämpa de senaste teknikerna inom webbutveckling, är jag helt inriktad på att göra din vision till verklighet. Med ett öga för detaljer och en passion för att leverera förstklassiga resultat är jag här för att överträffa dina förväntningar vid varje steg på vägen.',
          servicesP2:
            'Oavsett utmaningen är jag här för att hjälpa dig att uppnå dina mål och ta din närvaro på nätet till nästa nivå. Låt oss arbeta tillsammans för att skapa ett digitalt mästerverk som skiljer dig från konkurrensen.',
          servicesH2: 'Tjänster',
          servicesH3: 'Frontendutveckling',
          listP:
            'Expert på att skapa webbplatser med HTML och CSS, med fokus på responsiv design och grundläggande SEO för att säkerställa optimal prestanda och synlighet på alla enheter.',
          listP1:
            'Skicklig på att förbättra webbplatsers estetik och funktionalitet med Sass. Erfaren i att implementera JavaScript för dynamiska och interaktiva webbelement, säkerställande robust testning och kompatibilitet.',
          listP2:
            'Duktig på att använda React för att bygga skalbara webbapplikationer och React Native för att skapa plattformsoberoende mobilappar, med fokus på optimal användarupplevelse och prestanda.',
          listP3:
            'Bekant med TypeScript för att lägga till stark typning till JavaScript, vilket förbättrar kodkvaliteten och underhållbarheten. Grundläggande kunskaper i NextJS för att förbättra prestanda i webbapplikationer genom server-side rendering.',
          listP4:
            'Kompetent inom UI/UX-design, använder verktyg som Figma för att prototypa och skapa användarcentrerade designer som är både tilltalande och funktionella, vilket säkerställer ett sömlöst användargränssnitt.',
          listP5:
            'Mycket skicklig i att använda WordPress för att utveckla anpassade webbplatser skräddarsydda efter specifika kundbehov, inkluderar olika plugins och teman. Duktig på att tillämpa Scrum-tekniker för att effektivisera projektprocesser och förbättra samarbete i teamet.',
          servicesH3one: 'Backendutveckling',
          listP6:
            'Skicklig på att använda NodeJS för att köra JavaScript utanför en traditionell webbläsarmiljö, vilket möjliggör utveckling av skalbara och effektiva serverapplikationer.',
          listP7:
            'Kunnig i NoSQL-databastekniker, särskilt MongoDB. Erfaren i att designa och implementera databaslösningar som lagrar och hanterar data effektivt i ett JSON-liknande format, vilket optimerar dataåtkomst och skalbarhet.',
          listP8:
            'Duktig på att använda Express för att bygga robusta REST-API:er, vilket underlättar sömlösa interaktioner mellan klient- och serversidetekniker. Skicklig på att skapa konsekventa och tydliga API-endpoints som förbättrar webbapplikationers funktionalitet.',
          servicesH3two: 'Arbetsmetodik',
          listP9:
            'Erfaren med flera projektmetodiker, inklusive Agile, Scrum, Kanban och traditionella modeller. Min mångsidiga bakgrund hjälper mig att förstå och anpassa mig till varje metods unika krav. Jag är skicklig med utvecklingsverktyg, versionshantering och prioritering av testdriven utveckling för att säkerställa kvalitet i varje projekt.',
          listP10:
            'Med en stark grund i UX-designprinciper, användbarhet, beteendevetenskap och kommunikationsteori, har jag en djup förståelse för målgrupper och deras behov. Denna expertis möjliggör för mig att utveckla användarcentrerade webbplatser som effektivt tillgodoser alla användargrupper.',
          listP11:
            'Jag har omfattande erfarenhet av UI-design och använder olika tekniker och verktyg för att skapa effektiva gränssnitt. Min strategi inkluderar att använda atomära designprinciper för att bygga skalbara och underhållbara designsystem, vilket säkerställer konsistens och kvalitet över webbapplikationer.',
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
              review: "DVNOWEB AB är ett lyhört, kunnigt och ytterst professionellt företag. De byggde en fantastiskt fin webbplats för mitt företag, VAconsulting. De sköter allt, vilket är skönt eftersom småföretagare ofta inte har tid med sådana uppgifter. Dessutom är de välinsatta och kreativa när det gäller att föreslå nya lösningar för att sticka ut lite."
            },
            {
              id: 't2',
              avatar: 'AVT2',
              title: 'VD för Hår3000',
              name: 'Gabriel Pulgu',
              review: "Responsiva och mycket professionella, de har gjort vår webbplats två gånger till vår belåtenhet. Nu har de fått ett nytt projekt att bygga vår nya webbshop, hittills är jag mer än nöjd. Jag kan varmt rekommendera dem."
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
          headerSpan2: 'Creating Intuitive and Responsive User Interfaces',
          headerP:
            'With a strong passion for frontend development, I excel at integrating design and functionality to develop user-friendly interfaces. My commitment and creativity allow me to effectively transform client visions into practical and attractive designs.',
          scrollDown: 'Scroll down',
          // about
          aboutSpan: 'About me',
          aboutH2: 'My story',
          aboutH5: 'Education and Experience',
          aboutSmall: 'KYH University of Applied Sciences',
          aboutH6: 'Frontend developer',
          aboutSmall1: 'DVNOWEB WEB AGENCY',
          aboutH6one: 'CEO / founder',
          aboutSmall2: 'since 2019',
          aboutH5one: 'Global Clientele',
          aboutSmall3: 'Serving over 20 clients worldwide',
          aboutH5two: 'Diverse Projects',
          aboutSmall4: 'Successfully completed 20+ projects',
          aboutP1:
            'I am a driven and ambitious professional, committed to excellence in everything I do. With a keen eye for detail, I stay at the forefront of industry trends to provide cutting-edge solutions.',
          aboutP2:
            'My strong communication skills and natural ability to collaborate make me a quick learner and a versatile team member. I am deeply motivated by the pursuit of continual improvement and am eager to bring my enthusiasm and expertise to your team. I look forward to tackling new challenges and infusing every project with my unique flair.',
          aboutBtn: 'Let`s talk',
          // Skills
          skillsSpan: 'A list of my technical skills',
          skillsH2: 'My skills',
          skillsSmall: 'Experienced',
          skillsSmall1: 'Intermediate',
          skillsSmall2: 'Basic',
          // Services
          servicesP1:
            'I offer a range of dynamic services including web development, design, consultation, and technical support. Whether you`re looking to build a brand new website from the ground up or elevate an existing one, I have the expertise to craft a customized solution tailored to your unique needs. From brainstorming cutting-edge design concepts to implementing the latest web technologies, I`m dedicated to bringing your vision to life. With a keen focus on detail and a passion for delivering unparalleled results, I`m committed to exceeding your expectations every step of the way.',
          servicesP2:
            'No matter the challenge, I`m here to help you achieve your goals and take your online presence to the next level. Let`s work together to create a digital masterpiece that sets you apart from the competition.',
          servicesH2: 'Services',
          servicesH3: 'Frontend Development',
          listP:
            'Expert in crafting websites with HTML and CSS, focusing on responsive design and basic SEO to ensure optimal performance and visibility across all devices.',
          listP1:
            'Skilled in enhancing website aesthetics and functionality using Sass. Experienced in implementing JavaScript for dynamic and interactive web elements, ensuring robust testing and compatibility.',
          listP2:
            'Proficient in using React to build scalable web applications and React Native for crafting cross-platform mobile apps, focusing on optimal user experience and performance.',
          listP3:
            'Familiar with TypeScript for adding strong typing to JavaScript, enhancing code quality and maintainability. Basic knowledge of NextJS for improving web application performance through server-side rendering.',
          listP4:
            'Competent in UI/UX design, utilizing tools like Figma to prototype and create user-centric designs that are both appealing and functional, ensuring a seamless user interface.',
          listP5:
            'Highly skilled in using WordPress to develop custom websites tailored to specific client needs, incorporating various plugins and themes. Proficient in applying Scrum techniques to streamline project processes and enhance team collaboration.',
          servicesH3one: 'Backend development',
          listP6:
            'Skilled in utilizing NodeJS to run JavaScript outside of a traditional browser environment, enabling the development of scalable and efficient server-side applications.',
          listP7:
            'Knowledgeable in NoSQL database technologies, especially MongoDB. Experienced in designing and implementing database solutions that store and manage data efficiently in a JSON-like format, optimizing data retrieval and scalability.',
          listP8:
            'Proficient in using Express to build robust REST APIs, facilitating seamless interactions between client-side and server-side technologies. Skilled in creating consistent and straightforward API endpoints that enhance the functionality of web applications.',
          servicesH3two: 'Work methodology',
          listP9:
            'Experienced with multiple project methodologies, including Agile, Scrum, Kanban, and traditional models. My diverse background helps me understand and adapt to each method`s unique demands. I am proficient with development tools, version control, and prioritizing test-driven development to ensure quality in every project.',
          listP10:
            'With a strong foundation in UX design principles, usability, behavioral science, and communication theory, I deeply understand target audiences and their needs. This expertise allows me to develop user-centered websites that cater effectively to all user groups.',
          listP11:
            'I have extensive experience in UI design, employing various techniques and tools to craft efficient interfaces. My approach includes using atomic design principles to build scalable and maintainable design systems, ensuring consistency and quality across web applications.',
          // Portfolio
          portfolioSpan: 'My latest work',
          portfolioH2: 'Project',
          // Testimonials
          testimonialsSpan: 'What people say about me',
          testimonialsH2: 'Reviews',
          testimonials: [
            {
              id: 't1',
              avatar: 'AVT1',
              title: 'CEO VAconsulting',
              name: 'Vladan Andric',
              review: "DVNOWEB AB is a responsive, knowledgeable and thoroughly professional company. They built a super nice site for my company VAconsulting. They take care of everything, which is nice because you don't really have that time for small business owners. They are also well-read and creative about new solutions to stand out a little."
            },
            {
              id: 't2',
              avatar: 'AVT2',
              title: 'CEO Hår3000',
              name: 'Gabriel Pulgu',
              review: "Responsive and very professional, they have made our website twice to our satisfaction. Now they have received a new project to build our new webshop, so far I am more than satisfied. I can highly recommend them."
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
          footerA6: 'Project',
          footerA7: 'Reviews',
          footerA8: 'Contact',
          footerCopy: 'All rights reserved.',
        },
      },
    },
  })
