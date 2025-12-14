import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'baysoft-internship',
    title: 'AI/ML Intern',
    company: 'Baysoft Systems Inc.',
    location: 'Remote',
    period: 'June 2024 - August 2024',
    description: 'Developed enterprise-grade conversational AI solutions and worked on natural language processing projects.',
    highlights: [
      'Built intelligent chatbot using Hugging Face transformers achieving 92% user satisfaction',
      'Implemented RAG architecture for context-aware document retrieval and response generation',
      'Optimized model inference reducing latency by 40% through quantization and caching strategies',
      'Collaborated with cross-functional teams to integrate AI solutions into production systems',
    ],
    type: 'internship',
  },
  {
    id: 'aicte-skillible',
    title: 'Data Science Intern',
    company: 'AICTE-Skillible',
    location: 'India',
    period: 'January 2024 - March 2024',
    description: 'Focused on data analytics, machine learning model development, and business intelligence solutions.',
    highlights: [
      'Developed predictive models for customer churn analysis with 85% accuracy',
      'Created interactive dashboards for business intelligence using Python and visualization libraries',
      'Performed exploratory data analysis on large datasets identifying key business insights',
      'Participated in agile development sprints and code review processes',
    ],
    type: 'internship',
  },
  {
    id: 'narc-ware-project',
    title: 'Lead Researcher & Developer',
    company: 'SVCE Research Lab',
    location: 'Chennai, India',
    period: 'September 2023 - Present',
    description: 'Leading research project on narcissistic behavior detection using advanced NLP techniques.',
    highlights: [
      'Designed novel architecture combining BERT and behavioral psychology frameworks',
      'Published research findings in international conference proceedings',
      'Achieved 89% accuracy in narcissistic trait identification from text data',
      'Mentored junior team members in machine learning best practices',
    ],
    type: 'research',
  },
  {
    id: 'true-lens-project',
    title: 'Computer Vision Research',
    company: 'Academic Project - SVCE',
    location: 'Chennai, India',
    period: 'March 2024 - July 2024',
    description: 'Developed deep learning system for image authenticity verification and fake media detection.',
    highlights: [
      'Implemented ensemble CNN architecture for deepfake and manipulation detection',
      'Created comprehensive dataset of authentic and manipulated images for training',
      'Achieved 91% precision in identifying AI-generated and edited images',
      'Presented findings at college technical symposium',
    ],
    type: 'project',
  },
];
