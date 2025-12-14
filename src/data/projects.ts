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
    fullDescription: 'A comprehensive portfolio of deep learning projects implemented in Jupyter notebooks with detailed code, explanations, and visualizations. The collection includes:\n\n• **[XOR using MLP](https://github.com/PradeepKrishna-J/Deep-learning-projects/tree/main/01-xor-mlp)** - Neural network learning non-linear functions with backpropagation from scratch. Implements forward and backward passes manually. Demonstrates XOR problem solution.\n\n• **[Linear Regression](https://github.com/PradeepKrishna-J/Deep-learning-projects/tree/main/02-linear-regression)** - Custom gradient descent implementation for linear modeling. Features loss curve visualization and convergence analysis. Built without ML frameworks.\n\n• **[Softmax Regression](https://github.com/PradeepKrishna-J/Deep-learning-projects/tree/main/03-softmax-regression)** - Multi-class classification on Iris dataset. Achieves 100% test accuracy with softmax activation. Includes probability distribution visualization.\n\n• **[MNIST CNN](https://github.com/PradeepKrishna-J/Deep-learning-projects/tree/main/04-mnist-cnn)** - Deep CNN architecture for digit recognition. Uses batch normalization and dropout for regularization. Achieves 99.07% test accuracy.\n\n• **[IMDB Sentiment Classification](https://github.com/PradeepKrishna-J/Deep-learning-projects/tree/main/05-imdb-lstm)** - LSTM networks for movie review sentiment analysis. Processes sequential text data with embeddings. Demonstrates recurrent neural network capabilities.\n\n• **[CIFAR-10 Image Classification](https://github.com/PradeepKrishna-J/Deep-learning-projects/tree/main/06-cifar10-inceptionv3)** - Transfer learning with pre-trained InceptionV3 model. Fine-tuned for 10-class image classification. Achieves 62% accuracy on diverse object categories.\n\n• **[MultiHead Attention](https://github.com/PradeepKrishna-J/Deep-learning-projects/tree/main/07-multihead-attention)** - Transformer architecture with self-attention mechanism. Implements positional encoding and multi-head attention layers. Core component of modern NLP models.',
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'CNN', 'LSTM', 'Transformers', 'Transfer Learning'],
    image: 'https://ik.imagekit.io/pradeepkrishna07/dl_projects?updatedAt=1765733549627',
    githubUrl: 'https://github.com/PradeepKrishna-J/Deep-learning-projects',
  },
  {
    id: 'rl-mini-projects',
    title: 'Reinforcement Learning Mini Projects',
    category: 'ai-ml',
    description: 'Collection of reinforcement learning implementations exploring various environments and algorithms from tabular methods to deep RL.',
    fullDescription: 'A comprehensive collection of reinforcement learning projects implemented with detailed explanations and visualizations. The collection includes:\n\n• **[Frozen Lake Basic](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/frozen_lake_basic)** - Value iteration and policy iteration on deterministic grid world. Implements dynamic programming for optimal policy finding. Demonstrates Bellman equation applications.\n\n• **[Frozen Lake Q-Learning](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/frozen_lake_qlearning)** - Q-learning algorithm for stochastic frozen lake environment. Model-free temporal difference learning approach. Achieves robust policy through exploration.\n\n• **[Frozen Lake SARSA](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/frozen_lake_sarsa)** - On-policy SARSA algorithm implementation. Compares learning behavior with Q-learning. Handles slippery surface dynamics.\n\n• **[BlackJack](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/blackjack)** - Monte Carlo methods for card game strategy learning. First-visit MC for value estimation. Learns optimal playing strategy without dealer rules.\n\n• **[5x5 Grid World](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/5X5_grid_world)** - Custom grid navigation with obstacles and rewards. Policy gradient and value-based methods. Multiple goal states and penalty zones.\n\n• **[Cliff Walking](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/cliff_walking)** - Classical RL benchmark comparing on-policy vs off-policy. Demonstrates safety vs optimality trade-offs. SARSA vs Q-learning behavior analysis.\n\n• **[Taxi](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/taxi)** - Multi-objective pickup and dropoff task. Sparse reward environment with large state space. Demonstrates hierarchical decision making.\n\n• **[Recycling Robot](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/recycling_robot)** - Autonomous robot resource management problem. Battery-aware decision making with charging states. Continuous operation optimization.\n\n• **[Gamblers Problem](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/gamblers_problem)** - Classic DP problem with discrete action space. Probability-based betting strategy optimization. Demonstrates value function convergence.\n\n• **[Markov Process](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/markov_process)** - Markov chain fundamentals and state transitions. Probability distribution evolution over time. Foundation concepts for MDP understanding.\n\n• **[Jacks Car Rental Policy](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/jacks_car_rental_policy)** - Inventory management with Poisson demand distribution. Policy iteration for multi-location optimization. Real-world business application of RL.\n\n• **[Jacks Car Rental Value](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/jacks_car_rental_value)** - Value iteration approach for car rental problem. Iterative policy evaluation and improvement. Compares computational efficiency with policy iteration.\n\n• **[Value Iteration GridWorld](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/value_iteration_gridworld)** - Asynchronous value iteration implementation. Faster convergence through smart state updates. Grid-based navigation with terminal states.\n\n• **[Value Iteration Policy](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/value_iteration_policy_iteration)** - Direct comparison of DP algorithms. Convergence speed and computational requirements. Optimal policy extraction methods.\n\n• **[TicTacToe 5a](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/tictactoe_5a)** - Self-play RL agent for tic-tac-toe. Temporal difference learning without opponent model. Achieves near-optimal play through experience.\n\n• **[TicTacToe Q-Learning](https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects/tree/main/tictactoe_qlearning)** - Q-learning based game playing agent. State-action value estimation for board positions. Exploration strategies for two-player games.',
    techStack: ['Python', 'OpenAI Gym', 'NumPy', 'Q-Learning', 'Dynamic Programming', 'Monte Carlo', 'SARSA'],
    image: 'https://ik.imagekit.io/pradeepkrishna07/RL?updatedAt=1734282000000',
    githubUrl: 'https://github.com/PradeepKrishna-J/Reinforcement_Learning_Mini_Projects',
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
    id: 'clickable',
    title: 'Clickable',
    category: 'web-dev',
    description: 'No-code tool for marketers to create professional blog CTAs with customizable widgets and real-time preview.',
    fullDescription: 'Clickable is a no-code tool internally built during an internship, designed specifically for marketers to create engaging blog content using customizable CTA widgets. The platform streamlines the process of creating professional call-to-action elements without requiring any coding knowledge.\n\nKey features include:\n\n• **13 Professional Templates** - Carefully crafted CTA widgets for every use case. From newsletter signups to product promotions. Covers all common marketing scenarios.\n\n• **Live Preview** - See your changes instantly with real-time preview. Interactive editing experience with immediate visual feedback. No need to refresh or rebuild.\n\n• **One-Click Export** - Copy the generated HTML/CSS code with a single click. Ready-to-use code snippets for immediate integration. Seamless workflow for content creators.\n\n• **Fully Responsive** - All templates are mobile-optimized and look perfect on any device. Automatic scaling and layout adjustments. Ensures consistent user experience across platforms.\n\n• **Easy Customization** - Intuitive form controls for all template properties. Colors, fonts, spacing, and content all adjustable. No technical knowledge required for professional results.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
    githubUrl: 'https://github.com/PradeepKrishna-J/Clickeble',
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
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(p => p.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id);
};
