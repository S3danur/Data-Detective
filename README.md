# 🕵️‍♂️ Data Detective | Neural Privacy Scanner

## Problem
Privacy policies and legal contracts are intentionally long, complex, and filled with legal jargon. This makes it nearly impossible for everyday users to identify hidden data collection risks, leading to a lack of informed consent before clicking "I Accept."

## Solution
Data Detective acts as an automated digital auditor. Using the reasoning power of **Llama 3.3 70B via Groq LPU**, the application scans these documents in seconds to highlight high-risk clauses. It doesn't just find risks; it provides actionable "Solution Suggestions" and visualizes the overall risk density with a dynamic heatmap.

## Canlı Demo
**Yayın Linki:** [https://data-detective-sd.netlify.app/]
**Demo Video:** [BURAYA_YOUTUBE_VEYA_LOOM_LINKINI_YAPISTIR]

## Kullanılan Teknolojiler
- **AI Model:** Llama 3.3 70B (State-of-the-art Reasoning Model)
- **Inference Engine:** Groq LPU™ (Ultra-low latency processing)
- **Frontend:** HTML5 / Tailwind CSS (Modern & Responsive UI)
- **Logic:** Vanilla JavaScript (ES6+) for dynamic risk calculation
- **Deployment:** Netlify

## Nasıl Çalıştırılır?
1. Repository'yi klonlayın veya `.zip` olarak indirin.
2. `features/` klasörüne gidin.
3. `index.html` dosyasını herhangi bir modern tarayıcıda (Chrome, Edge, Safari vb.) çift tıklayarak açın.
4. Analiz etmek istediğiniz metni yapıştırın, dili seçin ve "Analyze Contract" butonuna basın.
## ⭐ Bonus: AI Agent Architecture
- **Agent Folder:** Located in `/agents`, this directory contains the `PrivacyAnalystAgent` logic which handles risk calculation and multi-language status mapping, separating the "brain" from the UI.