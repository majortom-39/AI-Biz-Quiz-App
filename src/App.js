import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

const allQuizData = [
  {
    id: 1,
    question: "Who is often credited with coining the term \"Artificial Intelligence\" in 1956?",
    options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Elon Musk"],
    correct: 1
  },
  {
    id: 2,
    question: "What was the name of the first AI program, developed in the 1950s to play checkers?",
    options: ["Deep Blue", "Samuel's Checkers Program", "ELIZA", "SHRDLU"],
    correct: 1
  },
  {
    id: 3,
    question: "In which year did IBM's Deep Blue defeat chess champion Garry Kasparov?",
    options: ["1997", "1989", "2001", "2011"],
    correct: 0
  },
  {
    id: 4,
    question: "What period in AI history is known as the \"AI Winter\" due to reduced funding and interest?",
    options: ["1940s-1950s", "1970s-1980s", "1990s-2000s", "2010s-present"],
    correct: 1
  },
  {
    id: 5,
    question: "Who proposed the Turing Test as a measure of machine intelligence in 1950?",
    options: ["Norbert Wiener", "Claude Shannon", "Alan Turing", "Herbert Simon"],
    correct: 2
  },
  {
    id: 6,
    question: "What was the primary focus of the Dartmouth Conference in 1956?",
    options: ["Robotics", "Founding the field of AI", "Neural networks", "Quantum computing"],
    correct: 1
  },
  {
    id: 7,
    question: "Which AI system, created in 1966, simulated a psychotherapist through pattern matching?",
    options: ["Watson", "ELIZA", "AlphaGo", "Siri"],
    correct: 1
  },
  {
    id: 8,
    question: "In what decade did the resurgence of AI occur due to advances in machine learning and big data?",
    options: ["1960s", "1980s", "2000s", "2010s"],
    correct: 3
  },
  {
    id: 9,
    question: "Who founded OpenAI in 2015?",
    options: ["Jeff Bezos", "Sam Altman and others", "Mark Zuckerberg", "Larry Page"],
    correct: 1
  },
  {
    id: 10,
    question: "What historical event marked the beginning of symbolic AI in the 1950s?",
    options: ["Invention of the transistor", "Logic Theorist program", "First smartphone", "Internet launch"],
    correct: 1
  },
  {
    id: 11,
    question: "What does \"supervised learning\" in AI refer to?",
    options: ["Learning without any data", "Training with labeled data", "Clustering unlabeled data", "Rewarding actions in environments"],
    correct: 1
  },
  {
    id: 12,
    question: "Which neural network architecture is commonly used for image recognition?",
    options: ["Recurrent Neural Network (RNN)", "Convolutional Neural Network (CNN)", "Generative Adversarial Network (GAN)", "Transformer"],
    correct: 1
  },
  {
    id: 13,
    question: "What is the main function of an activation function in a neural network?",
    options: ["To initialize weights", "To introduce non-linearity", "To store data", "To compile code"],
    correct: 1
  },
  {
    id: 14,
    question: "In reinforcement learning, what is a \"reward signal\"?",
    options: ["Input data", "Feedback on action performance", "Model architecture", "Loss function"],
    correct: 1
  },
  {
    id: 15,
    question: "What technology powers large language models like GPT?",
    options: ["Rule-based systems", "Transformers", "Expert systems", "Genetic algorithms"],
    correct: 1
  },
  {
    id: 16,
    question: "What is \"overfitting\" in machine learning?",
    options: ["Model performs well on training but poorly on new data", "Model ignores training data", "Data preprocessing step", "Hardware optimization"],
    correct: 0
  },
  {
    id: 17,
    question: "Which algorithm is used for dimensionality reduction in AI?",
    options: ["Principal Component Analysis (PCA)", "Backpropagation", "Q-Learning", "Beam Search"],
    correct: 0
  },
  {
    id: 18,
    question: "What does GPU stand for in the context of AI training?",
    options: ["General Processing Unit", "Graphics Processing Unit", "Global Positioning Unit", "Generative Pre-trained Unit"],
    correct: 1
  },
  {
    id: 19,
    question: "In AI, what is \"transfer learning\"?",
    options: ["Moving data between servers", "Using pre-trained models for new tasks", "Learning from scratch every time", "Encrypting models"],
    correct: 1
  },
  {
    id: 20,
    question: "What is the purpose of \"tokenization\" in natural language processing?",
    options: ["Breaking text into smaller units", "Generating images", "Optimizing hardware", "Clustering data"],
    correct: 0
  },
  {
    id: 21,
    question: "Which company developed AlphaGo, the AI that beat a Go champion in 2016?",
    options: ["Microsoft", "DeepMind (Google)", "OpenAI", "IBM"],
    correct: 1
  },
  {
    id: 22,
    question: "What ethical issue arises from AI systems perpetuating societal biases?",
    options: ["Data overload", "Algorithmic bias", "High energy consumption", "Slow processing"],
    correct: 1
  },
  {
    id: 23,
    question: "In business, how does AI primarily create value through personalization?",
    options: ["By standardizing products", "Tailoring recommendations to users", "Increasing manual labor", "Reducing data collection"],
    correct: 1
  },
  {
    id: 24,
    question: "What is a key business value of AI in supply chain management?",
    options: ["Predictive analytics for demand forecasting", "Manual inventory tracking", "Ignoring market trends", "Decreasing automation"],
    correct: 0
  },
  {
    id: 25,
    question: "Which AI application raises privacy concerns in business?",
    options: ["Facial recognition for surveillance", "Basic calculators", "Word processors", "Email filters"],
    correct: 0
  },
  {
    id: 26,
    question: "How does AI contribute to business efficiency in customer service?",
    options: ["Through chatbots and virtual assistants", "By eliminating all human interaction", "Increasing response times", "Ignoring queries"],
    correct: 0
  },
  {
    id: 27,
    question: "What is \"explainable AI\" (XAI) important for in business?",
    options: ["Making models transparent and trustworthy", "Hiding decision processes", "Slowing down computations", "Reducing accuracy"],
    correct: 0
  },
  {
    id: 28,
    question: "In AI ethics, what does the \"black box\" problem refer to?",
    options: ["Opaque decision-making in models", "Physical hardware issues", "Color schemes in interfaces", "Data storage limits"],
    correct: 0
  },
  {
    id: 29,
    question: "Which business sector heavily uses AI for fraud detection?",
    options: ["Agriculture", "Banking and finance", "Construction", "Fishing"],
    correct: 1
  },
  {
    id: 30,
    question: "What historical AI milestone involved the creation of the first neural network in 1958?",
    options: ["Perceptron by Frank Rosenblatt", "ENIAC computer", "First email", "Moon landing"],
    correct: 0
  },
  {
    id: 31,
    question: "What is the business value of AI in healthcare diagnostics?",
    options: ["Faster and more accurate image analysis", "Manual record-keeping", "Delaying treatments", "Ignoring symptoms"],
    correct: 0
  },
  {
    id: 32,
    question: "In tech, what does \"AGI\" stand for?",
    options: ["Artificial General Intelligence", "Automated Graphics Interface", "Advanced Gaming Integration", "Applied Genetic Improvement"],
    correct: 0
  },
  {
    id: 33,
    question: "Which AI technique mimics evolution to solve optimization problems?",
    options: ["Genetic algorithms", "Decision trees", "Support Vector Machines", "K-Means clustering"],
    correct: 0
  },
  {
    id: 34,
    question: "What ethical principle emphasizes fairness in AI deployment?",
    options: ["Equity and non-discrimination", "Maximizing profits only", "Data hoarding", "Secrecy"],
    correct: 0
  },
  {
    id: 35,
    question: "In history, what was the Lighthill Report's impact on AI in 1973?",
    options: ["It criticized AI progress, leading to funding cuts", "It praised AI and increased investments", "It invented new algorithms", "It launched the internet"],
    correct: 0
  },
  {
    id: 36,
    question: "How does AI add business value in marketing?",
    options: ["Through targeted advertising and sentiment analysis", "By generic campaigns", "Ignoring customer feedback", "Manual outreach"],
    correct: 0
  },
  {
    id: 37,
    question: "What is \"federated learning\" in AI tech?",
    options: ["Decentralized training to preserve privacy", "Centralized data pooling", "Hardware acceleration", "Rule-based programming"],
    correct: 0
  },
  {
    id: 38,
    question: "Which organization released the Asilomar AI Principles in 2017 for ethical AI?",
    options: ["Future of Life Institute", "United Nations", "Apple Inc.", "Tesla"],
    correct: 0
  },
  {
    id: 39,
    question: "In AI history, who developed the first expert system, DENDRAL, in the 1960s?",
    options: ["Edward Feigenbaum", "Bill Gates", "Tim Berners-Lee", "Sergey Brin"],
    correct: 0
  },
  {
    id: 40,
    question: "What business risk does AI pose regarding job displacement?",
    options: ["Automation replacing routine tasks", "Creating more manual jobs", "Slowing innovation", "Decreasing productivity"],
    correct: 0
  },
  {
    id: 41,
    question: "What is \"diffusion models\" used for in AI tech?",
    options: ["Generating images from noise", "Classifying text", "Predicting stocks", "Routing networks"],
    correct: 0
  },
  {
    id: 42,
    question: "In ethics, what is the \"alignment problem\" in AI?",
    options: ["Ensuring AI goals match human values", "Aligning hardware components", "Formatting text", "Color matching"],
    correct: 0
  },
  {
    id: 43,
    question: "Which AI breakthrough occurred in 2012 with AlexNet?",
    options: ["Revolution in image classification using deep learning", "First chatbot", "Quantum AI", "Blockchain integration"],
    correct: 0
  },
  {
    id: 44,
    question: "How does AI provide business value in autonomous vehicles?",
    options: ["Real-time decision-making for safety", "Manual driving only", "Ignoring traffic data", "Increasing fuel consumption"],
    correct: 0
  },
  {
    id: 45,
    question: "What is \"prompt engineering\" in modern AI tech?",
    options: ["Crafting inputs to optimize model outputs", "Building physical prompts", "Debugging code", "Hardware design"],
    correct: 0
  },
  {
    id: 46,
    question: "In AI history, what was the role of backpropagation in the 1980s?",
    options: ["Enabling efficient training of neural networks", "Creating the web", "Inventing smartphones", "Space exploration"],
    correct: 0
  },
  {
    id: 47,
    question: "What ethical concern involves AI in warfare?",
    options: ["Autonomous weapons and lethality", "Peaceful simulations only", "Entertainment uses", "Educational tools"],
    correct: 0
  },
  {
    id: 48,
    question: "In business, what is AI's role in predictive maintenance?",
    options: ["Forecasting equipment failures to reduce downtime", "Ignoring sensor data", "Manual inspections", "Increasing breakdowns"],
    correct: 0
  },
  {
    id: 49,
    question: "What tech concept describes AI systems that can improve themselves?",
    options: ["Recursive self-improvement", "Static programming", "Linear regression", "Binary search"],
    correct: 0
  },
  {
    id: 50,
    question: "Which historical figure influenced AI through cybernetics in the 1940s?",
    options: ["Norbert Wiener", "Thomas Edison", "Alexander Graham Bell", "Henry Ford"],
    correct: 0
  }
];

function getRandomQuestions(questions, count = 10) {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const prizes = [
  { id: 1, name: "Dry Erase Planner", icon: "📝", color: "#E74C3C" },
  { id: 2, name: "Glitter Highlighter", icon: "✨", color: "#3498DB" },
  { id: 3, name: "Gel Pen Set", icon: "🖊️", color: "#2ECC71" },
  { id: 4, name: "Sticky Notes", icon: "📋", color: "#F39C12" },
  { id: 5, name: "Spiral Notebook", icon: "📓", color: "#9B59B6" },
  { id: 6, name: "Memory Game", icon: "🧠", color: "#E67E22" },
  { id: 7, name: "Mini Stapler", icon: "📎", color: "#1ABC9C" },
  { id: 8, name: "Color Markers", icon: "🖍️", color: "#E91E63" }
];

function SpinnerWheel({ onPrizeWon, isSpinning, setIsSpinning }) {
  const [rotation, setRotation] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState(null);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const spins = 5 + Math.random() * 5;
    const finalRotation = spins * 360 + Math.random() * 360;
    setRotation(finalRotation);

    setTimeout(() => {
      const segmentAngle = 360 / prizes.length;
      const normalizedRotation = finalRotation % 360;
      const prizeIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % prizes.length;
      const wonPrize = prizes[prizeIndex];
      
      setSelectedPrize(wonPrize);
      setIsSpinning(false);
      onPrizeWon(wonPrize);
    }, 3000);
  };

  return (
    <div className="spinner-container">
      <div className="spinner-wheel-wrapper">
        <div 
          className={`spinner-wheel ${isSpinning ? 'spinning' : ''}`}
          style={{ 
            transform: `rotate(${rotation}deg)`,
            '--total-segments': prizes.length
          }}
        >
          <div className="wheel-labels">
            {prizes.map((prize, index) => {
              const segmentAngle = 360 / prizes.length;
              const rotationAngle = segmentAngle * index + segmentAngle / 2;
              
              return (
                <div
                  key={prize.id}
                  className="prize-segment-text"
                  style={{
                    transform: `rotate(${rotationAngle}deg)`
                  }}
                >
                  <span className="prize-label-text">
                    🎁
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="spinner-center">
          <div className="center-circle">
            <span className="center-text">SPIN</span>
          </div>
        </div>
        <div className="spinner-pointer"></div>
      </div>
      
      {!isSpinning && !selectedPrize && (
        <button className="spin-button" onClick={spinWheel}>
          Spin!
        </button>
      )}
      
      {isSpinning && (
        <div className="spinning-text">
          🎊 Spinning... 🎊
        </div>
      )}
    </div>
  );
}

function PrizeModal({ prize, onClose, onRestart, triggerPrizeCelebration, triggerConfetti }) {
  // Trigger prize celebration sequence when modal appears
  React.useEffect(() => {
    if (prize && triggerPrizeCelebration) {
      triggerPrizeCelebration();
    }
  }, [prize, triggerPrizeCelebration]);

  const handleClaimPrize = () => {
    // Bonus confetti when claiming prize
    if (triggerConfetti) {
      triggerConfetti(2, 'top');
    }
    onClose();
  };

  if (!prize) return null;

  return (
    <>
      <div className="prize-modal-overlay">
        <div className="prize-modal">
          <h2 className="congrats-text">🎉 Congratulations! 🎉</h2>
          <div className="prize-display">
            <div className="prize-icon-big">{prize.icon}</div>
            <h3 className="prize-name-big">{prize.name}</h3>
          </div>
          <p className="prize-message">You've won an amazing prize!</p>
          <div className="modal-buttons">
            <button className="claim-button" onClick={handleClaimPrize}>
              Claim Prize!
            </button>
            <button className="play-again-button" onClick={onRestart}>
              Play Again
            </button>
          </div>
        </div>
      </div>
      <canvas id="confetti-canvas"></canvas>
    </>
  );
}

function App() {
  const [quizData, setQuizData] = useState(() => getRandomQuestions(allQuizData));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wonPrize, setWonPrize] = useState(null);

  // Reusable confetti function with pattern support
  const triggerConfetti = (intensity = 1, pattern = 'center') => {
    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const baseParticleCount = Math.floor(randomInRange(50, 100) * intensity);
    const prizeColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
    
    const patterns = {
      center: {
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { y: 0.6 }
      },
      left: {
        angle: randomInRange(60, 90),
        spread: randomInRange(40, 60),
        origin: { x: 0.1, y: 0.6 }
      },
      right: {
        angle: randomInRange(90, 120),
        spread: randomInRange(40, 60),
        origin: { x: 0.9, y: 0.6 }
      },
      top: {
        angle: randomInRange(70, 110),
        spread: randomInRange(60, 80),
        origin: { y: 0.3 }
      }
    };

    const config = patterns[pattern] || patterns.center;
    
    confetti({
      angle: config.angle,
      spread: config.spread,
      particleCount: baseParticleCount,
      origin: config.origin,
      colors: pattern === 'prize' ? prizeColors : ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#E67E22', '#1ABC9C', '#E91E63']
    });
  };

  // Special prize celebration sequence
  const triggerPrizeCelebration = () => {
    // First burst - center explosion
    setTimeout(() => {
      triggerConfetti(1.5, 'center');
    }, 300);

    // Second burst - left and right sides
    setTimeout(() => {
      triggerConfetti(1.2, 'left');
    }, 800);
    setTimeout(() => {
      triggerConfetti(1.2, 'right');
    }, 850);

    // Final burst - from top
    setTimeout(() => {
      triggerConfetti(1.8, 'top');
    }, 1300);
  };

  // Trigger confetti when quiz is completed
  React.useEffect(() => {
    if (showResults) {
      const timer = setTimeout(() => {
        const scorePercentage = (score / quizData.length) * 100;
        // More confetti for better scores
        const intensity = scorePercentage >= 80 ? 1.5 : scorePercentage >= 60 ? 1 : 0.7;
        triggerConfetti(intensity);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showResults, score, quizData.length]);

  const handleAnswerSelect = (answerIndex) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    if (answerIndex === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setQuizData(getRandomQuestions(allQuizData));
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setAnswered(false);
    setShowSpinner(false);
    setIsSpinning(false);
    setWonPrize(null);
  };

  const handlePrizeWon = (prize) => {
    setWonPrize(prize);
  };

  const handleSpinForPrize = () => {
    setShowSpinner(true);
  };

  if (showResults) {
    return (
      <div className="App">
        <canvas id="confetti-canvas"></canvas>
        <div className="quiz-container">
          {!showSpinner ? (
            <div className="results-card">
              <h2>Quiz Complete!</h2>
              <div className="score-display">
                <span className="score">{score}</span>
                <span className="total">/ {quizData.length}</span>
              </div>
              <p className="score-text">
                You scored {Math.round((score / quizData.length) * 100)}%
              </p>
              <div className="results-buttons">
                <button className="spin-bonus-btn" onClick={handleSpinForPrize}>
                  Claim Bonus Prize! 🎁
                </button>
                <button className="restart-btn" onClick={restartQuiz}>
                  Take Quiz Again
                </button>
              </div>
            </div>
          ) : (
            <div className="spinner-section">
              <h2 className="spinner-title">🎰 Bonus Prize Wheel! 🎰</h2>
              <p className="spinner-subtitle">Spin to win your reward!</p>
              <SpinnerWheel 
                onPrizeWon={handlePrizeWon}
                isSpinning={isSpinning}
                setIsSpinning={setIsSpinning}
              />
            </div>
          )}
        </div>
        
        <PrizeModal 
          prize={wonPrize} 
          onClose={() => setWonPrize(null)}
          onRestart={restartQuiz}
          triggerPrizeCelebration={triggerPrizeCelebration}
          triggerConfetti={triggerConfetti}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="quiz-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="question-counter">
          Question {currentQuestion + 1} of {quizData.length}
        </div>

        <div className="question-card">
          <h2 className="question-text">
            {quizData[currentQuestion].question}
          </h2>

          <div className="answers-grid">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`answer-btn ${
                  selectedAnswer === index 
                    ? index === quizData[currentQuestion].correct 
                      ? 'correct' 
                      : 'incorrect'
                    : answered && index === quizData[currentQuestion].correct
                      ? 'correct-highlight'
                      : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={answered}
              >
                {option}
              </button>
            ))}
          </div>

          {answered && (
            <button className="next-btn" onClick={handleNextQuestion}>
              {currentQuestion + 1 < quizData.length ? 'Next Question' : 'View Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
