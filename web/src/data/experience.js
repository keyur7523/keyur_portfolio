export const experiences =[
    {
        company: 'HAV Fresno',
        position: 'Full Stack Developer - AI Focused',
        duration: 'Aug 2025 - Present',
        description: [
            'Built HAV_assistant — a Chrome extension + Python/Flask backend that turns recorded visits into SOAP-formatted clinical notes, cutting a 20-minute manual documentation workflow to 2–3 minutes.',
            "Engineered a floating UI with real-time audio recording, drag-and-drop bulk upload, and an inline corrections modal (MediaRecorder + WebAudio), backed by a MongoDB correction store that learns the practice's vocabulary.",
            'Built a three-tier AI paraphrasing pipeline (OpenAI speech-to-text + LangChain/GPT-4) behind REST endpoints for transcription and async paraphrasing, with S3 audio storage and database persistence.',
            'Shipped end-to-end and kept it in daily use: browser extension, real-time audio processing, async server pipelines, and cloud storage.'
        ]
    },
    {
        company: 'Hibiki AI - CSU Fresno',
        position: 'Frontend Developer',
        duration: 'Jan 2025 - May 2025',
        description: [
            'Built the client-side application for Hibiki-AI with secure integrations to backend AI services.',
            'Designed modular frontend architecture supporting maintainable development and future feature expansion.',
            'Ensured production-readiness with code quality standards and Apache 2.0 license compliance.'
        ]
    },
    {
        company: 'YouGov',
        position: 'Python Developer',
        duration: 'Sept 2021 - July 2023',
        description: [
            'Built and maintained survey application systems using Gryphon (a Python-based proprietary tool) and JavaScript for enterprise clients.',
            'Built automation tools that reduced manual coding processes from 6–20 hours to single-click operations.',
            'Optimized internal data pipelines using asynchronous processing and caching, and designed reusable modules to improve consistency across projects.',
            'Coordinated with cross-functional client teams to translate business needs into technical specifications and deliver data-collection solutions.'
        ]
    }
]