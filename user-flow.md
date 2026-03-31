# 🌊 User Flow (Step-by-Step Experience)

The **Data Detective** journey is engineered as a seamless, high-performance audit experience. The following steps outline the interaction between the user and the Neural Privacy Engine.

## 1. Entry & Data Preparation
- **Access:** The user opens the web interface (fully optimized for both Dark and Light modes).
- **Input:** The user copies the privacy policy or legal contract text they wish to audit.
- **Ingestion:** The user pastes the text into the specialized textarea. A minimum of 50 characters is required to initiate a valid legal scan.

## 2. Configuration & Language Selection
- **Localization:** The user selects the desired output language from the dropdown menu (e.g., Turkish, English, German, Korean, etc.).
- **Selection Logic:** This selection defines the `targetLang` parameter for the AI Analyst Agent, determining the final UI output.

## 3. Deterministic AI Processing (The Engine)
- **Trigger:** The user clicks the **"RUN ANALYSIS"** button.
- **State Check (Memoization):** The system generates a unique hash of the input text.
- **New Task:** If it’s a new contract, the system triggers a full logical audit via **Netlify Serverless Functions**.
- **Cache Hit:** If the text has been previously analyzed, the system bypasses re-evaluation and triggers a "Zero-Drift Translation" to ensure 100% mathematical consistency.
- **LPU Inference:** A secure API call is sent to **Llama 3.3 70B** via **Groq LPU**, returning a strictly structured, schema-validated JSON object.

## 4. Result Visualization & Mapping
- **Parsing:** The JavaScript engine parses the JSON response and maps data to the UI components in real-time.
- **Risk Cards:** The agent generates exactly 4 Risk Cards. Each card displays:
    - A localized Title.
    - A Severity Badge (High/Medium/Low) determined by the `severityCode`.
    - A plain-language Description and an Actionable Solution.
- **Dynamic Heatmap:** The algorithm calculates the ratio of high-risk items and animates the Risk Density Bar accordingly.

## 5. Reporting & Export
- **Review:** The user reviews the localized audit to identify critical privacy gaps.
- **PDF Generation:** The user clicks **"GENERATE LEGAL REPORT"**.
- **Neural Render:** A custom CSS engine overrides browser-specific UI filters (like backdrop-blur) to produce a high-fidelity, print-ready PDF document.

---

## 📊 Logical Flow Diagram (Mermaid)

```mermaid
graph TD
    A[User Pastes Contract] --> B{Same as Last?}
    B -- Yes --> C[Bypass AI Logic: Cache Hit]
    B -- No --> D[Trigger Llama-3.3-70B Logic Gate]
    C --> E[Zero-Drift Translation]
    D --> F[Deterministic 4-Category Audit]
    F --> G[Store in State Cache]
    G --> E
    E --> H[Render UI: Risk Cards & Heatmap]
    H --> I[Generate High-Fidelity PDF]