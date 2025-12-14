import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'narc-ware',
    title: 'NARC-WARE',
    category: 'ai-ml',
    description: '🏆 1st Place winner at Smart India Hackathon 2024. AI-powered web application detecting drug trafficking on encrypted platforms using ML, NLP, and real-time threat analysis.',
    fullDescription: 'NARC-WARE is an award-winning AI-powered web application developed for the Narcotics Control Bureau (NCB) India, securing 1st place at the 7th Smart India Hackathon 2024 held at IIT Bhubaneswar. Developed during an intensive 36-hour hackathon, this end-to-end solution addresses the critical challenge of detecting drug trafficking activities on encrypted platforms like WhatsApp, Telegram, and Instagram.\n\nThe system employs a comprehensive four-stage approach: (1) Filtration & Scraping - utilizing Selenium and Telethon for web scraping and advanced NLP for keyword extraction; (2) Multi-format Data Analysis - processing text, audio, and video content stored in Firebase with ML models that assign suspicion scores to flagged accounts; (3) Personal Detail Identification - leveraging OSINT techniques and a specialized Local Slang Bot to identify suspicious individuals; (4) Real-time Threat Detection - providing NCB with detailed reports and personal identification through an intuitive user interface.\n\nNARC-WARE combines machine learning, natural language processing, and real-time analysis to enable rapid identification and response to drug-related activities while ensuring innocent users are not incorrectly flagged. The backend ML models demonstrate broad applicability across various domains, with patent filing currently in progress.',
    techStack: ['Python', 'TensorFlow', 'NLP', 'Selenium', 'Telethon', 'Firebase', 'OSINT', 'Machine Learning'],
    image: 'https://ik.imagekit.io/pradeepkrishna07/Narcware.png',
    githubUrl: 'https://github.com/PradeepKrishna-J/Narcware',
  },
  {
    id: 'deep-learning-projects',
    title: 'Deep Learning Projects',
    category: 'ai-ml',
    description: 'A collection of hands-on deep learning implementations covering fundamental concepts to advanced neural network architectures.',
    fullDescription: 'A comprehensive portfolio of deep learning projects implemented in Jupyter notebooks with detailed code, explanations, and visualizations. The collection includes:\n\n• Linear Regression - Custom gradient descent implementation with loss curve visualization\n• Softmax Regression - Multi-class classification on Iris dataset achieving 100% test accuracy\n• XOR using MLP - Demonstrating neural networks learning non-linear functions with backpropagation from scratch\n• MNIST CNN - Deep CNN architecture with batch normalization achieving 99.07% test accuracy\n• IMDB Sentiment Classification - LSTM networks for sentiment analysis on movie reviews\n• CIFAR-10 Image Classification - Transfer learning with InceptionV3 achieving 62% accuracy\n• MultiHead Attention - Transformer architecture implementation with self-attention mechanism and positional encoding\n\nEach project demonstrates practical implementation of core deep learning concepts, from foundational algorithms to state-of-the-art architectures.',
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'CNN', 'LSTM', 'Transformers', 'Transfer Learning'],
    image: 'https://ik.imagekit.io/pradeepkrishna07/dl_projects?updatedAt=1765733549627',
    githubUrl: 'https://github.com/PradeepKrishna-J/Deep-learning-projects',
  },
  {
    id: 'baysoft-chatbot',
    title: 'Baysoft Chatbot',
    category: 'ai-ml',
    description: 'Intelligent conversational AI chatbot with context-aware responses for enterprise solutions.',
    fullDescription: 'Developed during internship at Baysoft Systems Inc., this enterprise-grade chatbot provides intelligent, context-aware responses using transformer-based models. Features include multi-turn conversation handling, intent classification, and seamless integration with business systems.',
    techStack: ['Python', 'Hugging Face', 'FastAPI', 'Transformers', 'LangChain'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'generative-ai-tasks',
    title: 'Generative AI Tasks',
    category: 'ai-ml',
    description: 'Collection of generative AI projects including text generation, image synthesis, and creative applications.',
    fullDescription: 'A comprehensive portfolio of generative AI projects exploring various architectures including GANs, VAEs, and transformer-based models. Projects span text generation, image synthesis, style transfer, and creative AI applications.',
    techStack: ['Python', 'PyTorch', 'Stable Diffusion', 'GPT', 'GANs'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'stock-price-detection',
    title: 'Stock Price Detection',
    category: 'ai-ml',
    description: 'Machine learning system for stock price prediction using technical indicators and market sentiment analysis.',
    fullDescription: 'Advanced financial forecasting system that combines technical analysis, sentiment analysis from news and social media, and time series modeling to predict stock price movements. Implements LSTM networks and ensemble methods for improved accuracy.',
    techStack: ['Python', 'TensorFlow', 'Pandas', 'LSTM', 'Time Series Analysis'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'schoolscape',
    title: 'Schoolscape',
    category: 'web-dev',
    description: 'Comprehensive school management system with student tracking, attendance, and performance analytics.',
    fullDescription: 'Full-stack web application for school administration featuring student information management, attendance tracking, grade management, and performance analytics. Built with modern web technologies ensuring scalability and user-friendly interface.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'rl-tictactoe',
    title: 'RL Tic-Tac-Toe',
    category: 'research',
    description: 'Reinforcement learning agent that masters Tic-Tac-Toe through self-play and Q-learning.',
    fullDescription: 'Implementation of various reinforcement learning algorithms including Q-learning, SARSA, and Deep Q-Networks to create an optimal Tic-Tac-Toe playing agent. The system demonstrates learning through self-play and policy improvement over iterations.',
    techStack: ['Python', 'OpenAI Gym', 'NumPy', 'Q-Learning', 'Deep RL'],
    githubUrl: 'https://github.com',
  },
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(p => p.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id);
};
