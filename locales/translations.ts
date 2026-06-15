export type Lang = 'fr' | 'en'

const fr = {
  langName: { fr: 'FR', en: 'EN' },

  nav: {
    brand: 'Cours Particuliers',
    items: [
      ['Accueil', 'accueil'],
      ['Méthode', 'methode'],
      ['Matières', 'matieres'],
      ['Témoignages', 'temoignages'],
      ['Contact', 'contact'],
    ] as [string, string][],
    toggleLabel: 'Changer de langue',
  },

  hero: {
    title: { p1: 'Transforme tes ', w1: 'difficultés', p2: ' en ', w2: 'réussites' },
    subtitle1: 'Ingénieur civil en Informatique & IA, passionné par l’enseignement.',
    subtitle2: 'Pédagogie moderne et personnalisée pour atteindre tes objectifs.',
    statStudents: 'Élèves accompagnés',
    statExperience: 'Années d’expérience',
    quote: { part1: 'L’excellence n’est pas une destination, c’est un ', highlight: 'voyage continu' },
    ctaTitle: 'Réserver un cours',
    ctaSubtitle: 'Commence ta transformation',
    labelModalites: 'Modalités',
    labelDisponibilite: 'Disponibilité',
    labelLocalisation: 'Localisation',
    modalites: ['Cours chez le professeur', 'Cours en ligne'],
    disponibilite: 'Très flexible (semaine & week-end)',
    zone: '6181 Gouy-Lez-Piéton, Courcelles, Belgique',
  },

  method: {
    title: 'Pourquoi me choisir ?',
    subtitle: 'Une approche personnalisée pour ta réussite',
    items: [
      {
        title: 'Pédagogie personnalisée',
        description:
          'Chaque élève est unique. J’adapte mes séances et ma méthodologie à ton profil, tes objectifs et ton rythme d’apprentissage.',
      },
      {
        title: 'Exercices & corrections',
        description:
          'Je te propose des exercices adaptés à ton niveau selon tes besoins. Je prends le temps de corriger et d’expliquer chaque point pour t’aider à mieux comprendre et progresser.',
      },
      {
        title: 'Disponible en dehors des cours',
        description:
          'En dehors des séances, je reste disponible pour de courtes questions, une vérification d’exercice ou une clarification rapide.',
      },
    ],
  },

  services: {
    title: 'Mes Spécialités',
    subtitle: 'Maths, Physique & Programmation • Un accompagnement complet et sur-mesure',
    ellipsis: '… et bien plus',
    subjects: [
      {
        title: 'Mathématiques',
        levels: '1re → 6e Secondaire',
        topics: ['Analyse', 'Algèbre', 'Trigonométrie', 'Géométrie', 'Statistiques'],
        benefits: [
          'Maîtrise approfondie du programme officiel',
          'Méthodologie personnalisée selon le niveau',
          'Préparation efficace aux évaluations',
          'Explications claires, structurées et visuelles',
        ],
      },
      {
        title: 'Physique',
        levels: '3e → 6e Secondaire',
        topics: ['Électricité', 'Mécanique', 'Optique', 'Ondes', 'Thermodynamique'],
        benefits: [
          'Maîtrise approfondie du programme officiel',
          'Approche concrète par exemples réels',
          'Préparation ciblée aux évaluations',
          'Concepts complexes expliqués simplement',
        ],
      },
      {
        title: 'Programmation Python',
        levels: 'Niveau Débutants',
        topics: ['Bases', 'Projets', 'Game Dev', 'Algorithmes', 'Logique'],
        benefits: [
          'De zéro aux projets concrets',
          'Apprentissage ludique, progressif et pratique',
          'Compréhension théorique des concepts clés',
          'Compétence clé recherchée sur le marché',
        ],
      },
    ],
  },

  temoignages: {
    title: 'Témoignages',
    subtitle: 'La réussite de mes élèves parle d’elle-même',
    prevLabel: 'Témoignage précédent',
    nextLabel: 'Témoignage suivant',
    authorOverrides: {} as Record<string, string>,
    items: [
      {
        text: 'Ma fille a adoré ses sessions sur la trigonométrie avec Mathis ; il maîtrise clairement le sujet et sait se mettre à la place de l’élève. Ses explications sont claires et il n’hésite pas à se répéter si nécessaire. Nous referons appel à lui sans hésitation.',
        role: 'Parent d’élève – Maths',
      },
      {
        text: 'Très satisfaite. Ponctuel, aimable. Mon fils a apprécié sa manière d’expliquer. À recommander.',
        role: 'Parent d’élève – Physique',
      },
      {
        text: 'Mathis est un professeur excellent. Très sérieux et extrêmement ordonné. Il prépare ses cours à l’avance et donne des exercices pour le cours suivant. Je le recommande fortement !',
        role: 'Parent d’élève – Physique',
      },
      {
        text: 'Notre fils Guido a eu un examen de passage en maths après une année très compliquée. En deux semaines (2h/jour), Mathis a revu et expliqué clairement une année complète. Guido a réussi son examen. Un immense merci pour son travail et sa patience !',
        role: 'Parent d’élève – Mathématiques',
      },
      {
        text: 'Mon fils a suivi des cours de maths et de physique avec Mathis pour réussir sa seconde session (5ème option Math/Sciences). Il est disponible, poli et ponctuel. Il prépare ses cours à l’avance et est très organisé. Mon fils a réussi ses examens et est prêt à entamer sa rhéto. Je recommande Mathis comme professeur particulier.',
        role: 'Parent d’élève – Maths & Physique',
      },
      {
        text: 'Très bon professeur, étude efficace dans une ambiance agréable. Ma fille, qui avait de grosses difficultés, a retrouvé confiance et réussi son examen. Je recommande vivement !',
        role: 'Parent d’élève – Maths',
      },
      {
        text: 'Il m’a aidé pour mes examens et m’a permis de me remettre à niveau. Il explique clairement et s’adapte selon les besoins. Je vous le conseille sans hésiter.',
        role: 'Ancien élève – Maths',
      },
      {
        text: 'Ayant reçu de l’aide de Mathis dans certains cours, je peux témoigner de sa capacité à expliquer clairement et à rendre accessibles des notions complexes, en particulier en mathématiques.',
        role: 'Recommandation',
      },
      {
        text: 'Mathis a toujours su rendre les mathématiques et les sciences accessibles. Patient et pédagogue, il aide à comprendre et à faire des liens entre les concepts. Je le recommande vivement.',
        role: 'Recommandation',
      },
      {
        text: 'Je recommande vivement Mathis pour des cours de mathématiques et de physique au secondaire. Grâce à ses explications claires et à son approche patiente, il aide réellement les élèves à progresser et à gagner en confiance.',
        role: 'Recommandation',
      },
    ],
  },

  contact: {
    title: 'Contacte-moi',
    subtitle: 'Prêt à transformer tes résultats ? Parlons-en !',
    tabForm: 'Formulaire de demande',
    tabDirect: 'Contact direct',
    tabHint: 'Le formulaire de demande est à privilégier pour un premier contact',
    whatsappDesc: 'Réponse rapide',
    emailDesc: 'Réponse sous 24h',
    directWhatsappText: 'Bonjour {nom}, je souhaiterais prendre des cours avec vous.',
    directEmailSubject: 'Demande de cours particuliers',
  },

  form: {
    title: 'Demande de cours',
    subtitle: 'Remplis ce formulaire pour me contacter directement',
    labelName: 'Prénom de l’élève',
    placeholderName: 'Ton prénom',
    labelSubjects: 'Matière(s) souhaitée(s)',
    subjectsHint: 'Tu peux sélectionner plusieurs matières',
    labelModalite: 'Modalité',
    optHome: 'Chez le professeur',
    optOnline: 'En visio',
    btnContinue: 'Continuer',
    btnBack: 'Retour',
    labelCourseType: 'Type de cours',
    courseRegularTitle: 'Suivi régulier',
    courseRegularDesc: 'Pour progresser durablement',
    courseOneoffTitle: 'Cours ponctuel',
    courseOneoffDesc: 'Pour une aide ciblée',
    labelReason: 'Raison (optionnel)',
    reasons: ['Examen important', 'Interrogation', 'Remise à niveau', 'Autre'],
    labelFrequency: 'Fréquence souhaitée (optionnel)',
    freqWeek: 'Semaine',
    freqMonth: 'Mois',
    freqPer: 'par',
    freqHint: 'Laissez vide pour discuter ensemble de la fréquence',
    labelAvailability: 'Tes disponibilités',
    placeholderAvailability: 'Ex: Lundi et mercredi soir, week-end',
    labelMessage: 'Message complémentaire (optionnel)',
    placeholderMessage: 'Des précisions supplémentaires...',
    chooseContact: 'Choisis ton moyen de contact :',
    subjects: ['Maths', 'Physique', 'Python'],
    msg: {
      greeting: 'Bonjour {nom},',
      intro: 'Je souhaiterais prendre des cours avec vous.',
      student: 'ÉLÈVE',
      subjects: 'MATIÈRE(S) SOUHAITÉE(S)',
      modality: 'MODALITÉ',
      courseType: 'TYPE DE COURS',
      frequency: 'FRÉQUENCE',
      availability: 'DISPONIBILITÉS',
      message: 'MESSAGE',
      closing: 'Merci pour votre attention !',
      modalityHome: 'Chez le professeur',
      modalityOnline: 'En visio',
      courseTypeRegular: 'Suivi régulier',
      courseTypeOneoff: 'Cours ponctuels',
      freqValue: '{n} fois / {period}',
      freqToDiscuss: 'À discuter ensemble',
      periodWeek: 'semaine',
      periodMonth: 'mois',
      emailSubject: 'Demande de cours - {subjects}',
    },
  },

  footer: {
    title: 'Le succès commence par une décision',
    line1: 'Chaque grand parcours commence par un premier pas.',
    line2: 'Ta réussite t’attend.',
    role: 'Professeur particulier à {ville}',
  },
}

const en: typeof fr = {
  langName: { fr: 'FR', en: 'EN' },

  nav: {
    brand: 'Private Tutoring',
    items: [
      ['Home', 'accueil'],
      ['Method', 'methode'],
      ['Subjects', 'matieres'],
      ['Testimonials', 'temoignages'],
      ['Contact', 'contact'],
    ],
    toggleLabel: 'Switch language',
  },

  hero: {
    title: { p1: 'Turn your ', w1: 'struggles', p2: ' into ', w2: 'successes' },
    subtitle1: 'Civil engineer in Computer Science & AI, passionate about teaching.',
    subtitle2: 'Modern, personalized teaching to help you reach your goals.',
    statStudents: 'Students supported',
    statExperience: 'Years of experience',
    quote: { part1: 'Excellence is not a destination, it’s a ', highlight: 'continuous journey' },
    ctaTitle: 'Book a lesson',
    ctaSubtitle: 'Start your transformation',
    labelModalites: 'Format',
    labelDisponibilite: 'Availability',
    labelLocalisation: 'Location',
    modalites: ["Lessons at the tutor's", 'Online lessons'],
    disponibilite: 'Very flexible (weekdays & weekends)',
    zone: '6181 Gouy-Lez-Piéton, Courcelles, Belgium',
  },

  method: {
    title: 'Why choose me?',
    subtitle: 'A personalized approach to your success',
    items: [
      {
        title: 'Personalized teaching',
        description:
          'Every student is unique. I adapt my sessions and methodology to your profile, your goals and your learning pace.',
      },
      {
        title: 'Exercises & corrections',
        description:
          'I give you exercises suited to your level and needs. I take the time to correct and explain every point to help you understand better and progress.',
      },
      {
        title: 'Available outside lessons',
        description:
          'Outside of sessions, I stay available for quick questions, to check an exercise or to give a fast clarification.',
      },
    ],
  },

  services: {
    title: 'My Specialties',
    subtitle: 'Maths, Physics & Programming • Complete, tailor-made support',
    ellipsis: '… and much more',
    subjects: [
      {
        title: 'Mathematics',
        levels: '1st → 6th Secondary',
        topics: ['Calculus', 'Algebra', 'Trigonometry', 'Geometry', 'Statistics'],
        benefits: [
          'Thorough mastery of the official curriculum',
          'Personalized methodology by level',
          'Efficient exam preparation',
          'Clear, structured and visual explanations',
        ],
      },
      {
        title: 'Physics',
        levels: '3rd → 6th Secondary',
        topics: ['Electricity', 'Mechanics', 'Optics', 'Waves', 'Thermodynamics'],
        benefits: [
          'Thorough mastery of the official curriculum',
          'Hands-on approach with real examples',
          'Targeted exam preparation',
          'Complex concepts explained simply',
        ],
      },
      {
        title: 'Python Programming',
        levels: 'Beginner Level',
        topics: ['Basics', 'Projects', 'Game Dev', 'Algorithms', 'Logic'],
        benefits: [
          'From zero to real projects',
          'Fun, progressive and hands-on learning',
          'Theoretical grasp of key concepts',
          'A key skill in demand on the job market',
        ],
      },
    ],
  },

  temoignages: {
    title: 'Testimonials',
    subtitle: 'My students’ success speaks for itself',
    prevLabel: 'Previous testimonial',
    nextLabel: 'Next testimonial',
    authorOverrides: { 'Maman de Guido': "Guido's mum" } as Record<string, string>,
    items: [
      {
        text: 'My daughter loved her trigonometry sessions with Mathis; he clearly masters the subject and knows how to put himself in the student’s shoes. His explanations are clear and he doesn’t hesitate to repeat himself when needed. We will gladly call on him again.',
        role: 'Parent – Maths',
      },
      {
        text: 'Very satisfied. Punctual, friendly. My son appreciated his way of explaining. Highly recommended.',
        role: 'Parent – Physics',
      },
      {
        text: 'Mathis is an excellent teacher. Very serious and extremely organized. He prepares his lessons in advance and gives exercises for the next session. I highly recommend him!',
        role: 'Parent – Physics',
      },
      {
        text: 'Our son Guido had a retake exam in maths after a very difficult year. In two weeks (2h/day), Mathis reviewed and clearly explained a full year. Guido passed his exam. A huge thank you for his work and his patience!',
        role: 'Parent – Mathematics',
      },
      {
        text: 'My son took maths and physics lessons with Mathis to pass his second session (5th year, Maths/Science option). He is available, polite and punctual. He prepares his lessons in advance and is very organized. My son passed his exams and is ready to start his final year. I recommend Mathis as a private tutor.',
        role: 'Parent – Maths & Physics',
      },
      {
        text: 'Very good teacher, efficient study in a pleasant atmosphere. My daughter, who had serious difficulties, regained confidence and passed her exam. I highly recommend!',
        role: 'Parent – Maths',
      },
      {
        text: 'He helped me with my exams and got me back up to speed. He explains clearly and adapts to your needs. I recommend him without hesitation.',
        role: 'Former student – Maths',
      },
      {
        text: 'Having received help from Mathis in some courses, I can attest to his ability to explain clearly and make complex notions accessible, especially in mathematics.',
        role: 'Recommendation',
      },
      {
        text: 'Mathis has always known how to make mathematics and science accessible. Patient and a great teacher, he helps you understand and connect concepts. I highly recommend him.',
        role: 'Recommendation',
      },
      {
        text: 'I highly recommend Mathis for secondary-school maths and physics lessons. Thanks to his clear explanations and patient approach, he genuinely helps students progress and gain confidence.',
        role: 'Recommendation',
      },
    ],
  },

  contact: {
    title: 'Contact me',
    subtitle: 'Ready to transform your results? Let’s talk!',
    tabForm: 'Request form',
    tabDirect: 'Direct contact',
    tabHint: 'The request form is best for a first contact',
    whatsappDesc: 'Quick reply',
    emailDesc: 'Reply within 24h',
    directWhatsappText: 'Hello {nom}, I would like to take lessons with you.',
    directEmailSubject: 'Private lessons request',
  },

  form: {
    title: 'Lesson request',
    subtitle: 'Fill out this form to contact me directly',
    labelName: 'Student’s first name',
    placeholderName: 'Your first name',
    labelSubjects: 'Subject(s) wanted',
    subjectsHint: 'You can select several subjects',
    labelModalite: 'Format',
    optHome: "At the tutor's",
    optOnline: 'Online',
    btnContinue: 'Continue',
    btnBack: 'Back',
    labelCourseType: 'Lesson type',
    courseRegularTitle: 'Regular follow-up',
    courseRegularDesc: 'To progress steadily',
    courseOneoffTitle: 'One-off lesson',
    courseOneoffDesc: 'For targeted help',
    labelReason: 'Reason (optional)',
    reasons: ['Major exam', 'Test', 'Catch-up', 'Other'],
    labelFrequency: 'Desired frequency (optional)',
    freqWeek: 'Week',
    freqMonth: 'Month',
    freqPer: 'per',
    freqHint: 'Leave empty to discuss the frequency together',
    labelAvailability: 'Your availability',
    placeholderAvailability: 'e.g. Monday and Wednesday evening, weekend',
    labelMessage: 'Additional message (optional)',
    placeholderMessage: 'Any extra details...',
    chooseContact: 'Choose your contact method:',
    subjects: ['Maths', 'Physics', 'Python'],
    msg: {
      greeting: 'Hello {nom},',
      intro: 'I would like to take lessons with you.',
      student: 'STUDENT',
      subjects: 'DESIRED SUBJECT(S)',
      modality: 'FORMAT',
      courseType: 'LESSON TYPE',
      frequency: 'FREQUENCY',
      availability: 'AVAILABILITY',
      message: 'MESSAGE',
      closing: 'Thank you for your attention!',
      modalityHome: "At the tutor's",
      modalityOnline: 'Online',
      courseTypeRegular: 'Regular follow-up',
      courseTypeOneoff: 'One-off lessons',
      freqValue: '{n} time(s) / {period}',
      freqToDiscuss: 'To be discussed together',
      periodWeek: 'week',
      periodMonth: 'month',
      emailSubject: 'Lesson request - {subjects}',
    },
  },

  footer: {
    title: 'Success starts with a decision',
    line1: 'Every great journey begins with a first step.',
    line2: 'Your success awaits.',
    role: 'Private tutor in {ville}',
  },
}

export const translations = { fr, en }
export type Translation = typeof fr
