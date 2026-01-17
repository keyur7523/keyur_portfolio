import deepSearchImage1 from '../images/deepsearch/deepsearch_img_1.jpeg'
import deepSearchImage2 from '../images/deepsearch/deepsearch_img_2.jpeg'
import deepSearchImage3 from '../images/deepsearch/deepsearch_img_3.jpeg'
import caseSnapImage1 from '../images/casesnap/casesnap_img_1.jpeg'
import caseSnapImage2 from '../images/casesnap/casesnap_img_2.jpeg'
import caseSnapImage3 from '../images/casesnap/casesnap_img_3.jpeg'
import caseSnapImage4 from '../images/casesnap/casesnap_img_4.jpeg'
import promptLabImage1 from '../images/promptLab/promptlabimg1.jpeg'
import probekitImage1 from '../images/probekit/probekitimg1.jpg'
import probekitImage2 from '../images/probekit/probekitimg2.jpg'
import probekitImage3 from '../images/probekit/probekitimg3.jpg'
import probekitImage4 from '../images/probekit/probekitimg4.jpg'
import probekitImage5 from '../images/probekit/probekitimg5.jpg'
import probekitImage6 from '../images/probekit/probekitimg6.jpg'
import hireTrackImage1 from '../images/hiretrack/hiretrackimg1.jpg'
import hireTrackImage2 from '../images/hiretrack/hiretrackimg2.jpg'
import hireTrackImage3 from '../images/hiretrack/hiretrackimg3.jpg'


/* Projects */
export const projectList = [
    {
        name: 'PromptLab',
        summary: 'LLM experimentation platform with real-time SSE streaming chat, deterministic A/B prompt routing, persistent conversations, and feedback + cost/latency telemetry to continuously evaluate and improve model behavior.',
        description: [
            'Built a production-grade AI experimentation platform enabling safe prompt iteration at scale, featuring real-time Server-Sent Events (SSE) streaming, deterministic A/B testing with consistent hashing, and a feedback pipeline for continuous model improvement—architected to handle 2,000+ QPS with horizontal scaling strategies.', 'Designed and implemented a Rust microservice for high-performance token estimation and cost calculation, achieving sub-millisecond latency with zero GC pauses. Integrated with Python backend via HTTP with automatic fallback, demonstrating cross-language systems design and the ability to choose the right tool for performance-critical components.', 'Engineered comprehensive observability infrastructure including structured JSON logging with correlation IDs for distributed tracing, per-request cost tracking (tokens in/out, latency, USD cost), and real-time metrics visualization in the frontend—enabling data-driven prompt optimization decisions.', 'Documented scale architecture for millions of users covering bottleneck analysis (LLM rate limits, streaming fan-out, DB write amplification), failure modes with detection/recovery strategies, Redis sharding patterns, database read/write separation, and a prompt rollback strategy with versioned registry and canary deployments.'
        ],
        techStack: ['Python', 'FastAPI', 'Rust', 'PostgreSQL', 'Redis', 'Server-Sent Events (SSE)', 'React', 'TypeScript', 'Vite', 'SQLAlchemy', 'Docker'],
        images: [promptLabImage1],
        link: 'https://prompt-lab-gold.vercel.app/'
    },
    {
        name: 'HireTrack',
        summary: 'Full-stack job application tracking platform with multi-tenant architecture, role-based access control, and real-time pipeline management.',
        description: [
            'Built a multi-tenant hiring platform with JWT authentication and granular RBAC (applicant/employer/admin), implementing secure cross-tenant isolation where employers can only access their own job postings and applicant pipelines.', 'Designed an application workflow with Redis-backed idempotency keys, database-enforced uniqueness constraints, and a strict status state machine (applied → reviewed → interview → accepted/rejected) with full audit logging.', 'Implemented graceful degradation patterns for Redis failures, auto-running Alembic migrations on startup for serverless deployments, and async PostgreSQL operations with SQLAlchemy 2.0 for high-throughput handling.', 'Delivered a responsive React dashboard with role-aware routing, real-time job filtering/search, application status timelines, and admin health monitoring; deployed on Vercel (frontend) and Render (backend) with environment-based CORS configuration.'
        ],
        techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'SQLAlchemy', 'Alembic', 'JWT', 'Tailwind CSS', 'Vercel', 'Render'],
        images: [hireTrackImage1, hireTrackImage2, hireTrackImage3],
        link: 'https://hiretrack-puce.vercel.app'
    },
    {
        name: 'Probekit',
        summary: 'Behavioral evaluation platform for LLM prompts with multi‑model runs, evaluatorscoring, regression detection, and human‑in‑the‑loop annotations to measure prompt qualitychanges over time.',
        description: [
            'Built an end‑to‑end LLM evaluation system that runs prompts across multiple models, capturescost/latency/token telemetry per output, and stores structured results for reproducible analysis — designed for prompt versioning and regression detection workflows.', 'Implemented a suite of behavioral evaluators (instruction adherence, hallucination detection, stability sampling, refusal behavior, and format consistency) with strict schema validation and configurable evaluation parameters to surface failure modes early.', 'Shipped a dashboard with trends, model comparison, evaluator breakdowns, and regression alerts, plus a version‑comparison view that highlights behavioral drift between prompt versions and models.', 'Added a human annotation UI and accuracy reporting to validate automated evaluators against ground truth, enabling calibration and continuous improvement of evaluation reliability.'
        ],
        techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Query', 'Recharts'],
        images: [probekitImage1, probekitImage2, probekitImage3, probekitImage4, probekitImage5, probekitImage6],
        link: 'https://probekit.vercel.app/'
    },
    {
        name: 'DeepSearch',
        summary: 'Agentic Research Assistant for state of the art research with web and academic search, source handling, and synthesis.',
        description: [
            'Built an agentic research pipeline orchestrating Strategy → Search → Quality → Synthesis agents via a task-DAG executor, with automatic routing between simple and agentic modes based on topic complexity.', 'Integrated hybrid retrieval (web + academic, incl. arXiv) with snippet extraction, reflection-driven query refinement, source scoring/deduplication, and asset handling; exposed clean REST endpoints for runs, sources, assets, and graphs.', 'Delivered evidence-grounded writing using planner/writer models with strict inline citation enforcement, quality scoring, JSON repair/fallbacks, and final report synthesis into cohesive markdown.', 'Shipped a real-time research dashboard: streaming agent events and run status via SSE, task-graph visualization, sources/paragraph views, and S3 presigned uploads; configurable CORS and environment-based setup for Vercel/Render deployments.'
        ],
        techStack: ['Next.js', 'FastAPI', 'MongoDB', 'OpenAI-compatible LLMs', 'Server-Sent Events (SSE)', 'AWS S3', 'Vercel/Render'],
        images: [deepSearchImage1, deepSearchImage2, deepSearchImage3],
        link: 'https://deep-search-two.vercel.app'
    },
    {
        name: 'CaseSnap',
        summary: 'Enterprise Legal Practice Management System for law firms with case management, employee administration, billing, and automated reminders.',
        description: [
            'Architected enterprise legal SaaS platform supporting 100+ organizations with 2,000 employees each using MongoDB multi-tenant architecture and JWT organization isolation, featuring case management, employee administration, billing, and automated reminders with role-based access control.', 'Engineered workflow automation with court calendar integration, automated billing, PDF/Excel export, smart notifications, and cron job scheduling for deadline tracking, implementing 1-hour caching and CDN optimization for scalable performance.', 'Will be adding an AI-powered analytics dashboard with real-time insights and business intelligence, plus AI-friendly API endpoints supporting 6+ major AI crawlers (GPTBot, Claude, Perplexity) with JSON-LD structured data for enhanced search visibility.'
        ],
        techStack: ['Next.js 14', 'TypeScript', 'Node.js/Express', 'MongoDB', 'Material-UI', 'TailwindCSS', 'JWT Authentication', 'Redux Toolkit'],
        images: [caseSnapImage1, caseSnapImage2, caseSnapImage3, caseSnapImage4],
        link: 'https://casesnap-lake.vercel.app/'
    }



    
]