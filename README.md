# 🕵️‍♂️ Data Detective | Neural Privacy Audit System

## 🚨 Problem
Dijital dünyada kullanıcılar, kasten uzun, karmaşık ve hukuki jargonla dolu gizlilik sözleşmelerini okumadan onaylamak zorunda kalıyor. Bu "Kör Onay" (Blind Consent) durumu, kişisel verilerin hangi risklere maruz kaldığının bilinmesini imkansız hale getiriyor.

## 💡 Çözüm
Data Detective, Llama 3.3 70B modelinin üstün akıl yürütme gücünü kullanarak karmaşık yasal metinleri milisaniyeler içinde tarayan deterministik bir dijital denetçidir. Geliştirdiğim State Caching (Durum Hafızası) ve Serverless (Sunucusuz) Proxy mimarisi sayesinde; 12 farklı dil arasındaki geçişlerde matematiksel risk skorunu sabit tutar, "Çeviri Kayması" (Translation Drift) hatasını %100 engeller ve API anahtarı güvenliğini en üst düzeyde sağlayarak kullanıcılara tutarlı bir güvenlik endeksi sunar.

## 🚀 Canlı Demo
- Yayın Linki: https://data-detective-sd.netlify.app/
- Demo Video: https://www.loom.com/share/372396c6a4b2407e9592ecd6921f1dd1

## 🛠 Kullanılan Teknolojiler
- Yapay Zeka: Llama-3.3-70b-versatile (Hukuki bağlamda üstün akıl yürütme)
- Inference Engine: Groq LPU™ (Ultra düşük gecikme süresi ile anında JSON üretimi)
- Backend & Güvenlik: Netlify Functions (API Key gizliliği için Serverless mimari)
- Frontend: HTML5, Tailwind CSS (Modern Karanlık/Aydınlık mod entegrasyonu)
- Core Logic: Vanilla JavaScript (ES6+)
- Mimari: State Caching & Zero-Tolerance Prompting (Temperature: 0.0, Sabit Seed)
- Raporlama: Özel @media print CSS mimarisi (Resmi PDF çıktıları için)

## ⚙️ Nasıl Çalıştırılır?

Uygulamayı kullanmak için herhangi bir indirme veya kurulum yapmanıza **gerek yoktur.**

1. Doğrudan Kullanım (Önerilen):
Yukarıdaki "Yayın Linki"ne tıklayarak uygulamayı tarayıcınız üzerinden anında kullanabilirsiniz. Gerekli güvenlik altyapısı ve API entegrasyonu sunucu tarafında hazır olarak ayarlanmıştır. 

2. Geliştiriciler İçin (Kodları İncelemek İsteyenler):
Eğer projeyi kendi bilgisayarınızda çalıştırmak isterseniz:
- Projeyi indirin.
- Klasörün içinde .env adında bir dosya oluşturup içine GROQ_API_KEY=sizin_anahtariniz yazın.
- Terminalde sırasıyla "npm install -g netlify-cli" ve "netlify dev" komutlarını çalıştırın.