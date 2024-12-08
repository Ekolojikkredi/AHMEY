// Sayfa içeriklerini değiştirecek fonksiyon
function showPage(page) {
    const pageContent = document.getElementById("page-content");

    if (page === 'ekolojik-kredi') {
        pageContent.innerHTML = `
            <h2>Ekolojik Kredi Nedir?</h2>
            <p>Ekolojik kredi, bireylerin veya okulların çevreye duyarlı davranışlarını ödüllendiren bir sistemdir. Bu krediler, atıkların doğru bir şekilde ayrıştırılması, geri dönüşüme kazandırılması ve çevre dostu uygulamalar ile kazanılır.</p>
            <p>Ekolojik kredi sistemi, geri dönüşüm oranlarını artırmayı, doğal kaynakları korumayı ve çevre bilincini artırmayı amaçlar.</p>
        `;
    } else if (page === 'hazirlayanlar') {
        pageContent.innerHTML = `
            <h2>Hazırlayanlar</h2>
            <p>Bu proje, doğa dostu bir toplum yaratma hedefiyle geliştirilmiştir. Proje, ekolojik bilinci artırmak ve geri dönüşümün yaygınlaştırılmasına yardımcı olmak için hazırlanmıştır. Ekip üyeleri...</p>
        `;
    } else if (page === 'geri-donusum') {
        pageContent.innerHTML = `
            <h2>Geri Dönüşüm Nedir?</h2>
            <p>Geri dönüşüm, atıkların yeniden işlenerek tekrar kullanılabilir hale getirilmesi sürecidir. Doğal kaynakların korunmasına yardımcı olur ve çevre kirliliğini azaltır.</p>
        `;
    } else if (page === 'bize-ulasin') {
        pageContent.innerHTML = `
            <h2>Bize Ulaşın</h2>
            <p>E-posta: ekolojikkreditubitak@gmail.com</p>
            <p>Adres: Torbalı Anadolu Lisesi</p>
            <p><a href="https://youtube.com/@ekolojikkredi?si=038d_q53wpNtZt5d" target="_blank">YouTube Kanalımızı Ziyaret Edin</a></p>
        `;
    } else if (page === 'kayit') {
        pageContent.innerHTML = `
            <h2>Kayıt Ol</h2>
            <button onclick="showSubPage('ogrenci-kayit')">Öğrenci Kaydı</button>
            <button onclick="showSubPage('okul-kayit')">Okul Kaydı</button>
        `;
    } else if (page === 'veri-goruntuleme') {
        pageContent.innerHTML = `
            <h2>Veri Görüntüleme</h2>
            <form id="loginForm">
                <label for="email">E-posta:</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="password">Şifre:</label>
                <input type="password" id="password" name="password" required><br><br>
                <button type="submit">Giriş Yap</button>
            </form>
        `;
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
            // Burada giriş yapma işlemi yapılacak
            alert("Giriş başarılı!");
        });
    } else if (page === 'veri-giris') {
        pageContent.innerHTML = `
            <h2>Veri Girişi</h2>
            <form id="veriGirisForm">
                <label for="okul-sifre">Okul Şifresi:</label>
                <input type="password" id="okul-sifre" name="okul-sifre" required><br><br>
                <label for="atikturu">Atık Türü:</label>
                <select id="atikturu" name="atikturu" required>
                    <option value="kağıt">Kağıt</option>
                    <option value="plastik">Plastik</option>
                    <option value="cam">Cam</option>
                    <option value="metal">Metal</option>
                    <option value="elektronik">Elektronik</option>
                    <option value="yağ">Yağ</option>
                    <option value="tekstil">Tekstil</option>
                </select><br><br>
                <label for="miktar">Miktar (kg):</label>
                <input type="number" id="miktar" name="miktar" required><br><br>
                <button type="submit">Veriyi Gönder</button>
            </form>
        `;
        document.getElementById("veriGirisForm").addEventListener("submit", function(event) {
            event.preventDefault();
            // Burada veri girişi işlemi yapılacak
            alert("Veri başarıyla gönderildi!");
        });
    }
}

// Alt sayfalar için işlem
function showSubPage(subPage) {
    const pageContent = document.getElementById("page-content");
    
    if (subPage === 'ogrenci-kayit') {
        pageContent.innerHTML = `
            <h2>Öğrenci Kaydı</h2>
            <form id="ogrenciForm">
                <label for="isim">İsim:</label>
                <input type="text" id="isim" name="isim" required><br><br>
                <label for="soyisim">Soyisim:</label>
                <input type="text" id="soyisim" name="soyisim" required><br><br>
                <label for="email">E-posta:</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="telefon">Telefon:</label>
                <input type="tel" id="telefon" name="telefon" required><br><br>
                <label for="okul-ad">Okul Adı:</label>
                <input type="text" id="okul-ad" name="okul-ad" required><br><br>
                <label for="sinif">Sınıf:</label>
                <input type="text" id="sinif" name="sinif" required><br><br>
                <button type="submit">Kaydı Tamamla</button>
            </form>
        `;
        document.getElementById("ogrenciForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Öğrenci kaydı başarılı!");
        });
    } else if (subPage === 'okul-kayit') {
        pageContent.innerHTML = `
            <h2>Okul Kaydı</h2>
            <form id="okulForm">
                <label for="okul-isim">Okul Adı:</label>
                <input type="text" id="okul-isim" name="okul-isim" required><br><br>
                <label for="okul-adres">Adres:</label>
                <input type="text" id="okul-adres" name="okul-adres" required><br><br>
                <label for="okul-email">Okul E-posta:</label>
                <input type="email" id="okul-email" name="okul-email" required><br><br>
                <label for="okul-telefon">Telefon Numarası:</label>
                <input type="tel" id="okul-telefon" name="okul-telefon" required><br><br>
                <label for="okul-sifre">Şifre:</label>
                <input type="password" id="okul-sifre" name="okul-sifre" required><br><br>
                <button type="submit">Kaydı Tamamla</button>
            </form>
        `;
        document.getElementById("okulForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Okul kaydı başarılı!");
        });
    }
}
