🛠️ Tech Stack & Engineering Justification
The Data Detective architecture is engineered with a high-performance, modern AI stack to ensure 100% mathematical consistency, cross-language stability, and ultra-low latency.

Core Technologies
AI Model (llama-3.3-70b-versatile): Chosen for its superior reasoning capabilities in complex legal contexts. Its large parameter count (70B) ensures high-fidelity translations and the ability to maintain logical consistency across all 12 supported languages without any "Translation Drift."

Inference Engine (Groq LPU™): Selected for its ultra-low latency inference. Groq's Language Processing Unit (LPU) allows the model to generate complex JSON responses in milliseconds, providing a near-instant "Scanning" experience that traditional GPUs cannot match.

Frontend (HTML5 & Tailwind CSS): Utilized for the rapid deployment of a modern, responsive, and aesthetically professional UI. Tailwind’s utility-first approach was critical for implementing the adaptive Dark/Light Mode and the complex @media print engine required for high-fidelity PDF reports.

Logic & Backend (Vanilla JavaScript ES6+): Chosen to keep the application lightweight and fast. It manages the Deterministic AI Engine, which implements State Caching (Memoization). This ensures that once a contract is analyzed, its mathematical risk score is strictly "locked" in memory, preventing deviation when the user switches languages.

Deployment (Netlify): Selected for its reliable global Edge delivery and continuous integration (CI/CD) capabilities, ensuring the audit tool is accessible globally with zero downtime.

🏗️ Architectural Highlights
Deterministic Logic Gate: Uses a fixed seed and temperature: 0.0 to completely eliminate LLM stochasticity (randomness).

State Persistence: Implements a hashing mechanism to cache analysis results, ensuring the generated "Security Index" remains mathematically identical across all language sessions.

PDF Render Engine: A custom CSS layer meticulously designed to override browser-specific print bugs (like backdrop-blur rendering issues) to produce clean, official legal documents.