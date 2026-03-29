🕵️‍♂️ Data Detective | Neural Privacy Audit System
🚨 Problem
Dijital dünyada kullanıcılar, kasten uzun, karmaşık ve hukuki jargonla dolu gizlilik sözleşmelerini okumadan onaylamak zorunda kalıyor. Bu "Kör Onay" (Blind Consent) durumu, kişisel verilerin hangi risklere maruz kaldığının bilinmesini imkansız hale getiriyor.

💡 Çözüm
Data Detective, Llama 3.3 70B modelinin üstün akıl yürütme gücünü kullanarak karmaşık yasal metinleri milisaniyeler içinde tarayan deterministik bir dijital denetçidir. Sıradan yapay zeka araçlarının aksine, geliştirdiğim State Caching (Durum Hafızası) mimarisi sayesinde, 12 farklı dil arasındaki geçişlerde matematiksel risk skorunu sabit tutar ve "Çeviri Kayması" (Translation Drift) hatasını %100 engelleyerek tutarlı bir güvenlik endeksi sunar.

🚀 Canlı Demo
Yayın Linki: https://data-detective-sd.netlify.app/

Demo Video: https://www.loom.com/share/372396c6a4b2407e9592ecd6921f1dd1

🛠 Kullanılan Teknolojiler
Yapay Zeka: Llama-3.3-70b-versatile (Hukuki bağlamda üstün akıl yürütme).

Inference Engine: Groq LPU™ (Ultra düşük gecikme süresi ile anında JSON üretimi).

Frontend: HTML5, Tailwind CSS (Modern Karanlık/Aydınlık mod entegrasyonu).

Core Logic: Vanilla JavaScript (ES6+).

Mimari: State Caching & Zero-Tolerance Prompting (Temperature: 0.0, Sabit Seed).

Raporlama: Özel @media print CSS mimarisi (Resmi PDF çıktıları için).

⚙️ Nasıl Çalıştırılır?
Projeyi Edinin: Depoyu (repository) klonlayın veya .zip olarak indirin.

API Anahtarını Ekleyin: index.html dosyasını bir kod editöründe açın. Sayfanın sonundaki <script> bölümünde yer alan apiKey = "" kısmına kendi Groq API anahtarınızı yapıştırın.

Çalıştırın: Dosyayı kaydedin ve index.html dosyasını herhangi bir modern tarayıcıda çift tıklayarak başlatın.

Analiz Edin: Sözleşme metnini yapıştırın, çıktı dilini seçin ve "RUN ANALYSIS" butonuna tıklayın.

⏱️ Önemli Zaman Damgası:
Uygulama, jüri değerlendirme süreci kapsamında Çarşamba, 01 Nisan 2026 14:43:49 UTC tarihine kadar yerleşik bir API anahtarı ile tam fonksiyonel çalışmaktadır. Bu tarihten sonra test etmek için lütfen kendi API anahtarınızı tanımlayınız.