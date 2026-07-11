import type { Project } from '../types/project'
import type { Experience } from '../types/experience'

export const projects: Project[] = [
  {
    id: 'aragog',
    title: 'ARAGOG',
    categories: ['AI/ML', 'Systems'],
    shortDescription:
      'RAG + MoE system for controlled text generation.',
    impact: '94% accuracy, 70% faster processing, 50ms inference.',
    problem: 'LLMs can sound right while missing domain facts.',
    systemOverview:
      'ARAGOG combines retrieval, expert routing, and robustness training for grounded outputs.',
    approachSteps: [
      'Implemented semantic search with sentence-transformers embeddings.',
      'Built MoE routing to pick expert models per query type.',
      'Added adversarial training to improve robustness against misleading inputs.',
      'Optimized the pipeline for real-time response generation.',
    ],
    keyFeatures: [
      'Retrieval-augmented generation for factual grounding',
      'Mixture-of-experts routing for specialized responses',
      'Adversarial robustness training',
      'Modular architecture for easy extension',
      '50ms inference time (3x faster than baseline)',
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
      '50ms inference time suitable for real-time use',
      'Modular design keeps the system easy to extend',
    ],
    tags: ['#AI', '#Systems', '#Automation'],
    githubUrl: 'https://github.com/kowshik-thatinati/ARAGOG',
    screenshots: [
      {
        src: '/pics/aragog_landing%20page.jpeg',
        alt: 'ARAGOG landing page with feature overview',
        caption: 'Landing page and product positioning view',
      },
      {
        src: '/pics/aragog_loginpage.jpeg',
        alt: 'ARAGOG login page',
        caption: 'Authentication entry point for the platform',
      },
      {
        src: '/pics/aragog.png',
        alt: 'ARAGOG interface and AI assistant workflow snapshot',
        caption: 'Main application workflow and reasoning interface',
      },
    ],
    screenshotPlaceholders: [],
  },
  {
    id: 'stale-fruit-detector',
    title: 'Stale Fruit Detector',
    categories: ['AI/ML', 'Computer Vision'],
    shortDescription:
      'Real-time fruit freshness classifier for quick quality checks.',
    impact: '92% accuracy, 65% faster processing, 35ms inference.',
    problem: 'Manual fruit inspection is slow and inconsistent.',
    systemOverview:
      'A vision pipeline that classifies fruit freshness for real-time use.',
    approachSteps: [
      'Collected and preprocessed fresh and stale fruit images.',
      'Trained Vision Transformer and Swin Transformer models.',
      'Added augmentation and error handling for stable inference.',
      'Created a simple real-time quality assessment interface.',
    ],
    keyFeatures: [
      'Real-time fruit freshness classification',
      'Robust inference pipeline with error recovery',
      'Multi-fruit support',
      'Confidence scoring for classification results',
      'Web interface for easy deployment',
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
      '92% accuracy on the test dataset',
      '35ms inference time for real-time use',
      '65% faster than manual inspection',
      'Transferable to other quality-control tasks',
    ],
    tags: ['#ComputerVision', '#ML', '#Classification'],
    githubUrl: 'https://github.com/kowshik-thatinati/stale-fruit-detector',
    screenshots: [
      {
        src: '/pics/stalefruitdetector_landingpage.jpeg',
        alt: 'Stale fruit detector landing page',
        caption: 'Project landing page and product summary',
      },
      {
        src: '/pics/stalefruitdetector.png',
        alt: 'Stale fruit detector interface and prediction results',
        caption: 'Main analysis view with freshness score output',
      },
    ],
    screenshotPlaceholders: [],
  },
  {
    id: 'trackhire',
    title: 'TrackHire',
    categories: ['Web', 'Systems'],
    shortDescription:
      'Spring Boot and React tracker for applications and follow-ups.',
    impact: 'Secure tracking, reminders, and observability in one place.',
    problem:
      'Job search tracking gets messy across spreadsheets and reminders.',
    systemOverview:
      'TrackHire pairs a Spring Boot API with React, PostgreSQL, JWT auth, and Docker.',
    approachSteps: [
      'Modeled jobs, companies, statuses, and reminders in PostgreSQL.',
      'Built a Spring Boot REST API with JWT authentication.',
      'Implemented a React 19 dashboard for managing applications.',
      'Added GitHub Actions and Actuator for deployment and observability.',
    ],
    keyFeatures: [
      'JWT-protected authentication flow',
      'Application pipeline tracking',
      'Interview and follow-up reminders',
      'Dockerized services',
      'GitHub Actions CI/CD pipeline',
    ],
    stack: ['Java 17', 'Spring Boot', 'React 19', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    outcomes: [
      'One dashboard for the full job-search funnel',
      'Clear visibility into active applications and follow-ups',
      'Deployment-friendly stack with observability built in',
      'Reduces manual tracking effort',
    ],
    tags: ['#SpringBoot', '#React', '#JWT', '#JobTracker'],
    githubUrl: 'https://github.com/kowshik-thatinati/Trackhire',
    screenshots: [
      {
        src: '/pics/trakchire_landingpage.jpeg',
        alt: 'TrackHire landing page',
        caption: 'Public landing page and feature introduction',
      },
      {
        src: '/pics/trackhire_loginpage.jpeg',
        alt: 'TrackHire login screen',
        caption: 'Secure login flow for authenticated access',
      },
      {
        src: '/pics/trackhiremainpage.jpeg',
        alt: 'TrackHire main dashboard and application overview',
        caption: 'Main dashboard with application pipeline overview',
      },
    ],
    screenshotPlaceholders: [],
  },
  {
    id: 'career-compass',
    title: 'Career Compass',
    categories: ['AI/ML', 'Web'],
    shortDescription:
      'AI career guidance app with voice and 3D interaction.',
    impact: '96% accuracy with live voice responses.',
    problem: 'Career guidance is often generic and static.',
    systemOverview:
      'A voice-enabled AI app with a 3D avatar for immersive guidance.',
    approachSteps: [
      'Implemented voice recognition with the Web Speech API.',
      'Integrated Google Gemini for intelligent responses.',
      'Created a 3D avatar with Three.js and React Three Fiber.',
      'Added voice synthesis and Firebase-backed storage.',
    ],
    keyFeatures: [
      '96% accuracy in educational and job-related queries',
      'Live voice interaction',
      '3D animated avatar',
      'Real-time voice-to-text and text-to-voice conversion',
      'Firebase Authentication and Firestore',
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
      'Natural voice interaction with avatar responses',
      'Real-time conversation flow',
      'Cross-platform web accessibility',
    ],
    tags: ['#AI', '#Web', '#Voice', '#3D'],
    githubUrl: 'https://github.com/kowshik-thatinati/career-compass',
    screenshots: [
      {
        src: '/pics/career_comapss_landingpage.jpeg',
        alt: 'Career Compass landing page',
        caption: 'Landing page framing the product experience',
      },
      {
        src: '/pics/career_compass_loginpage.jpeg',
        alt: 'Career Compass login page',
        caption: 'Authentication entry screen',
      },
      {
        src: '/pics/career_compass_livesessionpage.jpeg',
        alt: 'Career Compass main session page',
        caption: 'Main session flow with the interactive avatar',
      },
    ],
    screenshotPlaceholders: [],
  },
]

export const experiences: Experience[] = [
  {
    id: 'internship-phase-1',
    phaseLabel: 'PHASE 1',
    title: 'Adversarial Attacks on ML Models',
    duration: 'May 2025 – Aug 2025',
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
        {
          src: '/pics/adversarial_aml_cert.jpg',
          alt: 'Adversarial machine learning internship certificate',
          caption: 'Certificate proof for the adversarial ML internship',
        },
      ],
    },
  },
  {
    id: 'internship-phase-2',
    phaseLabel: 'PHASE 2',
    title: 'Federated Object Detection',
    duration: 'Dec 2025 – Jun 2026',
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
        {
          src: '/pics/federated_learning_cert.jpg',
          alt: 'Federated learning internship certificate',
          caption: 'Certificate proof for the federated learning internship',
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
    items: ['Git', 'Firebase', 'Docker (basics)', 'MongoDB', 'Google Colab', 'Kaggle', 'Jupyter'],
  },
] as const

export const contact = {
  email: 'kowshikthatinati559@gmail.com',
  github: 'https://github.com/kowshik-thatinati',
  linkedin: 'https://www.linkedin.com/in/kowshik-thatinati',
  githubLabel: 'github.com/kowshik-thatinati',
  linkedinLabel: 'linkedin.com/in/kowshik-thatinati',
}
