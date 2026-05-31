const axios = require("axios");

const predictHoax = async (req, res) => {
    try {
        const { text } = req.body;

        // Validasi input dari frontend
        if (!text) {
            return res.status(400).json({
                message: "Teks wajib diisi"
            });
        }

        const fastapiUrl = process.env.AI_API_URL || "http://127.0.0.1:8000/predict";

        // Request ke AI FastAPI (Mengirimkan teks ke Python)
        const response = await axios.post(fastapiUrl, {
            text: text
        });

        const aiData = response.data;

        return res.status(200).json({
            status: aiData.prediction === "HOAX" ? "Hoaks" : "Fakta",
            confidence: aiData.confidence, 
            explanation: aiData.explanation || "Analisis berdasarkan model AI service.",
            text,
            date: new Date().toLocaleString("id-ID")
        });

    } catch (error) {
        console.error("AI Service Error:", error.message);

        return res.status(500).json({
            message: "Gagal menyambungkan atau memproses data di layanan AI (FastAPI)"
        });
    }
};

module.exports = {
    predictHoax
};