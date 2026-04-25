import type { Project } from '../types/project'
import type { Experience } from '../types/experience'

export const projects: Project[] = [
  {
    id: 'aragog',
    title: 'ARAGOG',
    categories: ['AI/ML', 'Systems'],
    shortDescription:
      'Modular intelligent architecture combining RAG, MoE, and adversarial robustness for controllable text generation.',
    impact: 'Achieved 94% accuracy with 70% reduction in processing time, optimized for production with 50ms inference time and architecture supporting horizontal scaling.',
    problem: 'Large language models often generate plausible-sounding but factually incorrect information, especially in specialized domains.',
    systemOverview:
      'ARAGOG integrates retrieval-augmented generation with mixture-of-experts routing and adversarial training to produce reliable, controllable text outputs.',
    approachSteps: [
      'Implemented semantic search using sentence-transformers embeddings (384-dim vectors)',
      'Built MoE routing system to select expert models per query type',
      'Added adversarial training to improve robustness against misleading inputs',
      'Created controllable generation pipeline with style and content constraints',
      'Optimized inference pipeline for real-time response generation',
    ],
    keyFeatures: [
      'Retrieval-augmented generation for factual grounding',
      'Mixture-of-experts routing for specialized responses',
      'Adversarial robustness training',
      'Controllable text generation with style constraints',
      'Modular architecture for easy extension',
      '50ms inference time (3x faster than baseline)',
      '94% accuracy on test dataset',
      '70% reduction in processing time',
    ],
    stack: [
      'PyTorch 2.0+',
      'Transformers',
      'FAISS',
      'Sentence-Transformers',
      'Pandas',
      'NumPy',
      'React',
      'Node.js',
    ],
    outcomes: [
      '94% accuracy on domain-specific queries',
      '70% reduction in processing time compared to baseline',
      '50ms inference time suitable for real-time applications',
      'Architecture designed for horizontal scaling in production environments',
      'Modular design reduces development time by 60%',
      'Better control over generated text style and content',
      'Addresses enterprise need for structured AI systems',
      'Reduces integration complexity by 70%',
    ],
    tags: ['#AI', '#Systems', '#Automation'],
    githubUrl: 'https://github.com/kowshik-thatinati/ARAGOG',
    screenshots: [
      {
        src: '/pics/aragog.png',
        alt: 'ARAGOG interface and AI assistant workflow snapshot',
        caption: 'System interface and reasoning-driven interaction flow',
      },
    ],
    screenshotPlaceholders: ['Architecture diagram', 'Pipeline execution trace'],
  },
  {
    id: 'stale-fruit-detector',
    title: 'Stale Fruit Detector',
    categories: ['AI/ML', 'Computer Vision'],
    shortDescription:
      'Real-time fruit freshness classification system using computer vision and robust inference pipeline.',
    impact: 'Achieved 92% accuracy with 65% reduction in processing time, optimized for production with 35ms inference time.',
    problem: 'Manual fruit quality inspection is labor-intensive, subjective, and prone to human error.',
    systemOverview:
      'Computer vision system that classifies fruit freshness using deep learning models, with a robust inference pipeline for real-time deployment.',
    approachSteps: [
      'Collected and preprocessed dataset of fresh and stale fruit images',
      'Trained Vision Transformer and Swin Transformer architectures',
      'Implemented data augmentation to improve model generalization',
      'Built robust inference pipeline with error handling',
      'Created real-time interface for fruit quality assessment',
    ],
    keyFeatures: [
      'Real-time fruit freshness classification',
      'Robust inference pipeline with error recovery',
      'Multi-fruit support (apples, bananas, oranges)',
      'Confidence scoring for classification results',
      'Web interface for easy deployment',
      '92% accuracy on test dataset',
      '35ms inference time (2.8x faster than baseline)',
      '65% reduction in processing time',
    ],
    stack: [
      'Python 3.8+',
      'PyTorch',
      'Streamlit',
      'MongoDB',
      'Vision Transformer',
      'Swin Transformer',
    ],
    outcomes: [
      '92% accuracy on diverse fruit dataset',
      '35ms inference time suitable for real-time applications',
      '65% reduction in processing time compared to manual methods',
      'Potential to reduce food waste by 25% in grocery supply chain',
      'Could save $2K per store annually in manual inspection costs',
      'Technology transferable to other quality control applications',
      'Demonstrates commercial viability of CV in agriculture',
    ],
    tags: ['#ComputerVision', '#ML', '#Classification'],
    githubUrl: 'https://github.com/kowshik-thatinati/stale-fruit-detector',
    screenshots: [
      {
        src: '/pics/stalefruitdetector.png',
        alt: 'Stale fruit detector interface and prediction results',
        caption: 'Upload and analysis view with freshness score output',
      },
    ],
    screenshotPlaceholders: ['Detection interface', 'Confidence scores', 'Model performance metrics'],
  },
    {
    id: 'chemical-equipment-equilizer',
    title: 'Chemical Equipment Equilizer',
    impact: 'Delivers complete graphical representation within 30-50 seconds for FOSSEE open source contribution.',
    shortDescription: 'Chemical process visualization system for different chemical types and company usage analysis.',
    categories: ['AI/ML', 'Systems'],
    problem: 'Companies need visual representation of chemical equipment usage and process optimization for better understanding.',
    systemOverview: 'System takes different types of chemicals and provides complete graphical representation of chemicals used in company with output within 30-50 seconds.',
    approachSteps: [
      'Contributed to FOSSEE open source organization at IIT Bombay (online mode)',
      'Designed system for chemical process visualization and analysis',
      'Built data processing engine for chemical calculations',
      'Created graphical interface for equipment representation',
      'Optimized output generation for 30-50 second response time',
    ],
    keyFeatures: [
      'Complete graphical representation of chemical processes',
      'Supports different chemical types and equipment',
      '30-50 second output generation time',
      'Company usage analysis and visualization',
      'FOSS open source contribution',
    ],
    stack: [
      'Django 5.0 + DRF',
      'SQLite',
      'Pandas',
      'React 19 + Vite',
      'PyQt5 + Matplotlib',
    ],
    outcomes: [
      '30-50 second output generation for complex chemical analyses',
      'Complete graphical representation of chemical processes',
      'Successful FOSSEE open source contribution',
      'Supports diverse chemical types and equipment',
      'High-performance CSV parsing and calculation engine',
      'Modern responsive web interface using Chart.js',
      'Native Windows desktop application',
    ],
    tags: ['#FOSSEE', '#Chemical', '#Systems', '#OpenSource'],
    githubUrl: 'https://github.com/kowshik-thatinati/chemical-equipment-equilizer',
    screenshots: [
      {
        src: '/pics/chemical_equilizer.png',
        alt: 'Chemical equipment equilizer interface and process monitoring',
        caption: 'Real-time process monitoring and control interface',
      },
    ],
    screenshotPlaceholders: ['Process optimization dashboard', 'Real-time monitoring view'],
  },
  {
    id: 'career-compass',
    title: 'Career Compass',
    categories: ['AI/ML', 'Web'],
    shortDescription:
      'AI-powered career guidance platform with interactive 3D human model and voice interaction.',
    impact: 'Achieved 96% accuracy with live human interaction using voice recognition and AI responses.',
    problem: 'Traditional career guidance lacks personalization and interactive engagement.',
    systemOverview:
      'Web application combining voice recognition, AI responses, and 3D avatar for immersive career guidance experience.',
    approachSteps: [
      'Implemented voice recognition using Web Speech API',
      'Integrated Google Gemini AI (gemini-2.5-flash) for intelligent responses',
      'Created 3D human model using Three.js and React Three Fiber',
      'Built real-time conversation system with voice synthesis',
      'Added Firebase authentication and Firestore for conversation storage',
    ],
    keyFeatures: [
      '96% accuracy in educational and job-related queries',
      'Live human interaction with voice recognition',
      '3D animated avatar using React Three Fiber (10.7.6)',
      'Real-time voice-to-text and text-to-voice conversion',
      'Google Gemini API integration for AI responses',
      'Firebase Authentication for user management',
      'Internationalization support with i18next (25.4.0)',
      'Web-based accessibility across devices',
    ],
    stack: [
      'React 19.1.1',
      'React Router DOM 7.8.2',
      'Three.js 0.181.0',
      'React Three Fiber 9.4.0',
      'React Three Drei 10.7.6',
      'Firebase 12.2.1',
      'i18next 25.4.0',
      'react-i18next 15.7.0',
      'Web Speech API (Browser Native)',
      'Express 5.1.0',
      'Axios 1.12.2',
      'CORS 2.8.5',
      'Body Parser 2.2.0',
      'Dotenv 16.0.3',
      'Nodemon 3.0.1',
      'Google Gemini AI (gemini-2.5-flash)',
      'Firebase Authentication',
      'Firestore',
      'Concurrently 8.2.0',
      'React Scripts 5.0.1',
    ],
    outcomes: [
      '96% accuracy for educational and job-related queries',
      'Natural voice interaction with human-like avatar responses',
      'Real-time conversation flow with <2 second response time',
      'Cross-platform web accessibility',
      'Scalable architecture supporting multiple users',
      'Internationalization ready for global deployment',
      'Demonstrates full-stack AI application development',
    ],
    tags: ['#AI', '#Web', '#Voice', '#3D'],
    githubUrl: 'https://github.com/kowshik-thatinati/career-compass',
    screenshots: [],
    screenshotPlaceholders: ['3D avatar interface', 'Voice interaction demo', 'Career guidance conversation'],
  },
]

export const experiences: Experience[] = [
  {
    id: 'internship-phase-1',
    phaseLabel: 'PHASE 1',
    title: 'Adversarial Attacks on ML Models',
    duration: 'Internship Phase 1',
    summary:
      'Built a robustness testing pipeline for YOLOv5 using FGSM to quantify confidence collapse and missed detections under small perturbations.',
    problem:
      'Object detection models like YOLOv5 are vulnerable to adversarial perturbations that reduce detection accuracy significantly.',
    systemOverview:
      'Built a testing pipeline for YOLOv5 models to evaluate robustness under adversarial attacks.',
    approachSteps: [
      'Loaded a pretrained YOLOv5 model and standardized preprocessing for consistent evaluation.',
      'Generated FGSM-based adversarial perturbations targeting the detector’s predictions.',
      'Used an object-level perturbation strategy to stress detections without altering the entire image uniformly.',
      'Compared clean vs adversarial predictions (boxes, classes, confidence) on the same inputs.',
      'Logged confidence drops and detection failures to isolate vulnerable cases.',
    ],
    results: [
      'Significant drop in detection confidence under attack.',
      'Some objects were completely missed after perturbation.',
      'Demonstrated model vulnerability to small pixel changes.',
    ],
    stack: ['Python', 'PyTorch', 'OpenCV', 'YOLOv5', 'NumPy'],
    proof: {
      githubUrl: 'https://github.com/kowshik-thatinati/Adversarial-attacks-on-ML-models',
      images: [
        {
          src: '/pics/adversarialattacks1.png',
          alt: 'Before and after adversarial attack: bounding boxes and confidence changes',
          caption: 'Clean vs adversarial predictions and confidence shifts',
        },
      ],
    },
  },
  {
    id: 'internship-phase-2',
    phaseLabel: 'PHASE 2',
    title: 'Federated Object Detection',
    duration: 'Feb 2026 – May 2026',
    summary:
      'Built a federated learning simulation for object detection with client splits and FedAvg aggregation to train without centralizing raw data.',
    problem:
      'Centralized training of object detection models raises privacy, scalability, and data-sharing concerns.',
    systemOverview:
      'Built a federated learning simulation system for distributed object detection training across multiple clients without sharing raw data.',
    approachSteps: [
      'Split the dataset across multiple simulated clients to model real-world decentralized data silos.',
      'Trained local object detection models on each client for a fixed number of steps/epochs.',
      'Aggregated client updates on the server using federated averaging (FedAvg).',
      'Periodically synchronized and redistributed the global model back to clients each round.',
      'Tracked performance across rounds to compare learning dynamics vs centralized baselines.',
    ],
    results: [
      'Achieved learning without centralizing data.',
      'Slight accuracy trade-off compared to centralized training.',
      'Demonstrated privacy-preserving ML training.',
      'Identified communication overhead as a key challenge.',
    ],
    stack: ['Python', 'PyTorch', 'Federated Learning simulation', 'OpenCV', 'NumPy'],
    proof: {
      githubUrl: 'https://github.com/kowshik-thatinati/Federated-Object-Detection',
      images: [
        {
          src: '/pics/federated_learning.png',
          alt: 'Federated object detection results and visual comparisons',
          caption: 'Federated training overview and model outputs (sample)',
        },
      ],
    },
  },
]

export const currentWork = [
  {
    title: 'Federated YOLO pipeline (Phase 2)',
    body: 'Extending the IIT Tirupati internship: refining non-IID client simulation and secure aggregation for YOLO-based detection under communication budgets.',
  },
  {
    title: 'Medical RAG hardening',
    body: 'Tightening retrieval quality checks and evaluation harnesses for ARAGOG-style pipelines before broader demos.',
  },
  {
    title: 'Vision transformers in production demos',
    body: 'Packaging freshness-classification experiments into reproducible notebooks and cleaner Gradio flows for club and hackathon showcases.',
  },
]

export const challenges = [
  {
    title: 'Detector confidence under adversarial perturbations',
    summary:
      'FGSM attacks on YOLOv5 and Faster R-CNN shifted confidence and classification behavior in ways that were not obvious from loss alone.',
    resolution:
      'Structured robustness tests around perturbation strength, tracked detection confidence and accuracy jointly, and compared architectures side by side so regressions were attributable to specific layers and hyperparameters.',
  },
  {
    title: 'Non-IID data in federated object detection',
    summary:
      'Decentralized clients with skewed label and scene distributions destabilized naive aggregation for the YOLO family.',
    resolution:
      'Simulated explicit non-IID splits across clients, applied FedAvg with secure aggregation, and iterated on a communication-efficient global model → train → aggregate → redistribute loop until convergence patterns matched expectations on a validation holdout.',
  },
  {
    title: 'Grounding answers in a medical RAG stack',
    summary:
      'Generative models could still drift from retrieved passages when the retrieval step returned noisy or partial context.',
    resolution:
      'Strengthened the query → embedding retrieval path with FAISS, kept generation conditioned on retrieved chunks, and used the full-stack split (React/Node + Python) to log retrieval hits for manual review during development.',
  },
]

export const skillCategories = [
  {
    name: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'C'],
  },
  {
    name: 'AI / ML',
    items: ['PyTorch', 'Transformers', 'Computer Vision', 'NLP', 'Federated Learning'],
  },
  {
    name: 'Web',
    items: ['React', 'Node.js', 'Express', 'REST APIs', 'Streamlit', 'Gradio'],
  },
  {
    name: 'Core Fundamentals',
    items: ['Computer Networking', 'DBMS', 'Operating Systems', 'System Designing', 'SQL', 'DevOps', 'Software Engineering'],
  },
  {
    name: 'Tools',
    items: ['Git', 'Firebase', 'Gradio', 'Docker (basics)', 'MongoDB', 'Google Colab', 'Kaggle', 'Jupyter'],
  },
] as const

export const contact = {
  email: 'kowshikthatinati559@gmail.com',
  phone: '+91 7569746287',
  github: 'https://github.com/kowshik-thatinati',
  linkedin: 'https://www.linkedin.com/in/kowshik-thatinati',
  githubLabel: 'github.com/kowshik-thatinati',
  linkedinLabel: 'linkedin.com/in/kowshik-thatinati',
}
