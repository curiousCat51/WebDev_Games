document.addEventListener('DOMContentLoaded', () => {
  // Alle 15 Portal-Wiki Quizfragen
  const quizQuestions = [
    {
      question: "Wofür steht die Abkürzung „GLaDOS“?",
      answers: [
        "General Logic and Defense Operating System",
        "Genetic Lifeform and Disk Operating System",
        "Global Laboratory and Data Organization System",
        "Guided Laser and Destruction Operating System"
      ],
      correct: 1,
      explanation: "Richtig! GLaDOS steht für Genetic Lifeform and Disk Operating System."
    },
    {
      question: "Wessen menschliches Bewusstsein wurde gegen ihren Willen in GLaDOS hochgeladen?",
      answers: ["Chell", "Ellen", "Caroline", "Alyx"],
      correct: 2,
      explanation: "Auf Anweisung von Cave Johnson wurde seine treue Assistentin Caroline in das System übertragen."
    },
    {
      question: "Woran starb Aperture-Science-Gründer Cave Johnson?",
      answers: [
        "An einem defekten Geschützturm",
        "Durch tödliches Neurotoxin",
        "An einer Mondstaub-Vergiftung",
        "Durch einen Sturz in einen Reaktorschacht"
      ],
      correct: 2,
      explanation: "Beim Zermahlen von Mondgestein für das Conversion Gel zog er sich eine tödliche Mondstaub-Vergiftung zu."
    },
    {
      question: "Welche besonderen Stiefel trägt Chell, um Stürze aus großer Höhe unbeschadet zu überstehen?",
      answers: [
        "Long Fall Boots",
        "Gravity Jumpers",
        "Aperture Shock Absorbers",
        "Quantum Landing Shoes"
      ],
      correct: 0,
      explanation: "Die Long Fall Boots leiten die Aufprallenergie ab und sorgen dafür, dass Testsubjekte stets auf den Füßen landen."
    },
    {
      question: "Welcher Persönlichkeitskern wurde ursprünglich programmiert, um GLaDOS durch unsinnige Ideen abzulenken?",
      answers: ["Space Core", "Fact Core", "Adventure Core", "Wheatley"],
      correct: 3,
      explanation: "Wheatley wurde als sogenannte Intelligence Dampening Sphere entwickelt, um GLaDOS auszubremsen."
    },
    {
      question: "Welche Portal-Farben verwendet der Koop-Roboter ATLAS?",
      answers: ["Blau und Orange", "Blau und Violett", "Gelb und Rot", "Grün und Weiß"],
      correct: 1,
      explanation: "ATLAS nutzt Blau und Violett, während sein Partner P-body Gelb und Rot verwendet."
    },
    {
      question: "Auf welchem Objekt basiert das Aussehen des Koop-Roboters P-body?",
      answers: [
        "Einem Persönlichkeitskern",
        "Einem Begleiterkubus",
        "Einem Aperture-Geschützturm (Turret)",
        "Einer Kartoffelbatterie"
      ],
      correct: 2,
      explanation: "P-bodys länglicher Körper basiert auf dem Gehäuse eines Aperture Sentry Turrets."
    },
    {
      question: "Was ist „Hoopy the Hoop“?",
      answers: [
        "Ein geheimer Bossgegner in Portal 2",
        "Ein Hula-Hoop-Reifen, der am Ende von Portal vom Himmel fällt",
        "Ein runder Begleiterkubus",
        "Ein spezielles Katapult-Pad"
      ],
      correct: 1,
      explanation: "Die Entwickler dachten, der Hula-Hoop-Reifen würde ein riesiges Meme werden – stattdessen wurde der Kuchen berühmt."
    },
    {
      question: "Welches Aperture-Gel macht normalerweise nicht-portalfähige Oberflächen für Portale nutzbar?",
      answers: [
        "Repulsion Gel (Blau)",
        "Propulsion Gel (Orange)",
        "Conversion Gel (Weiß)",
        "Adhesion Gel (Grün)"
      ],
      correct: 2,
      explanation: "Das weiße Conversion Gel besteht aus zermahlenem Mondgestein und dient als idealer Portalleiter."
    },
    {
      question: "Was passiert, wenn man einen Testkubus durch einen „Material Emancipation Grill“ (Fizzler) trägt?",
      answers: [
        "Er wird doppelt so schwer",
        "Er wird unter Funkensprühen aufgelöst (vaporisiert)",
        "Er wechselt seine Farbe",
        "Er schwebt zur Decke"
      ],
      correct: 1,
      explanation: "Der Fizzler löst unautorisierte Testobjekte sofort auf und setzt alle aktiven Portale zurück."
    },
    {
      question: "Welches Test-Element aus dem ersten Portal-Spiel wurde in Portal 2 durch Laserstrahlen ersetzt?",
      answers: [
        "High Energy Pellet (Hochenergiekugel)",
        "Aerial Faith Plate",
        "Hard Light Bridge",
        "Excursion Funnel"
      ],
      correct: 0,
      explanation: "Laserstrahlen reagieren ohne Wartezeit auf Portal-Änderungen und ersetzten deshalb die Hochenergiekugeln."
    },
    {
      question: "Wofür wird der „Reflection Cube“ (Redirection Cube) in Portal 2 benötigt?",
      answers: [
        "Um vor Geschütztürmen unsichtbar zu werden",
        "Um über Säurebecken zu schwimmen",
        "Um Laserstrahlen gezielt umzulenken",
        "Um Portale an Glaswänden zu öffnen"
      ],
      correct: 2,
      explanation: "Dank eingebauter Linsen und Spiegel lenkt der Redirection Cube Laserstrahlen in neue Richtungen."
    },
    {
      question: "Was ist die effektivste Methode, um einen Standard-Geschützturm (Sentry Turret) außer Gefecht zu setzen?",
      answers: [
        "Mit dem weißen Gel besprühen",
        "Ihn umwerfen oder von hinten hochheben",
        "Direkt vor ihm in die Hocke gehen",
        "Einen Laserstrahl auf sein Auge richten"
      ],
      correct: 1,
      explanation: "Turrets stehen wackelig auf drei Beinen – einmal umgekippt, überhitzen sie und schalten sich ab."
    },
    {
      question: "Aus welchem Studentenprojekt entstand die ursprüngliche Idee für „Portal“ (2007)?",
      answers: [
        "Narbacular Drop",
        "Tag: The Power of Paint",
        "Quantum Conundrum",
        "Antichamber"
      ],
      correct: 0,
      explanation: "Valve stellte das gesamte Studenten-Team hinter 'Narbacular Drop' ein, um Portal zu entwickeln."
    },
    {
      question: "Welche drei Kategorien gibt es im „Challenge Mode“?",
      answers: [
        "Wenigste Tode, Meiste Kuben, Schnellste Zeit",
        "Wenigste Portale, Wenigste Schritte, Schnellste Zeit",
        "Wenigste Sprünge, Meiste Punkte, Wenigste Schüsse",
        "Keine Portale, Keine Kuben, Rückwärts laufen"
      ],
      correct: 1,
      explanation: "Im Challenge Mode treten Spieler in den Disziplinen Least Portals, Least Steps und Least Time an."
    }
  ];

  // DOM-Elemente der quiz.html
  const startScreen = document.getElementById('quiz-start-screen');
  const questionScreen = document.getElementById('quiz-question-screen');
  const resultScreen = document.getElementById('quiz-result-screen');

  // Falls wir nicht auf der quiz.html sind, bricht das Skript hier sauber ab
  if (!startScreen) return;

  const subjectNameInput = document.getElementById('subjectName');
  const startBtn = document.getElementById('startQuizBtn');
  const questionCounter = document.getElementById('questionCounter');
  const currentScoreDisplay = document.getElementById('currentScoreDisplay');
  const progressBar = document.getElementById('progressBar');
  const questionText = document.getElementById('questionText');
  const answerButtons = document.getElementById('answerButtons');
  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackText = document.getElementById('feedbackText');
  const nextBtn = document.getElementById('nextQuestionBtn');
  const finalScoreNumber = document.getElementById('finalScoreNumber');
  const finalTotalNumber = document.getElementById('finalTotalNumber');
  const gladosComment = document.getElementById('gladosComment');
  const restartBtn = document.getElementById('restartQuizBtn');

  let currentQuestionIndex = 0;
  let score = 0;
  let subjectName = 'Testsubjekt';

  // Quiz starten
  function startQuiz() {
    const rawName = subjectNameInput.value.trim();
    subjectName = rawName !== '' ? rawName : 'Anonymes Testsubjekt';

    currentQuestionIndex = 0;
    score = 0;

    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');

    showQuestion();
  }

  // Aktuelle Frage anzeigen
  function showQuestion() {
    feedbackBox.classList.add('hidden');
    answerButtons.innerHTML = '';

    const currentQ = quizQuestions[currentQuestionIndex];
    const total = quizQuestions.length;

    questionCounter.textContent = `Frage ${currentQuestionIndex + 1} von ${total}`;
    currentScoreDisplay.textContent = `Punkte: ${score}`;
    progressBar.style.width = `${(currentQuestionIndex / total) * 100}%`;
    questionText.textContent = currentQ.question;

    currentQ.answers.forEach((answerText, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'answer-btn';
      btn.textContent = answerText;
      btn.addEventListener('click', () => selectAnswer(index, btn));
      answerButtons.appendChild(btn);
    });
  }

  // Antwort auswerten
  function selectAnswer(selectedIndex, clickedBtn) {
    const currentQ = quizQuestions[currentQuestionIndex];
    const allButtons = answerButtons.querySelectorAll('.answer-btn');
    const isCorrect = selectedIndex === currentQ.correct;

    // Alle Buttons sperren & richtige/falsche Antwort markieren
    allButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQ.correct) {
        btn.classList.add('correct');
      }
    });

    if (isCorrect) {
      score++;
      currentScoreDisplay.textContent = `Punkte: ${score}`;
      feedbackText.innerHTML = `<strong>✅ Korrekt!</strong> ${currentQ.explanation}`;
    } else {
      clickedBtn.classList.add('wrong');
      feedbackText.innerHTML = `<strong>❌ Falsch!</strong> ${currentQ.explanation}`;
    }

    // Beim letzten Schritt Button-Text anpassen
    if (currentQuestionIndex === quizQuestions.length - 1) {
      nextBtn.textContent = 'Auswertung anzeigen →';
    } else {
      nextBtn.textContent = 'Nächste Frage →';
    }

    feedbackBox.classList.remove('hidden');
  }

  // Nächste Frage oder Endergebnis
    function handleNext() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    // Ergebnis anzeigen & in Bestenliste speichern
    function showResults() {
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        progressBar.style.width = '100%';

        const total = quizQuestions.length;
        finalScoreNumber.textContent = score;
        finalTotalNumber.textContent = total;

        const cakeReward = document.getElementById('cakeEasterEgg');

        // Passender GLaDOS-Spruch & Kuchen-Check je nach Punktzahl
        if (score === total) {
        gladosComment.textContent = `„Unglaublich, ${subjectName}. Volle Punktzahl. Ich habe die Notfall-Verbrennungsgrube vorerst wieder geschlossen. Hier ist dein Kuchen.“`;
        if (cakeReward) cakeReward.classList.remove('hidden');
        } else {
        if (cakeReward) cakeReward.classList.add('hidden');

        if (score >= 11) {
            gladosComment.textContent = `„Beeindruckend für ein menschliches Gehirn, ${subjectName}. Du bist fast so kompetent wie ein defekter Persönlichkeitskern.“`;
        } else if (score >= 6) {
            gladosComment.textContent = `„Mittelmäßig, ${subjectName}. Deine Testergebnisse liegen exakt im Bereich einer durchschnittlichen Kartoffelbatterie.“`;
        } else {
            gladosComment.textContent = `„Katastrophal, ${subjectName}. Selbst Wheatley hätte mehr Fragen richtig geraten. Bitte begib dich umgehend in die Testkammer für Geschütztürme.“`;
        }
        }

        saveScoreToLeaderboard(subjectName, score, total);
    }


    // Ergebnis im localStorage speichern (Top 5)
    function saveScoreToLeaderboard(name, points, maxPoints) {
        const STORAGE_KEY = 'portalWikiLeaderboard';
        const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        const today = new Date().toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        existingData.push({
            name: name,
            score: points,
            total: maxPoints,
            date: today
        });

        // Nach höchster Punktzahl sortieren & auf Top 5 begrenzen
        existingData.sort((a, b) => b.score - a.score);
        const topFive = existingData.slice(0, 5);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(topFive));
        }
        startBtn.addEventListener('click', startQuiz);
        nextBtn.addEventListener('click', handleNext);
        restartBtn.addEventListener('click', startQuiz);
    });