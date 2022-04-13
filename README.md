# Avalanche gas fee takipçisi

Avalanche ağındaki gas fee miktarını takip ederek belirlediğiniz birimin altına indiğinde bilgi sahibi olmanızı sağlar.
Youtube üzerinden çağırılan iframe bir şarkı videosunu oynatarak bir nevi alarm görevi görür.
Çalışırken uygun gas ücretlerini sürekli kaçırdığım için çok zaman harcamadan gas fee takibi yapabilmek için html ve javascript ile basit bir kodlama yaptım.
Bu bir uygulama değildir. Taryıcınızda çalışır. Yarayıcınızın bir sekmesinde açık kalmadığı sürece işini yapabilir.

## UYARI
**ÖDEYECEĞİNİZ KOMÜSYONLARLA BU SCRİPTİN BİR İLGİSİ YOKTUR**

Zaman zaman fee çok volatil olabiliyor. dakikalar içinde oldukça yükseliyor ya da düşebiliyor. İşleminizi yaparken ödeyeceğiniz değeri kontrol etmelisiniz.

Bu scriptte gördüğünüz değer siz işlemi yaparken değişecektir. Bazen çok fazla değiştiğini bilmelisiniz.

Bu script sadece uygun fiyatın o an için geldiğini anlar, ama dakikalar içinde olumlu ya da olumsuz bu fiyat değişecektir.

**İşleminiz için geçerli fee ücreti, işlemi yaptığınız platform tarafından gösterilen değerdir. Sizden işlem yaptığınız platformun o esnada bildirdiği miktarda fee alınır**
**Kendi kontrollerinizi yapmadan işlem yapmamalısınız.**

## Kullanım
1. https://snowtrace.io/ üyeliğiniz varsa api keyinizi oluşturun. Yoksa üye olarak api key oluşturabilirsiniz.
2. Dosyayı indirin. Notepad ya da kullandığınız bir html editör ile açın.
3. `const apiKey = 'yourApiKey';` satırını bulun ve snowtrace'den aldığınız api anahtarını ***yourApiKey*** yazısı ile değiştirin.
4. `*const target = 40;` satırını bulun ve ***40*** yerine alarmınızın tetiklenmesni istediğiniz en yüksek gas fee değerini GWEI cinsinden girin. Burdaki örnekte fee değeri 40'ın altına indiğinde video çalmaya başlayacak.
5. dosyayı kaydedin ve çabuk ulaşabileceğiniz bir yere alın. Örn: Masaüstü
6. Dosyaya çift tıklayın ve tarayıcınızda açılsın. Ekranınız açık olduğu sürece ilgilendiğiniz fee değerinin altına indiğinde haberdar olmak için tarayıcınızın bir sekmesinde sürekli açık kalması gerekir.