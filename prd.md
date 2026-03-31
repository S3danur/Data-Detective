# 📄 Product Requirements Document (PRD)
**Project Name:** Data Detective (Neural Privacy Scanner)
**Version:** 1.0.0
**Author:** Seda Nur Kizilay

## 1. Product Overview
**Data Detective** is a deterministic AI-powered legal auditor designed to eliminate "Blind Consent." It allows users to paste complex privacy policies or terms of service, and instantly receive a mathematically consistent, multi-language risk analysis using Llama 3.3 70B via Groq LPU. 

## 2. Target Audience
- **Everyday Users:** Need quick summaries of what they are agreeing to.
- **Privacy Advocates & Journalists:** Require rapid auditing of corporate data policies.
- **Developers:** Need to check third-party API terms for compliance.

## 3. Core Features (Functional Requirements)

### F1: Contract Ingestion Engine
- **Description:** A dedicated text area for users to paste legal documents.
- **Validation:** Must contain a minimum of 50 characters to trigger the AI, preventing empty or accidental API calls.
- **UI Element:** Responsive textarea optimized for both Dark and Light modes.

### F2: Global Localization (Target Language Selector)
- **Description:** A dropdown menu allowing users to select their preferred output language.
- **Support:** Must support 12 languages (English, Turkish, German, French, Spanish, Japanese, Chinese, Korean, Arabic, etc.).
- **Constraint:** Language switching must trigger the State Caching mechanism (Zero-Drift) if the text is already analyzed.

### F3: Deterministic AI Auditor (The Core)
- **Description:** The "RUN ANALYSIS" button triggers the neural scan.
- **Logic:** Sends the payload to a Netlify Serverless Function (Proxy) to keep the Groq API key 100% secure.
- **Output:** The AI must return a strictly formatted JSON containing exactly 4 Risk Cards with Severity Codes (1=Low, 2=Medium, 3=High).

### F4: Dynamic Risk Dashboard
- **Description:** Real-time visualization of the AI's JSON output.
- **Components:** - **Risk Cards:** Displaying the localized Title, Severity Badge, Description, and Actionable Solution.
  - **Risk Density Bar:** A visual heatmap calculating the percentage of high-risk clauses in the document.

### F5: High-Fidelity PDF Export
- **Description:** A "GENERATE LEGAL REPORT" feature.
- **Logic:** Uses a custom `@media print` CSS engine to strip away web UI elements (like buttons and dark mode backgrounds) and generate a clean, official-grade PDF document for the user to save or print.

## 4. Technical Requirements (Non-Functional)
- **Security:** Zero client-side API exposure. All inference requests must be routed through `netlify/functions/analyze.js`.
- **Performance:** Sub-second inference latency utilizing Groq LPU architecture.
- **Consistency:** The AI must use `temperature: 0.0` and a State Caching (Memoization) algorithm to ensure mathematical consistency and eliminate "Translation Drift."

## 5. Future Iterations (v2.0 Roadmap)
- **Direct File Upload:** Allowing users to upload `.pdf` or `.docx` files directly.
- **Browser Extension:** A Chrome extension to auto-scan "Terms of Service" pages upon visiting a new website.