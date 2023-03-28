const contacts = [
  {
    label: 'Nome e cognome',
    value: 'Guglielmo Serina'
  },
  {
    label: 'Data di nascita',
    value: '20/07/1998'
  },
  {
    label: 'Email',
    value: 'guglielmoserina.98@gmail.com'
  },
  {
    label: 'Indirizzo',
    value: 'Brescia'
  },
  {
    label: 'Telefono',
    value: '+39 347 39 13 865'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/guglielmo-serina-1152b3176',
    isLink: true
  }
]

const education = [
  {
    label: '2022 <br> Certificazione Prestashop',
    value: 'Sviluppatore front end Prestashop certificato'
  },
  {
    label: '2019 <br> Corso di formazione',
    value: 'Consorzio Informatico Bresciano',
    note: `
      html, css, javascript
      progettazione pagine web - wirefrime
      landing page, e-commerce
      SEO - posizionamento motori di ricerca
      UI & UX - cenni teorici e pratici
    `
  },
  {
    label: '2012 - 2018 <br> Scuola superiore',
    value: 'Diploma ragioniere programmatore',
    note: 'Don Lorenzo Milani, Montichiari, BS'
  },
]

const workingExperiences = [
  {
    label: '10/2019 - Presente',
    value: 'WAD Agency - Frontend developer',
    note: `
      Lavoro in web agency prestashop partner che sviluppa ecommerce e siti web catalogo. <br>
      Tecnologie utilizzate: laravel + twig & php + smarty. <br>
      Mi occupo di: <br>
       - sviluppo di temi custom utilizzando npm, webpack, scss, vanilla js, twig/smarty <br>
       - bug fixing di plugin <br>
       - creazione da zero del progetto, fase di test e messa in produzione <br>
       - deploy tramite git/ssh <br>
       - analisi cross browser tramite browserstack <br>
       - migrazione siti ecommerce/catalogo <br>
       - ottimizzazioni seo e performance <br>
      Questo elenco inteso sia in ambiente laravel che prestashop. 
    `
  }
]

const languages = [
  {
    label: 'Italiano',
    value: 'Madrelingua',
  }, {
    label: 'Inglese',
    value: 'B1'
  }
]

const skills = [
  {
    label: 'CSS',
    value: 'Bootstrap, Tailwind',
    note: `
      Utlizzo quotidiano di bootstrap tramite preprocessore SASS. <br>
      Conoscenza basilare di Tailwind
    `
  },
  {
    label: 'Javascript',
    value: 'GSAP, Node, Webpack, Vite, NPM, AJAX, API',
    note: 'Conoscenza anche di codice legacy JQuery'
  },
  {
    label: 'PHP & Mysql',
    value: 'Conoscenza base',
    note: 'Bug fixing in php, Mysql import ed export, migrazioni'
  },
  {
    label: 'CMS',
    value: 'October CMS, Prestashop, Laravel',
    note: `
    Sviluppo di temi custom sia su october che su prestashop. <br> 
    Il primo utilizzato per siti catalogo, è sviluppato in laravel.
    Il secondo per lo sviluppo di ecommerce.
    `
  },
  {
    label: 'Template engine',
    value: 'Twig, Smarty'
  }, {
    label: 'GIT',
    value: 'Utilizzo quotidiano'
  }
]

const data = [
  ['Informazioni personali', [...contacts]], 
  ['Esperienze lavorative', [...workingExperiences]],
  ['Formazione', [...education]], 
  ['Conoscienze linguistiche', [...languages]], 
  ['Competenze tecniche', [...skills]]
]

export { data };