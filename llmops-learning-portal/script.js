// JavaScript for AI Observability & LLMOps Learning Portal

// DOM Elements
const header = document.querySelector('.header');
const trackModal = document.getElementById('trackModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

// Track data
const tracks = {
    beginner: {
        title: 'Beginner Track - AI + LLM Basics',
        level: 'Foundational',
        duration: '6-8 weeks',
        description: 'Start your journey with the fundamentals of AI, machine learning, and large language models. This track is designed for those new to the field.',
        modules: [
            {
                number: 1,
                title: 'AI & ML Fundamentals',
                duration: '2 hours',
                description: 'Understanding AI, ML, Deep Learning, model lifecycle, and evaluation metrics',
                tools: ['Scikit-learn', 'TensorFlow', 'PyTorch'],
                topics: ['What is AI, ML, Deep Learning?', 'Supervised vs Unsupervised Learning', 'Model lifecycle overview', 'Training vs Inference', 'Evaluation metrics', 'Overfitting & Underfitting']
            },
            {
                number: 2,
                title: 'NLP & Transformer Basics',
                duration: '3 hours',
                description: 'Text preprocessing, embeddings, attention mechanism, and transformer architecture',
                tools: ['Hugging Face', 'spaCy', 'NLTK'],
                topics: ['Text preprocessing basics', 'Word embeddings', 'Attention mechanism', 'Transformer architecture', 'Pretraining vs Fine-tuning']
            },
            {
                number: 3,
                title: 'Introduction to Large Language Models',
                duration: '2 hours',
                description: 'Understanding LLMs, tokenization, context windows, and prompting fundamentals',
                tools: ['OpenAI API', 'Anthropic API', 'Llama'],
                topics: ['What are LLMs?', 'Decoder-only vs Encoder-Decoder models', 'Tokens & tokenization', 'Context windows', 'Prompting fundamentals']
            }
        ],
        outcomes: [
            'Understand fundamental AI and ML concepts',
            'Grasp NLP and transformer architecture basics',
            'Learn LLM fundamentals and basic prompting',
            'Build foundation for advanced tracks'
        ],
        prerequisites: ['Basic programming knowledge', 'Understanding of mathematics and statistics']
    },
    builder: {
        title: 'Builder Track - RAG + Prompt Engineering',
        level: 'Intermediate',
        duration: '8-10 weeks',
        description: 'Learn to build practical AI applications using prompt engineering and Retrieval-Augmented Generation techniques.',
        modules: [
            {
                number: 1,
                title: 'Advanced Prompt Engineering',
                duration: '3 hours',
                description: 'Master zero-shot, few-shot, chain-of-thought, role prompting, and prompt templating',
                tools: ['PromptLayer', 'LangChain', 'OpenAI Playground'],
                topics: ['Zero-shot prompting techniques', 'Few-shot learning strategies', 'Chain-of-thought prompting', 'Role-based prompting', 'Prompt versioning and management']
            },
            {
                number: 2,
                title: 'Retrieval-Augmented Generation (RAG)',
                duration: '4 hours',
                description: 'Build RAG systems with vector databases, embeddings, and hybrid search',
                tools: ['Pinecone', 'Weaviate', 'FAISS', 'Chroma'],
                topics: ['Vector database fundamentals', 'Embedding strategies', 'Chunking techniques', 'Hybrid search methods', 'Re-ranking algorithms']
            },
            {
                number: 3,
                title: 'LangChain & LlamaIndex Frameworks',
                duration: '5 hours',
                description: 'Master popular frameworks for building LLM applications',
                tools: ['LangChain', 'LlamaIndex', 'Python'],
                topics: ['LangChain components and chains', 'LlamaIndex data indexing', 'Custom tool integration', 'Memory management', 'Application deployment']
            }
        ],
        outcomes: [
            'Master advanced prompt engineering techniques',
            'Build production-ready RAG applications',
            'Work with popular LLM frameworks',
            'Understand vector database integration'
        ],
        prerequisites: ['Completion of Beginner Track', 'Basic Python programming skills']
    },
    llmops: {
        title: 'LLMOps Track - Deployment + Scaling',
        level: 'Advanced',
        duration: '10-12 weeks',
        description: 'Learn to deploy, scale, and manage LLM applications in production environments.',
        modules: [
            {
                number: 1,
                title: 'Containerization & Orchestration',
                duration: '4 hours',
                description: 'Master Docker and Kubernetes for LLM deployment',
                tools: ['Docker', 'Kubernetes', 'Docker Compose'],
                topics: ['Docker fundamentals', 'Containerizing LLM applications', 'Kubernetes basics', 'Service deployment', 'Scaling strategies']
            },
            {
                number: 2,
                title: 'Model Serving & Inference Optimization',
                duration: '5 hours',
                description: 'Optimize model serving with Ray Serve, vLLM, and Triton',
                tools: ['Ray Serve', 'vLLM', 'Triton Inference Server'],
                topics: ['High-performance serving', 'Batch inference optimization', 'Memory management', 'GPU utilization', 'Latency reduction']
            },
            {
                number: 3,
                title: 'LLM Infrastructure & Scaling',
                duration: '6 hours',
                description: 'Build scalable infrastructure for enterprise LLM deployments',
                tools: ['Kubernetes', 'Load Balancers', 'Monitoring Tools'],
                topics: ['Infrastructure design patterns', 'Auto-scaling strategies', 'Cost optimization', 'Performance monitoring', 'Security considerations']
            }
        ],
        outcomes: [
            'Deploy LLMs in production environments',
            'Optimize inference performance and costs',
            'Build scalable LLM infrastructure',
            'Implement monitoring and alerting'
        ],
        prerequisites: ['Completion of Builder Track', 'Experience with cloud platforms', 'Basic DevOps knowledge']
    },
    observability: {
        title: 'Observability Track - Monitoring + Evaluation',
        level: 'Expert',
        duration: '8-10 weeks',
        description: 'Master AI observability with comprehensive monitoring, evaluation, and debugging techniques.',
        modules: [
            {
                number: 1,
                title: 'AI Observability Fundamentals',
                duration: '3 hours',
                description: 'Understand the difference between monitoring and observability for AI systems',
                tools: ['Prometheus', 'Grafana', 'Jaeger', 'OpenTelemetry'],
                topics: ['Observability vs monitoring', 'LLM-specific telemetry', 'Logs, metrics, and traces', 'User interaction tracking', 'Performance baselines']
            },
            {
                number: 2,
                title: 'LLM Evaluation & Quality Monitoring',
                duration: '4 hours',
                description: 'Implement comprehensive evaluation and quality monitoring systems',
                tools: ['LangSmith', 'Arize AI', 'WhyLabs', 'Weights & Biases'],
                topics: ['Offline vs online evaluation', 'Human-in-the-loop review', 'LLM-as-a-judge techniques', 'Hallucination detection', 'Toxicity & bias detection']
            },
            {
                number: 3,
                title: 'Prompt & Response Tracking',
                duration: '3 hours',
                description: 'Track prompts, responses, and model behavior over time',
                tools: ['LangSmith', 'PromptLayer', 'Helicone', 'WhyLabs'],
                topics: ['Prompt drift detection', 'Output drift analysis', 'Token usage monitoring', 'Cost analytics', 'Version comparison']
            }
        ],
        outcomes: [
            'Implement comprehensive AI observability',
            'Monitor LLM quality and performance',
            'Detect and prevent model drift',
            'Optimize costs through monitoring'
        ],
        prerequisites: ['Completion of LLMOps Track', 'Understanding of monitoring concepts', 'Experience with observability tools']
    },
    architect: {
        title: 'Advanced Architect Track - Governance + Enterprise Design',
        level: 'Enterprise',
        duration: '12-16 weeks',
        description: 'Design and implement enterprise-grade AI systems with proper governance, security, and compliance.',
        modules: [
            {
                number: 1,
                title: 'AI Governance & Compliance',
                duration: '5 hours',
                description: 'Implement AI governance frameworks and ensure regulatory compliance',
                tools: ['Microsoft Presidio', 'OpenAI Moderation API', 'Compliance Frameworks'],
                topics: ['AI governance frameworks', 'Data privacy (GDPR basics)', 'Audit trails', 'Role-based access control', 'Compliance automation']
            },
            {
                number: 2,
                title: 'Security & Guardrails',
                duration: '4 hours',
                description: 'Implement comprehensive security measures and guardrails for LLM applications',
                tools: ['Guardrails AI', 'Microsoft Presidio', 'OpenAI Moderation API'],
                topics: ['Prompt injection prevention', 'Jailbreak attack mitigation', 'Output filtering', 'Security best practices', 'Threat modeling']
            },
            {
                number: 3,
                title: 'Enterprise Architecture Design',
                duration: '6 hours',
                description: 'Design scalable, maintainable enterprise AI architectures',
                tools: ['Architecture Frameworks', 'Design Patterns', 'Enterprise Tools'],
                topics: ['Enterprise architecture patterns', 'Microservices for AI', 'Data pipeline design', 'Integration strategies', 'Scalability planning']
            }
        ],
        outcomes: [
            'Design enterprise-grade AI systems',
            'Implement comprehensive governance',
            'Ensure security and compliance',
            'Architect scalable solutions'
        ],
        prerequisites: ['Completion of Observability Track', 'Enterprise architecture experience', 'Security and compliance knowledge']
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initHeaderScroll();
    initSmoothScrolling();
    initModal();
    initProgressAnimations();
    initIntersectionObserver();
    initInteractiveFeatures();
});

// Header scroll effect
function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Modal functionality
function initModal() {
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === trackModal) {
            closeModal();
        }
    });
}

function openTrack(trackId) {
    const track = tracks[trackId];
    if (!track) return;
    
    modalBody.innerHTML = createTrackModalContent(track);
    trackModal.style.display = 'block';
    
    // Add animation class
    setTimeout(() => {
        const modalContent = trackModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.opacity = '1';
            modalContent.style.transform = 'translateY(0)';
        }
    }, 10);
}

function closeModal() {
    const modalContent = trackModal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.style.opacity = '0';
        modalContent.style.transform = 'translateY(-20px)';
    }
    
    setTimeout(() => {
        trackModal.style.display = 'none';
    }, 300);
}

function createTrackModalContent(track) {
    return `
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-track-icon">
                    <i class="fas fa-${getTrackIcon(track.title)}"></i>
                </div>
                <div class="modal-track-info">
                    <h2>${track.title}</h2>
                    <div class="modal-track-meta">
                        <span class="track-level">${track.level}</span>
                        <span class="track-duration">${track.duration}</span>
                    </div>
                </div>
                <button class="close-btn" onclick="closeModal()">&times;</button>
            </div>
            
            <div class="modal-content-body">
                <div class="track-description">
                    <h3>About This Track</h3>
                    <p>${track.description}</p>
                </div>
                
                <div class="track-modules">
                    <h3>Modules</h3>
                    ${track.modules.map(module => `
                        <div class="modal-module-card">
                            <div class="module-header">
                                <div class="module-number">${module.number}</div>
                                <div class="module-title">
                                    <h4>${module.title}</h4>
                                    <span class="module-duration">${module.duration}</span>
                                </div>
                            </div>
                            <p class="module-description">${module.description}</p>
                            <div class="module-tools">
                                <h5>Tools & Technologies:</h5>
                                <div class="tools-list">
                                    ${module.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                                </div>
                            </div>
                            <div class="module-topics">
                                <h5>Key Topics:</h5>
                                <ul>
                                    ${module.topics.map(topic => `<li>${topic}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="track-outcomes">
                    <h3>Learning Outcomes</h3>
                    <ul class="outcomes-list">
                        ${track.outcomes.map(outcome => `<li><i class="fas fa-check-circle"></i> ${outcome}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="track-prerequisites">
                    <h3>Prerequisites</h3>
                    <ul class="prerequisites-list">
                        ${track.prerequisites.map(prereq => `<li><i class="fas fa-book"></i> ${prereq}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="startTrack('${track.title}')">Start Track</button>
                    <button class="btn btn-outline" onclick="downloadSyllabus('${track.title}')">Download Syllabus</button>
                </div>
            </div>
        </div>
    `;
}

function getTrackIcon(trackTitle) {
    if (trackTitle.includes('Beginner')) return 'graduation-cap';
    if (trackTitle.includes('Builder')) return 'tools';
    if (trackTitle.includes('LLMOps')) return 'cogs';
    if (trackTitle.includes('Observability')) return 'eye';
    if (trackTitle.includes('Architect')) return 'building';
    return 'brain';
}

// Progress animations
function initProgressAnimations() {
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute('data-width') || '100%';
                fill.style.width = width;
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Intersection Observer for fade-in animations
function initIntersectionObserver() {
    const fadeElements = document.querySelectorAll('.track-card, .module-card, .tool-item, .community-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function startTrack(trackName) {
    alert(`Starting ${trackName}... This would typically redirect to the learning platform.`);
    closeModal();
}

function downloadSyllabus(trackName) {
    alert(`Downloading syllabus for ${trackName}... This would typically trigger a file download.`);
}

function openModule(moduleId) {
    // Map module IDs to their corresponding HTML files
    const moduleMap = {
        'ai-ml-fundamentals': 'modules/ai-ml-fundamentals.html',
        'nlp-transformer-basics': 'modules/nlp-transformer-basics.html',
        'advanced-prompt-engineering': 'modules/advanced-prompt-engineering.html',
        'rag-systems': 'modules/rag-systems.html',
        'containerization-orchestration': 'modules/containerization-orchestration.html',
        'model-serving-optimization': 'modules/model-serving-optimization.html'
    };
    
    const modulePath = moduleMap[moduleId];
    
    if (modulePath) {
        // Open the module in a new tab
        window.open(modulePath, '_blank');
    } else {
        alert(`Module not found: ${moduleId}\n\nThis module is still under development.`);
    }
}

// Additional interactive features
function initInteractiveFeatures() {
    // Add hover effects to track cards
    const trackCards = document.querySelectorAll('.track-card');
    trackCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click functionality to toggle content
        card.addEventListener('click', function(e) {
            // Prevent modal from opening if clicking on external links
            if (e.target.closest('.external-resources a')) {
                return;
            }
            
            // Toggle active class to show/hide content
            this.classList.toggle('active');
            
            // Animate the content
            const content = this.querySelector('.topic-content');
            if (content) {
                if (this.classList.contains('active')) {
                    content.style.display = 'block';
                    content.style.animation = 'slideDown 0.3s ease';
                } else {
                    content.style.display = 'none';
                }
            }
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Export functions for global access
window.openTrack = openTrack;
window.closeModal = closeModal;
window.scrollToSection = scrollToSection;
window.startTrack = startTrack;
window.downloadSyllabus = downloadSyllabus;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initHeaderScroll();
    initSmoothScrolling();
    initModal();
    initProgressAnimations();
    initIntersectionObserver();
    initInteractiveFeatures();
});
