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
          headerSpan: 'Webbdesign och frontend av',
          headerSpan1: 'Frontendutvecklare',
          headerSpan2: 'Jag bygger tydliga, snabba och responsiva digitala upplevelser',
          headerP:
            'Jag hjälper företag att gå från idé till en modern webbplats eller app som känns enkel att använda, ser professionell ut och fungerar bra på alla skärmar. Mitt fokus är tydlig design, ren kod och lösningar som gör verklig nytta för både kunden och användaren.',
          scrollDown: 'Skrolla ner',
          ctaDownload: 'Ladda ner CV',
          ctaTalk: 'Starta ett samtal',
          // about
          aboutSpan: 'Om mig',
          aboutH2: 'Vem jag är',
          aboutH5: 'Bakgrund',
          aboutSmall: 'KYH Yrkeshögskola',
          aboutH6: 'Frontendutvecklare',
          aboutSmall1: 'DVNOWEB WEBBAGENTUR',
          aboutH6one: 'VD / grundare',
          aboutSmall2: 'sedan 2019',
          aboutH5one: 'Kunder',
          aboutSmall3: '20+ kunder i flera länder',
          aboutH5two: 'Projekt',
          aboutSmall4: '20+ färdiga webb- och appprojekt',
          aboutImageAlt: 'Porträtt av Dano Zaganjor',
          aboutP1:
            'Jag är frontendutvecklare och grundare av DVNOWEB. Jag gillar att skapa digitala lösningar som är enkla att förstå, lätta att använda och byggda med omsorg från första skiss till färdig lansering.',
          aboutP2:
            'I varje projekt kombinerar jag designkänsla, teknisk förståelse och tydlig kommunikation. Målet är att bygga något som inte bara ser bra ut, utan också hjälper kunden att växa, spara tid och skapa förtroende online.',
          aboutBtn: 'Kontakta mig',
          // Skills
          skillsSpan: 'Tekniker och verktyg jag arbetar med',
          skillsH2: 'Mina färdigheter',
          skillsSmall: 'Erfaren',
          skillsSmall1: 'Mellannivå',
          skillsSmall2: 'Grundläggande',
          // Services
          servicesP1:
            'Jag hjälper företag med webbplatser, appar, design och teknisk rådgivning. Oavsett om du behöver bygga något nytt eller förbättra en befintlig lösning tar jag fram en tydlig plan som passar dina mål, din målgrupp och ditt varumärke.',
          servicesP2:
            'Målet är enkelt: en lösning som är snygg, snabb, lätt att använda och byggd för att skapa resultat.',
          servicesH2: 'Tjänster',
          servicesH3: 'Frontendutveckling',
          listP:
            'Semantisk HTML och modern CSS för webbplatser som laddar snabbt, fungerar på alla skärmar och är enkla att vidareutveckla.',
          listP1:
            'JavaScript och Sass för interaktiva gränssnitt, mjuka användarflöden och design som känns genomarbetad.',
          listP2:
            'React för skalbara webbappar och React Native för mobilappar till både iOS och Android.',
          listP3:
            'TypeScript och Next.js när projektet behöver bättre struktur, högre prestanda och stabilare kod.',
          listP4:
            'UI/UX-design i Figma med fokus på tydliga flöden, bra läsbarhet och gränssnitt som känns naturliga att använda.',
          listP5:
            'WordPress-lösningar anpassade efter kundens behov, från struktur och design till plugins, innehåll och lansering.',
          servicesH3one: 'Backendutveckling',
          listP6:
            'Node.js för effektiva serverlösningar och funktioner som kopplar ihop frontend med data och affärslogik.',
          listP7:
            'MongoDB och NoSQL för flexibel lagring av innehåll, användardata och applikationsinformation.',
          listP8:
            'Express och REST-API:er för tydliga integrationer mellan webbplats, app och externa tjänster.',
          servicesH3two: 'Arbetsmetodik',
          listP9:
            'Jag arbetar strukturerat med planering, prioritering och tät kommunikation. Agile, Scrum, Kanban, Git och testning hjälper mig att hålla projekt tydliga och kvaliteten hög.',
          servicesH3three: 'UI & UX-design',
          listP10:
            'Jag utgår från användarens behov och skapar flöden som är logiska, tillgängliga och enkla att följa.',
          listP11:
            'Jag bygger visuella system som känns professionella, konsekventa och lätta att utveckla vidare över tid.',
          // Portfolio
          portfolioSpan: 'Utvalda projekt',
          portfolioH2: 'Projekt',
          projectLiveDemo: 'Se projekt',
          projectGithub: 'GitHub',
          projectIos: 'iOS',
          projectAndroid: 'Android',
          projects: {
            jobaxs: {
              title: 'JobAXS',
              description: 'En modern rekryterings- och jobbplattform med tydliga flöden för kandidater och arbetsgivare.',
            },
            prisento: {
              title: 'Prisento App',
              description: 'En mobilapp för iOS och Android, byggd med fokus på smidig användning och en tydlig appupplevelse.',
            },
            eventBooking: {
              title: 'Fullstack-app för eventbokning',
              description: 'En bokningsplattform byggd med Next.js, TypeScript, Convex, Stripe, Clerk och Tailwind CSS.',
            },
            coworking: {
              title: 'Bokning för co-working',
              description: 'Ett fullstack-projekt för bokningar, byggt med Next.js, React, Tailwind CSS, Prisma, MongoDB och NextAuth.',
            },
            portfolio: {
              title: 'Min React-portfolio',
              description: 'En ren och personlig portfolio byggd med React, JavaScript och CSS.',
            },
            shoppingCart: {
              title: 'Shopping Cart',
              description: 'En enkel och tydlig kundvagn byggd med React, TypeScript och Context API.',
            },
          },
          // Testimonials
          testimonialsSpan: 'Vad kunder säger',
          testimonialsH2: 'Recensioner',
          testimonials: [
            {
              id: 't1',
              avatar: 'AVT1',
              title: 'VD för VAconsulting',
              name: 'Vladan Andric',
              review:
                'DVNOWEB AB är lyhörda, kunniga och mycket professionella. De skapade en fantastisk webbplats för VAconsulting och gjorde hela processen trygg och smidig. För en småföretagare är den typen av stöd ovärderlig. De är dessutom kreativa och bra på att hitta lösningar som hjälper ett företag att sticka ut.',
            },
            {
              id: 't2',
              avatar: 'AVT2',
              title: 'VD för Hår3000',
              name: 'Gabriel Pulgu',
              review:
                'De är snabba, tydliga och mycket professionella. De har byggt vår webbplats två gånger, båda gångerna med ett resultat vi är väldigt nöjda med. Nu bygger de även vår nya webbshop, och hittills är jag mer än nöjd. Jag rekommenderar dem varmt.',
            },
            // More testimonials
          ],
          // Contact
          contactSpan: 'Har du ett projekt på gång?',
          contactH4: 'Telefon',
          contactH2: 'Kontakt',
          contactA1: 'Skicka SMS',
          contactA2: 'Ring mig',
          contactA3: 'Skriv på WhatsApp',
          contactInput1: 'Ditt fullständiga namn',
          contactInput2: 'Din e-postadress',
          contactInput3: 'Ditt meddelande',
          contactBtn: 'Skicka förfrågan',
          contactAlertSuccess: 'Tack! Ditt meddelande har skickats.',
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
          headerSpan: 'Web design and frontend by',
          headerSpan1: 'Frontend Developer',
          headerSpan2: 'I build clear, fast, and responsive digital experiences',
          headerP:
            'I help businesses turn ideas into modern websites and apps that are easy to use, professional to look at, and reliable on every screen. My focus is clear design, clean code, and solutions that create real value for both the client and the user.',
          scrollDown: 'Scroll down',
          ctaDownload: 'Download CV',
          ctaTalk: "Let's talk",
          // about
          aboutSpan: 'About me',
          aboutH2: 'Who I am',
          aboutH5: 'Background',
          aboutSmall: 'KYH University of Applied Sciences',
          aboutH6: 'Frontend developer',
          aboutSmall1: 'DVNOWEB WEB AGENCY',
          aboutH6one: 'CEO / Founder',
          aboutSmall2: 'since 2019',
          aboutH5one: 'Clients',
          aboutSmall3: '20+ clients across several countries',
          aboutH5two: 'Projects',
          aboutSmall4: '20+ completed web and app projects',
          aboutImageAlt: 'Portrait of Dano Zaganjor',
          aboutP1:
            'I am a frontend developer and the founder of DVNOWEB. I enjoy creating digital products that are simple to understand, easy to use, and built with care from the first idea to the final launch.',
          aboutP2:
            'In every project, I combine design thinking, technical skill, and clear communication. The goal is to build something that not only looks good, but also helps the client grow, save time, and build trust online.',
          aboutBtn: 'Contact me',
          // Skills
          skillsSpan: 'Technologies and tools I work with',
          skillsH2: 'My skills',
          skillsSmall: 'Experienced',
          skillsSmall1: 'Intermediate',
          skillsSmall2: 'Basic',
          // Services
          servicesP1:
            'I help businesses with websites, apps, design, and technical guidance. Whether you need something new or want to improve an existing product, I create a clear plan around your goals, your audience, and your brand.',
          servicesP2:
            'The goal is simple: a solution that looks sharp, loads fast, feels easy to use, and is built to deliver results.',
          servicesH2: 'Services',
          servicesH3: 'Frontend Development',
          listP:
            'Semantic HTML and modern CSS for websites that load fast, work on every screen, and are easy to maintain.',
          listP1:
            'JavaScript and Sass for interactive interfaces, smooth user flows, and polished visual details.',
          listP2:
            'React for scalable web applications and React Native for mobile apps on both iOS and Android.',
          listP3:
            'TypeScript and Next.js when a project needs stronger structure, better performance, and more reliable code.',
          listP4:
            'UI/UX design in Figma with a focus on clear flows, strong readability, and interfaces that feel natural to use.',
          listP5:
            'Custom WordPress solutions shaped around the client’s needs, from structure and design to plugins, content, and launch.',
          servicesH3one: 'Backend Development',
          listP6:
            'Node.js for efficient server-side features that connect the frontend with data and business logic.',
          listP7:
            'MongoDB and NoSQL for flexible storage of content, user data, and application information.',
          listP8:
            'Express and REST APIs for clear integrations between websites, apps, and external services.',
          servicesH3two: 'Work Methodology',
          listP9:
            'I work with clear planning, priorities, and close communication. Agile, Scrum, Kanban, Git, and testing help me keep projects focused and quality high.',
          servicesH3three: 'UI & UX design',
          listP10:
            'I start from the user’s needs and create flows that are logical, accessible, and easy to follow.',
          listP11:
            'I build visual systems that feel professional, consistent, and easy to develop further over time.',
          // Portfolio
          portfolioSpan: 'Selected work',
          portfolioH2: 'Projects',
          projectLiveDemo: 'View project',
          projectGithub: 'GitHub',
          projectIos: 'iOS',
          projectAndroid: 'Android',
          projects: {
            jobaxs: {
              title: 'JobAXS',
              description: 'A modern recruitment and job platform with clear flows for candidates and employers.',
            },
            prisento: {
              title: 'Prisento App',
              description: 'A mobile app for iOS and Android, built around smooth use and a clear app experience.',
            },
            eventBooking: {
              title: 'Full-stack event booking app',
              description: 'A booking platform built with Next.js, TypeScript, Convex, Stripe, Clerk, and Tailwind CSS.',
            },
            coworking: {
              title: 'Co-working booking',
              description: 'A full-stack booking project built with Next.js, React, Tailwind CSS, Prisma, MongoDB, and NextAuth.',
            },
            portfolio: {
              title: 'My React portfolio',
              description: 'A clean and personal portfolio built with React, JavaScript, and CSS.',
            },
            shoppingCart: {
              title: 'Shopping cart',
              description: 'A simple and clear shopping cart built with React, TypeScript, and the Context API.',
            },
          },
          // Testimonials
          testimonialsSpan: 'What clients say',
          testimonialsH2: 'Reviews',
          testimonials: [
            {
              id: 't1',
              avatar: 'AVT1',
              title: 'CEO of VAconsulting',
              name: 'Vladan Andric',
              review:
                'DVNOWEB AB is responsive, knowledgeable, and highly professional. They created an excellent website for VAconsulting and made the whole process smooth and reliable. For a small business owner, that kind of support is invaluable. They are also creative and good at finding solutions that help a business stand out.',
            },
            {
              id: 't2',
              avatar: 'AVT2',
              title: 'CEO of Hår3000',
              name: 'Gabriel Pulgu',
              review:
                'They are fast, clear, and highly professional. They have built our website twice, both times with a result we are very happy with. They are now also building our new webshop, and so far I am more than satisfied. I highly recommend them.',
            },
            // More testimonials
          ],
          // Contact
          contactSpan: 'Have a project in mind?',
          contactH4: 'Phone',
          contactH2: 'Contact',
          contactA1: 'Send SMS',
          contactA2: 'Call me',
          contactA3: 'Message me on WhatsApp',
          contactInput1: 'Your full name',
          contactInput2: 'Your email address',
          contactInput3: 'Your message',
          contactBtn: 'Send request',
          contactAlertSuccess: 'Thanks! Your message has been sent.',
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
