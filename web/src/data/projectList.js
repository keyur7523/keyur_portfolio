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
import hireTrackImage1 from '../images/hiretrack/hiretrackimg1.jpeg'
import hireTrackImage2 from '../images/hiretrack/hiretrackimg2.jpeg'
import hireTrackImage3 from '../images/hiretrack/hiretrackimg3.jpeg'
import kodaImage1 from '../images/koda/kodaimg1.jpeg'
import kodaImage2 from '../images/koda/kodaimg2.jpeg'
import kodaImage3 from '../images/koda/kodaimg3.jpeg'
import authzImage1 from '../images/authz/authzimg1.jpeg'
import authzImage2 from '../images/authz/authzimg2.jpeg'
import authzImage3 from '../images/authz/authzimg3.jpeg'
import authzImage4 from '../images/authz/authzimg4.jpeg'
import collabCanvasImage1 from '../images/collabcanvas/ccimg1.jpeg'
import collabCanvasImage2 from '../images/collabcanvas/ccimg2.jpeg'
import collabCanvasImage3 from '../images/collabcanvas/ccimg3.jpeg'


/* Projects */
export const projectList = [

    {
        name: 'Koda',
        summary: 'AI-powered coding agent with multi-phase orchestration, human-in-the-loop approval workflows, and real-time streaming execution for safe, transparent code generation.',                                                                     
        description: [
            'Architected a multi-phase agentic workflow (Understanding → Planning → Executing → Approval) with phase-specific model selection—using Claude 3.5 Haiku for cost-effective codebase exploration and Claude Sonnet 4 for intelligent planning and execution—reducing API costs by 40% while maintaining output quality', 'Implemented a tool-use orchestration loop supporting 7 tools (read_file, write_file, delete_file, list_directory, search_code, run_command, index_symbols) with automatic tool chaining, where the LLM iteratively calls tools until task completion, handling complex multi-step coding tasks autonomously', 'Built a change staging system with human-in-the-loop approval—all file modifications are staged (never applied directly), generating unified diffs for visual review in Monaco Editor before explicit user approval, ensuring safety and preventing unintended codebase changes.', 'Developed real-time WebSocket streaming architecture that broadcasts agent reasoning, tool calls, and results live to the frontend, providing full transparency into agent decision-making with sub-second latency using FastAPI async handlers.', 'Implemented secure API key management with Fernet (AES-128-CBC) encryption at rest, where user Anthropic keys are encrypted before PostgreSQL storage and decrypted only during LLM API calls—keys are never logged, cached, or returned to the frontend.', 'Integrated GitHub OAuth for repository cloning, branch creation, and automated PR generation with structured descriptions, enabling end-to-end workflow from natural language task to pull request without leaving the application.', 'Built a Tree-sitter powered code indexer that parses Python ASTs to extract symbols (classes, functions, methods), enabling the agent to understand codebase structure and navigate to relevant code sections during the understanding phase.', 'Designed a token-aware architecture with usage tracking per user, supporting both BYOK (Bring Your Own Key) for unlimited usage and a free tier with configurable token limits, with graceful degradation when limits are reached.',  'Delivered a responsive React dashboard with Zustand state management, featuring real-time agent stream visualization, collapsible tool call inspection, Monaco-based diff review, dark/light theme support, and keyboard shortcuts for power users.'   
        ],
        techStack: [
            'React 19', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'WebSocket', 'Anthropic Claude API', 'Tree-sitter', 'Monaco Editor', 'Zustand', 'Fernet Encryption', 'JWT', 'GitHub OAuth', 'Tailwind CSS v4', 'Vite', 'Vercel', 'Render'
        ],
        images: [kodaImage1, kodaImage2, kodaImage3],
        link: 'https://koda-tau.vercel.app'
    }, 
    {
        name: 'CollabCanvas',
        summary: 'Real-time collaborative design board with CRDT-based synchronization, live cursor presence, and a full-featured canvas editor supporting shapes, text, and images.',
        description: [
            'Architected a real-time collaborative canvas using Yjs CRDT (Conflict-free Replicated Data Type) for seamless multi-user synchronization, implementing pycrdt-websocket on the backend for document persistence, binary WebSocket message broadcasting, and automatic conflict resolution without requiring operational transforms.',
            'Engineered JWT-authenticated WebSocket connections with token validation middleware, graceful reconnection handling with exponential backoff, and React StrictMode-compatible connection lifecycle management using deferred cleanup patterns to prevent premature disconnections during development.',
            'Built a feature-rich canvas editor with Konva.js supporting multiple shape primitives (rectangles, ellipses, lines, arrows, text, sticky notes, images), with transformer handles for resize/rotate, multi-select via Shift+click and marquee selection, and layer management (bring-to-front, send-to-back).',
            'Implemented advanced canvas interactions including copy/paste with Ctrl+C/V and automatic offset positioning, snap-to-grid with configurable grid sizes, smart alignment guides, shape locking to prevent accidental edits, and full keyboard shortcut support (Ctrl+Z/Y undo/redo, Delete, Escape to deselect).',
            'Developed comprehensive live collaboration features including real-time cursor tracking with user name labels and avatar colors, remote selection highlights showing elements others are editing, online presence panel with user list, and connection status indicators.',
            'Created a sharing system with role-based permissions (owner/editor/viewer), secure invite link generation with unique tokens, board access management modal, and cross-tenant isolation ensuring users only access authorized boards.',
            'Delivered polished UX with zoom controls (fit-to-screen, zoom-to-selection, percentage-based with mousewheel support), alignment toolbar (distribute horizontally/vertically, align edges/centers), PNG/SVG/JSON export functionality, and inline-editable board names with auto-save.',
            'Deployed on Vercel (frontend) and Render (backend) with Neon PostgreSQL for persistence, Redis for session caching, OAuth 2.0 authentication (Google/GitHub), auto-running Alembic migrations for zero-touch deployments, and environment-based CORS/WebSocket URL configuration for secure cross-origin communication.'
        ],
        techStack: ['React', 'TypeScript', 'Konva.js', 'Yjs CRDT', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Redis', 'SQLAlchemy', 'Alembic', 'OAuth 2.0', 'JWT', 'Tailwind CSS', 'Vercel', 'Render', 'Neon'],
        images: [ccimg1, ccimg2, ccimg3],
        link: 'https://collabcanvas-tau.vercel.app'
    },
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
        name: 'AuthZ Platform',
        summary: 'Enterprise-grade authorization and approval workflow system featuring RBAC/PBAC policy engines, multi-tenant organization management, and real-time access request workflows—mirroring authorization infrastructure used at companies like Google, Meta, and ByteDance.',
        description: [
            'Architected a dual authorization engine supporting both Role-Based Access Control (RBAC) and Policy-Based Access Control (PBAC)—RBAC provides simple user→role→permission hierarchies while PBAC enables flexible JSON policy documents with principal matching, wildcard patterns (e.g., database:*), and attribute-based conditions, with deny-overrides-allow evaluation logic matching AWS IAM semantics.',
            'Built a complete access request workflow with finite state machine (Pending→Approved/Denied→Expired), featuring request submission with justification, approver inbox with risk-based color coding, approve/deny actions with comments, automatic role provisioning on approval, and time-bound access that auto-expires—all changes captured in an immutable audit trail.',
            'Implemented secure JWT authentication with refresh token rotation using unique JTI (JWT ID) claims—each refresh invalidates the previous token by replacing the stored SHA-256 hash, preventing token reuse attacks while maintaining seamless user sessions with 15-minute access tokens and 7-day refresh tokens.',
            'Designed a multi-tenant architecture with organization-scoped data isolation, member roles (Owner/Admin/Member), and an invite system with expiring tokens—all database queries are automatically scoped to the user\'s current organization, preventing cross-tenant data leakage at the ORM level.',
            'Developed a power-user optimized React dashboard with command palette (Cmd+K), keyboard navigation (j/k for lists, G+R/G+P/G+U for quick navigation), real-time search filtering, bulk permission assignment, CSV audit export, and a "Midnight Sapphire" dark theme—delivering the keyboard-driven efficiency expected in internal developer tools.',
        ],
        techStack: [
            'React 19', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy 2.0', 'Alembic', 'JWT', 'bcrypt', 'Zustand', 'React Query', 'Framer Motion', 'Tailwind CSS v4', 'Sonner', 'Lucide React', 'Vite', 'Pytest'
        ],
        images: [authzImage1, authzImage2, authzImage3, authzImage4],
        link: 'https://authz-liard.vercel.app/'
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