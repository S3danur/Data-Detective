// Dosya Yolu: netlify/functions/analyze.js

exports.handler = async function(event, context) {
    // Sadece POST isteklerine izin ver (Güvenlik)
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        // Ön yüzden (index.html) gelen verileri alıyoruz
        const { systemPrompt, promptStr } = JSON.parse(event.body);
        
        // MÜHENDİSLİK KİLİDİ: API Anahtarı doğrudan Netlify sunucusundan çekiliyor!
        const apiKey = process.env.GROQ_API_KEY; 

        if (!apiKey) {
            return { statusCode: 500, body: JSON.stringify({ error: { message: "API Key is not configured!" } }) };
        }

        // Groq API'sine asıl isteği burada gizlice atıyoruz
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: promptStr }
                ],
                temperature: 0.0,
                top_p: 1.0,
                seed: 1453,
                response_format: { type: "json_object" }
            })
        });

        const data = await response.json();

        // Sonucu ön yüze geri döndürüyoruz
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: { message: "Server Error:" + error.message } })
        };
    }
};