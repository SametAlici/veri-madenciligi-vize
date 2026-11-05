// Haftalık özetler. Her hafta: id, başlık, kısa açıklama, ilke ve HTML gövde.
import type { Week } from "./types"

export const WEEKS_1_6: Week[] = [
{
  id: 1,
  title: "Veri Madenciliğine Giriş ve Keşif Süreci",
  short: "Veri→bilgi merdiveni, altı görev, KDD · CRISP-DM · SEMMA, lift'e giriş, çoklu karşılaştırma.",
  principle: "Doğru soru, doğru algoritmadan önce gelir. CRISP-DM'in ilk kutusu \"veri\" değil, \"iş\"tir.",
  body: `
<h2>1. Veriden karara: dört basamak</h2><div class="box tip"><span class="label">Çok basit düşün</span>Ham veriyi tek başına kullanmayız: önce anlamlandırır, sonra örüntü bulur, en sonunda karara çeviririz. Bu bölümde veri→enformasyon→bilgi→karar farkını kur.</div>
<div class="table-wrap"><table>
<tr><th>Basamak</th><th>Ne demek?</th><th>Market örneği</th></tr>
<tr><td><b>Veri</b></td><td>Bağlamı olmayan ham işaret</td><td>Fişteki "37,5"</td></tr>
<tr><td><b>Enformasyon</b></td><td>Veriye ne / ne zaman / kim / nerede eklenir; raporlanabilir (iş zekâsı bu basamakta)</td><td>12 Eylül · 3 nolu kasa · 37,50 TL · 4 kalem</td></tr>
<tr><td><b>Bilgi</b></td><td>Tek kayıtta görünmeyen, binlerce kayıttan çıkan ilişki — <i>veri madenciliğinin ürünü</i></td><td>17–19 arası sepetler %40 daha büyük</td></tr>
<tr><td><b>Karar</b></td><td>Bilginin eyleme dönüşmesi; algoritma değil insan verir</td><td>Akşama bir kasiyer daha koy</td></tr>
</table></div>
<div class="box warn"><span class="label">Dikkat</span>Basamaklar arasında geçiş kendiliğinden olmaz; her geçişte bir insan kararı vardır.</div>
<p><b>Neden şimdi?</b> Üç eğri buluştu: üretilen veri ↑, depolama maliyeti ↓, hesaplama gücü ↑. Dördüncü gelişme <b>barkod</b> (1980'ler): fiş içeriği kaydedilince pazar sepeti analizi mümkün oldu.</p>

<h2>2. Tanım ve üç sıfat</h2><div class="box tip"><span class="label">Çok basit düşün</span>Veri madenciliğini tek cümlede hatırla: daha önce bilinmeyen + geçerli + işe yarar örüntü. Örnek bulgunun bu üç şartı sağlayıp sağlamadığını kontrol et.</div>
<div class="box key"><span class="label">Tanım</span>Büyük veri yığınları içinden <b>önceden bilinmeyen</b>, <b>geçerli</b> ve <b>işe yarar</b> örüntülerin keşfi.</div>
<div class="table-wrap"><table>
<tr><th>Sıfat</th><th>Neyi dışarıda bırakır?</th></tr>
<tr><td>Önceden bilinmeyen</td><td>Bilineni doğrulamak ("kışın mont satışı artar")</td></tr>
<tr><td>Geçerli</td><td>Yeni veride tekrar etmeyen tesadüfler</td></tr>
<tr><td>İşe yarar</td><td>Doğru ama karara dönüşmeyen bulgular ("%51'i sağ elini kullanıyor")</td></tr>
</table></div>
<p><b>Ad yanlış:</b> kazılan şey veri değil bilgidir. Daha doğru ad <b>VTBK / KDD</b> (Knowledge Discovery in Databases). "Veri madenciliği" aslında KDD'nin <i>bir adımı</i>.</p>
<p><b>Üç alanın kesişimi:</b> Veritabanı (ölçek) · İstatistik (güvenilirlik) · Yapay zekâ / ML (örüntüyü bulan makine).</p>

<h3>Komşu alanlardan farkı</h3>
<div class="table-wrap"><table>
<tr><th>Alan</th><th>Farkı</th></tr>
<tr><td>İstatistik</td><td>Hipotezi test eder; VM hipotezi veriden <b>çıkarır</b>. İstatistikçi iddiayla, veri madencisi soruyla başlar.</td></tr>
<tr><td>Makine öğrenmesi</td><td>Algoritmalar ortak; ML tahmin gücünü, VM yorumlanabilir örüntüyü vurgular.</td></tr>
<tr><td>Büyük veri</td><td>"Nereye koyacağım?" ↔ VM "ne çıkaracağım?" Excel'e sığan tablo büyük veri değildir ama VM konusu olabilir.</td></tr>
<tr><td>İş zekâsı</td><td>Bildiğin soruyu yanıtlar; VM sormadığın soruyu bulur.</td></tr>
<tr><td>SQL / VTYS</td><td>SELECT…WHERE yazmak için ne aradığını bilmen gerekir.</td></tr>
</table></div>
<div class="box tip"><span class="label">Keşifsel ↔ doğrulayıcı</span>Keşifsel analizde hipotez <b>çıktıdır</b>, doğrulayıcıda <b>girdidir</b>. Günah keşfetmek değil, keşfi doğrulanmış gibi sunmaktır.</div>

<h2>3. Altı görev</h2><div class="box tip"><span class="label">Çok basit düşün</span>Önce hedef/etiket var mı diye bak. Hedef varsa kategori→sınıflandırma, sayı→regresyon; hedef yoksa grup→kümeleme, birlikte görülme→birliktelik, sıra dışı→anomali.</div>
<p>Ayrımı belirleyen soru: <b>hedef sütun var mı?</b> Varsa <b>kestirimci</b> (predictive), yoksa <b>tanımlayıcı</b> (descriptive).</p>
<div class="table-wrap"><table>
<tr><th>Görev</th><th>Tür</th><th>Soru</th><th>Hafta</th></tr>
<tr><td>Sınıflandırma</td><td>Kestirimci</td><td>Hangi sınıfa ait? (kesikli hedef)</td><td>6–8</td></tr>
<tr><td>Regresyon</td><td>Kestirimci</td><td>Değer kaç olacak? (sürekli hedef)</td><td>7</td></tr>
<tr><td>Kümeleme</td><td>Tanımlayıcı</td><td>Kaç doğal grup var? ("doğruluk" yok)</td><td>10–11</td></tr>
<tr><td>Birliktelik kuralları</td><td>Tanımlayıcı</td><td>Neler birlikte oluyor?</td><td>5</td></tr>
<tr><td>Anomali tespiti</td><td>Tanımlayıcı</td><td>Bu kayıt diğerlerine benziyor mu? (aykırı değer burada <i>aranan şey</i>)</td><td>11</td></tr>
<tr><td>Özetleme</td><td>Tanımlayıcı</td><td>Veri genel olarak neye benziyor?</td><td>2, 4</td></tr>
</table></div>
<div class="box key"><span class="label">En önemli refleks</span>"Bu işlem sahte mi?" → elinde "sahte" etiketli geçmiş varsa <b>sınıflandırma</b>, yoksa <b>anomali tespiti</b>. Önce "elimde etiket var mı?" diye sor.</div>

<h2>4. Süreç çerçeveleri</h2><div class="box tip"><span class="label">Çok basit düşün</span>KDD, CRISP-DM ve SEMMA'yı ezberlemek yerine akışlarını karşılaştır: nerede başlıyor, veri madenciliği nerede, sahaya alma var mı? Sınavda en güçlü ayraç CRISP-DM'in iş anlayışı ve yayılımıdır.</div>
<h3>KDD (Fayyad ve ark., 1996) — 5 adım</h3>
<ol><li>Seçim</li><li>Ön işleme</li><li>Dönüştürme</li><li><b>Veri madenciliği</b> (algoritma burada çalışır)</li><li>Yorumlama / değerlendirme</li></ol>
<p>Zamanın <b>%70–80'i ilk üç adımda</b> geçer. Süreç bir döngüdür.</p>
<h3>CRISP-DM (2000) — 6 aşama</h3>
<div class="table-wrap"><table>
<tr><th>#</th><th>Aşama</th><th>Ne yapılır</th></tr>
<tr><td>1</td><td><b>İş anlayışı</b></td><td>Karar, başarı ölçütü, kısıtlar — veriye bakmadan</td></tr>
<tr><td>2</td><td>Veri anlayışı</td><td>Toplama, kalite, keşifçi analiz</td></tr>
<tr><td>3</td><td>Veri hazırlama</td><td>En uzun aşama</td></tr>
<tr><td>4</td><td>Modelleme</td><td>Algoritma seçimi, parametreler</td></tr>
<tr><td>5</td><td>Değerlendirme</td><td>İş sorusunu gerçekten çözüyor mu?</td></tr>
<tr><td>6</td><td><b>Yayılım</b></td><td>Sahaya alma, izleme, yeniden eğitim</td></tr>
</table></div>
<p>Çift yönlü oklar: geriye dönmek başarısızlık değil, yöntemin kendisidir.</p>
<h3>İş anlayışının üç sorusu</h3>
<ol>
<li><b>Hangi karar verilecek?</b> "___ olursa ___ yapacağız." ("Müşteri kaybını anlamak" karar değil, temennidir.)</li>
<li><b>Başarı neyle ölçülecek?</b> İş ölçütü + teknik ölçüt, ikisi de sayı ve tarihle.</li>
<li><b>Kısıtlar neler?</b> Bütçe, kapasite, KVKK, süre, etik. Kısıt modelin biçimini belirler: çağrı merkezi ayda 5.000 kişi arayabiliyorsa olasılık değil <b>sıralama</b> istenir.</li>
</ol>
<p>CRISP-DM'de <b>iş hedefi (1.1)</b> müdürün cümlesidir, <b>VM hedefi (1.3)</b> analistin cümlesi — ayrı yazılır.</p>
<h3>SEMMA (SAS Enterprise Miner)</h3>
<p><b>S</b>ample · <b>E</b>xplore · <b>M</b>odify · <b>M</b>odel · <b>A</b>ssess. SAS'a göre bir metodoloji değil, "araçların mantıksal düzeni". <i>Sample</i> adımı dengesiz veride nadir sınıfı seyreltebilir.</p>
<div class="table-wrap"><table>
<tr><th>Aşama</th><th>KDD</th><th>CRISP-DM</th><th>SEMMA</th></tr>
<tr><td>İş sorusu</td><td>—</td><td>İş anlayışı</td><td>—</td></tr>
<tr><td>Sahaya alma</td><td>—</td><td>Yayılım</td><td>—</td></tr>
</table></div>
<div class="box key">Yalnızca <b>CRISP-DM</b> hem işle başlar hem yayılımla biter. Eleştirileri: güncellenmedi (2000), ekip/rol tanımı yok, çevik değil. Yine de araçtan bağımsız, işle başlıyor ve döngüsel olduğu için ayakta.</div>

<h2>5. Lift'e ilk bakış</h2><div class="box tip"><span class="label">Çok basit düşün</span>Lift'i 'rastgele seçime göre kaç kat daha iyi?' diye düşün. Örneğin genel ayrılma %12, seçtiğin grupta %36 ise lift=3.</div>
<div class="formula">lift = dilimdeki oran ÷ genel oran</div>
<p>Telekom: 100.000 abone, %12 ayrılıyor. Modelin en riskli %10'u (10.000 kişi) içinde 3.600 kişi ayrılıyor → %36 ÷ %12 = <b>lift 3</b>. Rastgele seçimin lift'i daima 1'dir. Kusursuz modelin tavanı burada 12.000/10.000 değil, 10.000/1.200 = <b>8,33</b>.</p>
<div class="box warn"><span class="label">Neden doğruluk değil?</span>"Kimse ayrılmaz" diyen model %88 doğruluk alır ama lift'i 1'dir. Doğruluk düşerken (%88 → %83) lift 1'den 3'e çıkabilir. Doğruluğu her zaman <b>karşılaştırma tabanıyla</b> okuyun.</div>
<p><b>Sepet versiyonu:</b> 100.000 fişte kek oranı %10, kahve alanlarda %15 → lift 1,5. Destek (yaygınlık) ve lift (ilişkinin gücü) <i>birlikte</i> istenir: {yılan yemi}→{ısıtıcı} lift 12 ama 60 fiş → uygulanamaz; {ekmek}→{su} destek yüksek, lift ≈ 1 → bilgi yok.</p>

<h2>6. Yeterince ararsanız mutlaka bulursunuz</h2><div class="box tip"><span class="label">Çok basit düşün</span>Aynı anda çok fazla hipotez denersen tesadüfen anlamlı sonuç bulabilirsin. 20 bağımsız testte en az bir sahte pozitif olasılığının yaklaşık %64 olduğunu hesaplamayı öğren.</div>
<div class="formula">P(en az bir sahte bulgu) = 1 − 0,95ⁿ</div>
<div class="table-wrap"><table>
<tr><th>Hipotez (n)</th><td>1</td><td>5</td><td>20</td><td>50</td><td>100</td></tr>
<tr><th>Olasılık</th><td>%5</td><td>%22,6</td><td>%64,2</td><td>%92,3</td><td>%99,4</td></tr>
</table></div>
<p>500 ürünlü markette ikili sayısı C(500,2) = 124.750. Önlemler: <b>(1)</b> hipotezi önce yaz, <b>(2)</b> çok deneyeceksen eşiği düşür — Bonferroni: %5 ÷ n, <b>(3)</b> bulguyu ikinci bir veride sına.</p>

<h2>7. Vaka: bira ve bebek bezi</h2><div class="box tip"><span class="label">Çok basit düşün</span>Birliktelik bulmak ile nedenini açıklamak farklıdır. Veride bira ve bebek bezinin beraber görülmesi, 'genç babalar yüzünden' demek için tek başına yeterli değildir.</div>
<p>1992, Blischok / NCR, Osco Drug, ~1,2 milyon sepet, ~25 mağaza. 17–19 arası bira–bebek bezi birlikteliği <b>gerçek</b>. "Genç babalar" açıklaması ve "raflar değiştirildi, satış patladı" kısmı <b>efsane</b>. Osco gerçekte ~5.000 yavaş satan ürünü raftan kaldırdı.</p>
<div class="box tip"><span class="label">Bir bulguyu duyduğunda üç soru</span>1) Kim ölçtü? 2) Hangi veride? 3) Sonrasında ne oldu? — en sık atlanan üçüncüsü.</div>

<h2>Tuzak köşesi</h2><div class="box tip"><span class="label">Çok basit düşün</span>Bu bölümde önce tanımı öğren, sonra verilen örneği kapatıp kendin çöz. Son olarak formülün neyi ölçtüğünü ve benzer kavramlardan farkını kendi cümlenle söyle.</div>
<div class="table-wrap"><table>
<tr><th>Bunu duyduğunuzda…</th><th>…eksik olan</th></tr>
<tr><td>"Veriyi bir analiz edelim"</td><td>Karar sorusu</td></tr>
<tr><td>"Model %94 doğruluk verdi"</td><td>Karşılaştırma tabanı</td></tr>
<tr><td>"Bu iki değişken çok ilişkili"</td><td>Kaç ilişkiye bakıldığı</td></tr>
<tr><td>"Grafikte desen çok net"</td><td>Yeni veri</td></tr>
</table></div>
`
},
{
  id: 2,
  title: "Veri, Öznitelikler ve Benzerlik",
  short: "Ölçek türleri, ikili öznitelikler, veri kalitesi, beş sayı özeti, uzaklık ölçüleri, normalizasyon, Jaccard–SMC.",
  principle: "Ölçtüğünü seçersin. Uzaklık ölçüsü ve ölçekleme modelden önce verilen ve modeli belirleyen kararlardır.",
  body: `
<h2>1. Veri kümesinin anatomisi</h2><div class="box tip"><span class="label">Çok basit düşün</span>Satır=kayıt, sütun=öznitelik, hedef=etiket. Bir sütunun rakamla tutulması onun sayısal ölçek olduğu anlamına gelmez; posta kodu buna güzel örnektir.</div>
<p>Satır = <b>kayıt</b> (gözlem, örnek, instance) · Sütun = <b>öznitelik</b> (değişken, feature) · Hedef sütun = <b>etiket</b> (label, target).</p>
<p><b>Veri sözlüğü</b> her sütun için 4 soru: Ne ölçüyor? Birimi ne? Ölçek türü ne? <b>Eksik değer nasıl işaretlenmiş?</b> (en çok atlanan — kan basıncı = 0 ölçülmemiştir).</p>

<h2>2. Dört ölçek türü</h2><div class="box tip"><span class="label">Çok basit düşün</span>Ölçeği seçmeden ortalama, oran veya uzaklık hesabına geçme. Nominal=isim, sıralı=sıra, aralık=eşit fark ama gerçek sıfır yok, oran=gerçek sıfır.</div>
<div class="table-wrap"><table>
<tr><th>Ölçek</th><th>Özellik</th><th>Örnek</th><th>Anlamlı işlem</th></tr>
<tr><td><b>Nominal</b></td><td>Yalnızca ad; sıra yok</td><td>il, kan grubu, posta kodu, öğrenci no</td><td>= ≠, mod, frekans</td></tr>
<tr><td><b>Sıralı</b></td><td>Sıra var, aralıklar eşit değil</td><td>eğitim, beden S/M/L, Likert, otel yıldızı</td><td>= ≠ &lt; &gt;, medyan, yüzdelik</td></tr>
<tr><td><b>Aralık</b></td><td>Eşit aralık, <b>keyfî sıfır</b></td><td>°C, takvim yılı, IQ, rakım</td><td>+ −, ortalama, std</td></tr>
<tr><td><b>Oran</b></td><td>Eşit aralık, <b>gerçek sıfır</b></td><td>yaş, gelir, ağırlık, Kelvin, adet</td><td>her işlem, "iki katı"</td></tr>
</table></div>
<div class="box key"><span class="label">Aralık mı oran mı?</span>"Sıfır gerçek bir yokluk mu?" 0 °C sıcaklık yokluğu değil → aralık. 0 TL gelir yok → oran. Celsius'ta 20/10 = 2 ama Fahrenheit'ta 68/50 = 1,36: değerlerin oranı anlamsız, <b>farkların oranı</b> anlamlı.</div>
<p><b>Merdiven tek yönlü:</b> aşağı inmek (yaş → yaş grubu → one-hot) bilgi atar ama uydurmaz; yukarı çıkmak (Ankara=1, İzmir=2, Bursa=3) bilgi <b>uydurur</b> ve hata sessizdir.</p>
<p>Sıralı veride ortalama tartışmalıdır: A grubu (2 üniversite + 3 ilkokul) ile B grubu (5 lise) karşılaştırması 1-2-3-4 kodlamada B'yi (2,2 &lt; 3,0), 1-2-3-10 kodlamada A'yı (4,6 &gt; 3,0) daha eğitimli gösterir. <b>Karar ağacı bundan etkilenmez</b> (yalnızca eşik sorar); kNN, k-ortalamalar, doğrusal modeller etkilenir.</p>
<div class="box warn">"26–40" yaş dilimi bir aralıktır ama <b>aralık ölçeği değildir</b> — sıralıdır (dilim genişlikleri eşit değil).</div>

<h2>3. Biçim, tür, yapı</h2><div class="box tip"><span class="label">Çok basit düşün</span>CSV/JSON/metin gibi biçim ile kayıt/sepet/zaman serisi/graf gibi veri türünü birbirine karıştırma. İkisi farklı sınıflandırmalardır.</div>
<p><b>Biçim:</b> yapılandırılmış (CSV, tablo) · yarı yapılandırılmış (JSON, XML, log) · yapılandırılmamış (metin, görüntü). <b>Veri kümesi türü:</b> kayıt · işlem (sepet) · sıralı (zaman serisi) · graf · metin. Bu iki eksen birbirinden bağımsızdır.</p>

<h3>İkili öznitelikler</h3>
<p><b>Simetrik:</b> iki cevap da eşit bilgi taşır (sigara içiyor mu?). <b>Asimetrik:</b> yalnızca "evet" bilgi taşır (200 bölümden hangisindesin? bu ürünü aldı mı?) → "ikisi de hayır" eşleşmesi sayılmaz.</p>

<h2>4. Veri kalitesinin altı boyutu</h2><div class="box tip"><span class="label">Çok basit düşün</span>Kaliteli veri sadece eksiksiz veri değildir. Doğruluk, bütünlük, tutarlılık, güncellik, inanılırlık ve yorumlanabilirlik birlikte düşünülür.</div>
<div class="table-wrap"><table>
<tr><th>Boyut</th><th>Belirti</th></tr>
<tr><td>Doğruluk</td><td>Yaş = 999, negatif fiyat</td></tr>
<tr><td>Bütünlük</td><td>Eksik / 0 ile maskelenmiş değerler</td></tr>
<tr><td>Tutarlılık</td><td>"İstanbul" / "istanbul" / "İST" / "34"</td></tr>
<tr><td>Güncellik</td><td>3 yıllık fiyat verisi</td></tr>
<tr><td>İnanılırlık</td><td>"O tabloya kimse güvenmiyor" — <i>kurumsal</i></td></tr>
<tr><td>Yorumlanabilirlik</td><td>Sütun adı <code>flag_2</code>, sözlük yok — <i>kurumsal</i></td></tr>
</table></div>

<h2>5. Özet istatistikler</h2><div class="box tip"><span class="label">Çok basit düşün</span>Önce dağılımı gör, sonra ölçü seç. Aykırı değer varsa ortalama yerine medyan daha güvenli olabilir. Q1, medyan, Q3 ve 1,5×ÇAA ile aykırı değer hesabını adım adım yap.</div>
<p><b>Ortalama</b> aykırı değerden çok etkilenir; <b>medyan</b> dayanıklıdır (robust); <b>mod</b> kategorik veride tek seçenektir.</p>
<details class="example" open><summary>Elle örnek: beş sayı özeti ve 1,5·ÇAA</summary><div class="inner">
<p>11 harcama: 100 · 120 · 140 · 150 · 160 · 180 · 200 · 220 · 260 · 300 · 1500</p>
<div class="formula">Min = 100   Q1 = 140   Medyan = 180   Q3 = 260   Maks = 1500
Aralık = 1500 − 100 = 1400
ÇAA (IQR) = Q3 − Q1 = 260 − 140 = 120
1,5 × ÇAA = 180
Alt sınır = 140 − 180 = −40     Üst sınır = 260 + 180 = 440
→ 1500 aykırı değer adayı</div>
<p>Q1 = alt yarının (100…160) ortası, Q3 = üst yarının (200…1500) ortası. Ortalama &gt; medyan ise dağılım <b>sağa çarpıktır</b> (gelir, satış).</p>
</div></details>
<p>Varyans <code>s² = Σ(x − x̄)² ÷ (n−1)</code> birimin karesidir (TL²); standart sapma birimin kendisidir.</p>

<h3>Anscombe dörtlüsü (1973)</h3>
<p>Dört veri kümesi: x ort. 9, y ort. 7,5, korelasyon 0,816, regresyon y = 3 + 0,5x — hepsi aynı. Ama I doğrusal, II eğri, III bir aykırı değer, IV tek nokta eğimi belirliyor. <b>Özet istatistik bir kısayoldur, kanıt değil — grafiğe bakın.</b></p>

<h2>6. Uzaklık ölçüleri</h2><div class="box tip"><span class="label">Çok basit düşün</span>Öklid=kuş uçuşu, Manhattan=sağa-sola/yukarı-aşağı toplam yol, Chebyshev=en büyük tek fark. Uzaklık kullanıyorsan ölçeklerin sonucu ezip ezmediğini kontrol et.</div>
<div class="table-wrap"><table>
<tr><th>Ölçü</th><th>Hesap</th><th>x=(2,5), y=(6,8)</th></tr>
<tr><td>Öklid (L2)</td><td>√Σ(farkların karesi)</td><td>√(16+9) = <b>5</b></td></tr>
<tr><td>Manhattan (L1)</td><td>Σ|fark|</td><td>4 + 3 = <b>7</b></td></tr>
<tr><td>Minkowski (Lp)</td><td>p=1 Manhattan, p=2 Öklid</td><td>—</td></tr>
<tr><td>Chebyshev (L∞)</td><td>en büyük tek fark</td><td>max(4,3) = <b>4</b></td></tr>
</table></div>
<p><b>Metrik olmanın 4 şartı:</b> d ≥ 0 · d(x,x) = 0 · simetri d(x,y) = d(y,x) · üçgen eşitsizliği d(x,z) ≤ d(x,y) + d(y,z).</p>

<details class="example"><summary>Elle örnek: A müşterisine en çok kim benziyor?</summary><div class="inner">
<p>Ham veride A–E uzaklığı en küçük (≈58,7) çünkü harcama sütununun aralığı (4000) diğerlerini eziyor. Min-maks normalizasyondan sonra sıralama tersine döner: <b>B en yakın (0,305), E en uzak (1,564)</b>. Veri değişmedi, yalnızca ölçek değişti.</p>
</div></details>
<div class="formula">Min-maks:  x' = (x − min) / (maks − min)        → 0–1
Z-skoru:   z  = (x − ortalama) / std          → ort. 0, std 1</div>
<p>Min-maks tek bir aykırı değerle diğer herkesi 0'a sıkıştırır; z-skoru daha dayanıklıdır. <b>Normalize etmemek de bir tercihtir</b>: "yalnızca en geniş aralıklı sütunu ölç" demektir.</p>

<h2>7. Sayısal olmayan veri</h2><div class="box tip"><span class="label">Çok basit düşün</span>İki vektörde neyin önemli olduğuna karar ver: ikisinin de 0 olması önemli değilse Jaccard, iki durum da eşit derecede önemliyse SMC. Metinde uzunluk etkisini azaltmak için kosinüs kullan.</div>
<p><b>Kosinüs benzerliği:</b> iki vektör arasındaki açının kosinüsü; <b>uzunluktan bağımsız</b> (100 kelimelik haber ile 5.000 kelimelik makale aynı konudaysa benzer). 1 aynı yön, 0 dik. Uzaklığa çevirmek için 1 − kosinüs.</p>
<div class="formula">         Y=1  Y=0
X=1       a    b
X=0       c    d

SMC     = (a + d) / (a + b + c + d)   → simetrik ikili
Jaccard = a / (a + b + c)             → asimetrik ikili
Hamming = b + c                        → farklı konum sayısı</div>
<p>Örnek: X=(1,0,0,1,0,0,0,0), Y=(1,0,0,0,0,0,1,0) → a=1, b=1, c=1, d=5 → SMC = 6/8 = <b>0,75</b>, Jaccard = 1/3 ≈ <b>0,33</b>.</p>
<p>Market örneği: Ali {ekmek, süt}, Veli {ekmek, peynir}, 10 ürün → SMC %80, Jaccard 1/3 = %33. 10.000 ürünlük katalogda SMC %99,98'e şişer, Jaccard %33 kalır.</p>
<p><b>Gower:</b> karışık tipli veride her özniteliği kendi türüne göre 0–1'de ölçüp ortalamasını alır.</p>
<div class="table-wrap"><table>
<tr><th>Veri türü</th><th>Ölçü</th></tr>
<tr><td>Sayısal</td><td>Öklid / Manhattan (normalize ederek!)</td></tr>
<tr><td>Metin, seyrek</td><td>Kosinüs</td></tr>
<tr><td>Asimetrik ikili</td><td>Jaccard</td></tr>
<tr><td>Simetrik ikili</td><td>SMC</td></tr>
<tr><td>Karışık</td><td>Gower</td></tr>
</table></div>

<h2>8. Korelasyon ≠ nedensellik</h2><div class="box tip"><span class="label">Çok basit düşün</span>Korelasyon birlikte değişimi anlatır, sebebi değil. A→B, B→A veya gizli C→A+B olabilir. Sınavda 'ilişki var' ile 'neden oldu' ifadelerini ayır.</div>
<p>Korelasyon iki <b>sütunu</b> karşılaştırır (uzaklık iki satırı); −1…+1. 0 = doğrusal ilişki yok (başka ilişki olabilir). Üç ihtimal: A→B, B→A, ya da <b>gizli değişken</b> C ikisine birden sebep (dondurma ↔ boğulma, sebep sıcak hava).</p>

<h2>9. Hangi grafik?</h2><div class="box tip"><span class="label">Çok basit düşün</span>Tek sayısal dağılım→histogram, aykırı→kutu, iki sayısal ilişki→saçılım, zaman→çizgi, kategori karşılaştırma→çubuk.</div>
<p>Histogram: tek sayısalın dağılımı · Kutu: aykırı değer · Saçılım: iki sayısal ilişki · Çubuk: kategorik karşılaştırma · Isı haritası: yoğun kombinasyon · Çizgi: zaman · Huni: aşamalı kayıp. Pasta yerine çubuk tercih edilir.</p>

<h2>Vaka: Google Grip Eğilimleri</h2><div class="box tip"><span class="label">Çok basit düşün</span>Bu bölümde önce tanımı öğren, sonra verilen örneği kapatıp kendin çöz. Son olarak formülün neyi ölçtüğünü ve benzer kavramlardan farkını kendi cümlenle söyle.</div>
<p>GFT gribi değil <b>arama davranışını</b> ölçtü. Korku aramaları, kış terimleri ("kış dedektörü") ve mevsim dışı H1N1'i kaçırması → 2013'te CDC'nin iki katından fazla tahmin. Ders: <b>mekanizmasını bilmediğin korelasyon, koşullar değişince kırılır.</b></p>

<h2>Tuzak köşesi</h2><div class="box tip"><span class="label">Çok basit düşün</span>Bu bölümde önce tanımı öğren, sonra verilen örneği kapatıp kendin çöz. Son olarak formülün neyi ölçtüğünü ve benzer kavramlardan farkını kendi cümlenle söyle.</div>
<div class="table-wrap"><table>
<tr><th>Gördüğünüz</th><th>Eksik olan</th></tr>
<tr><td>Posta kodu ortalaması</td><td>Ölçek türü — nominal veride ortalama yok, mod/frekans kullan</td></tr>
<tr><td>Likert 1–5 ortalaması</td><td>Sıralı ölçekte aralıklar eşit değil</td></tr>
<tr><td>"İki kat sıcak"</td><td>Aralık ölçeğinde oran yok</td></tr>
<tr><td>Normalize edilmemiş uzaklık</td><td>En geniş aralıklı sütun sonucu tek başına belirler</td></tr>
</table></div>
`
},
{
  id: 3,
  title: "Veri Ön İşleme",
  short: "MCAR/MAR/MNAR, doldurma–silme, aykırı değer kuralları, ölçekleme, kodlama, ayrıklaştırma, Lasso, PCA, veri sızıntısı.",
  principle: "GIGO — Çöp girerse çöp çıkar. Modelin tavanını veri belirler, algoritma değil.",
  body: `
<h2>1. Ön işlemenin dört işi</h2><div class="box tip"><span class="label">Çok basit düşün</span>Ön işleme dört iş yapar: temizle, bütünleştir, dönüştür, indirgeme yap. Modelden önce verinin gerçekten kullanılabilir olup olmadığını kontrol et.</div>
<div class="table-wrap"><table>
<tr><th>İş</th><th>Soru</th><th>Ne yapılır</th></tr>
<tr><td>Temizleme</td><td>Güvenilir mi?</td><td>Eksik, gürültü, aykırı, tutarsızlık</td></tr>
<tr><td>Entegrasyon</td><td>Parçalar tutuyor mu?</td><td>Şema eşleme, varlık çözümleme, mükerrer, artıklık</td></tr>
<tr><td>Dönüştürme</td><td>Algoritmanın anlayacağı biçimde mi?</td><td>Ölçekleme, log, kodlama, ayrıklaştırma</td></tr>
<tr><td>İndirgeme</td><td>Bu kadarı gerekli mi?</td><td>Örnekleme, öznitelik seçimi/çıkarımı</td></tr>
</table></div>

<h2>2. Eksik veri</h2><div class="box tip"><span class="label">Çok basit düşün</span>Önce eksikliğin nedenini düşün: MCAR=tesadüfi, MAR=gördüğün başka değişkene bağlı, MNAR=eksik değerin kendisine bağlı. Sonra silme/doldurma kararını ver.</div>
<p>En tehlikeli eksik değer eksik gibi görünmeyendir: <b>0</b> (kan basıncı), <b>nöbetçi değer</b> (−1, 999), metin ("bilinmiyor"). İlk soru: <i>bu değer fiziksel olarak mümkün mü?</i> Değilse NaN yap.</p>
<div class="table-wrap"><table>
<tr><th>Mekanizma</th><th>Eksiklik neye bağlı?</th><th>Senaryo</th><th>Silmek?</th></tr>
<tr><td><b>MCAR</b> tamamen rastgele</td><td>Hiçbir şeye</td><td>Islanan anket kutusu</td><td>✓ güvenli</td></tr>
<tr><td><b>MAR</b> koşullu rastgele</td><td><b>Gördüğün</b> başka sütuna</td><td>Gençler telefonla doldurdu, gelir isteğe bağlı</td><td>⚠ yanlı ama düzeltilebilir</td></tr>
<tr><td><b>MNAR</b> rastgele değil</td><td><b>Eksik değerin kendisine</b></td><td>Yüksek gelirliler geliri söylemiyor</td><td>✗ veri yetmez</td></tr>
</table></div>
<div class="box key"><span class="label">Eleme testi</span>Eksik ve dolu grupların yaş ortalaması farklıysa → <b>MCAR değil</b> (güçlü sonuç). Aynıysa hiçbir şey kanıtlanmaz. Test MAR ile MNAR'ı ayıramaz. Emin değilsen MAR varsay ve yaz.</div>
<p><b>Silmenin sinsi yüzü:</b> 10 sütunda bağımsız %5 eksik → 0,95¹⁰ ≈ 0,60 → satırların <b>%40'ı</b> gider.</p>
<div class="table-wrap"><table>
<tr><th>Doldurma</th><th>Ne zaman</th></tr>
<tr><td>Ortalama</td><td>Sayısal, simetrik</td></tr>
<tr><td>Medyan</td><td>Çarpık veya aykırı değer var</td></tr>
<tr><td>Mod</td><td>Kategorik</td></tr>
<tr><td>Sınıf içi ortalama / kNN / regresyon</td><td>MAR — diğer sütunlardan yararlanır</td></tr>
</table></div>
<p><b>Doldurmanın bedeli:</b> ortalamayla doldurunca ortalama sabit kalır, <b>standart sapma düşer</b> (%20 eksikte 11,38 → 9,43, yayılımın %17'si kaybolur). Korelasyonlar zayıflar.</p>
<p><b>Eksikliği bilgi olarak kullan:</b> kategorikte "Bilinmiyor" kategorisi; sayısalda doldur + <code>insulin_eksik</code> 0/1 <b>gösterge sütunu</b>. Doldurma farkı siler, gösterge geri getirir.</p>
<div class="table-wrap"><table>
<tr><th>Eksik oranı</th><th>Varsayılan</th></tr>
<tr><td>&lt; %5</td><td>Sil (MCAR ise)</td></tr>
<tr><td>%5 – %30</td><td>Doldur</td></tr>
<tr><td>&gt; %50–60 (tek sütun)</td><td>Sütunu sil</td></tr>
</table></div>
<div class="box warn">Mekanizma orandan daha belirleyicidir: oran küçük olsa bile <b>MCAR değilse silme</b>. Karar sırası: mümkün mü? → neden eksik? → bilgi taşıyor mu? → oran+mekanizma+satır sayısı → ne yaptığını yaz.</div>

<h2>3. Gürültü ve aykırı değer</h2><div class="box tip"><span class="label">Çok basit düşün</span>Aykırı değer otomatik olarak silinecek hata değildir. Dolandırıcılıkta aykırı kayıt tam aradığımız şey olabilir; yanlış yazılmış fiyat ise temizlenmelidir.</div>
<p><b>Gürültü</b> = ölçümdeki rastgele hata, yumuşatılır. <b>Aykırı değer</b> = uzakta duran gerçek gözlem, önce incelenir. Ayırt edici soru: tekrar ölçsen yine çıkar mı?</p>
<details class="example"><summary>Binleme: 4 · 8 · 15 · 21 · 21 · 24 · 25 · 28 · 34 (3'erli)</summary><div class="inner">
<div class="formula">Ortalamayla: 9,9,9 · 22,22,22 · 29,29,29
Medyanla:    8,8,8 · 21,21,21 · 28,28,28
Sınırlarla:  4,4,15 · 21,21,24 · 25,25,34   (8 → |8−4|=4 < |8−15|=7 → 4)</div>
</div></details>
<div class="table-wrap"><table>
<tr><th></th><th>1,5 × ÇAA</th><th>z-skoru (|z| &gt; 3)</th></tr>
<tr><td>Dayanır</td><td>Çeyreklere (sıralama)</td><td>Ortalama ve std</td></tr>
<tr><td>Özellik</td><td><b>Dayanıklı</b></td><td>Aykırı değer std'yi şişirip kendi z'sini düşürür</td></tr>
<tr><td>11 harcamada 1500</td><td>Üst sınır 440 → işaretlenir ✓</td><td>z = (1500 − 302,7)/401,6 = 2,98 → işaretlenmez ✗</td></tr>
</table></div>
<p><b>n mi n−1 mi?</b> n: popülasyon (σ); n−1: örneklem (s, Bessel düzeltmesi). numpy.std → n; pandas .std → n−1; sklearn StandardScaler → n. 1500 için n ile z = 3,13 (işaretlenir). Ölçeklemede fark etmez, eşikli kuralda fark eder.</p>
<p><b>Aykırı değer bazen cevabın kendisidir:</b> dolandırıcılık, ağ saldırısı, arıza tespiti, en değerli müşteri → sakla. Yanlış girilmiş ev fiyatı → temizle.</p>

<h2>4. Entegrasyon</h2><div class="box tip"><span class="label">Çok basit düşün</span>Farklı kaynaklardaki aynı kişiyi, birimi ve sütun adını aynı dile çevir. 'Ahmet Yılmaz' ve 'A. Yılmaz' aynı kişiyse bunu çözmeden model kurma.</div>
<p>Şema eşleme (musteri_id ↔ cust_no, kg ↔ lb) · varlık çözümleme ("Ahmet Yılmaz" / "A. Yılmaz") · mükerrer kayıt (müşteriyi iki kez öğretir). <b>Artıklık:</b> doğum tarihi–yaş, fiyat×adet=toplam; |r| ≈ 0,95 → neredeyse aynı bilgi. Atmadan önce saçılıma bak.</p>

<h2>5. Dönüştürme</h2><div class="box tip"><span class="label">Çok basit düşün</span>Ölçekleme sayıları karşılaştırılabilir hale getirir; log dönüşümü dağılımın şeklini değiştirir; one-hot nominal kategoriyi sütunlara çevirir. Hangi dönüşümün neyi değiştirdiğini ayır.</div>
<details class="example" open><summary>Dört ölçekleme, aynı beş sayı: 1200 · 2100 · 2600 · 3400 · 5200</summary><div class="inner">
<p>ortalama 2900 · s 1513,27 · medyan 2600 · Q1 2100 · Q3 3400 · ÇAA 1300</p>
<div class="table-wrap"><table>
<tr><th>Yöntem</th><th>Formül</th><th>2100 için</th></tr>
<tr><td>Min-maks (0–1)</td><td>(x − min)/(maks − min)</td><td>900/4000 = 0,225</td></tr>
<tr><td>Min-maks (−1…1)</td><td>2·(min-maks) − 1</td><td>−0,550</td></tr>
<tr><td>z-skoru</td><td>(x − ort)/s</td><td>−800/1513,27 = −0,529</td></tr>
<tr><td>Robust</td><td>(x − medyan)/ÇAA</td><td>−500/1300 = −0,385</td></tr>
<tr><td>Ondalık</td><td>x / 10ʲ (j=4)</td><td>0,210</td></tr>
</table></div>
<p>Ondalıkta j: maks değeri 1'in altına indiren en küçük üs (5200 → 4 basamak → j = 4).</p>
</div></details>
<div class="table-wrap"><table>
<tr><th>Ölçeklemeye duyarlı</th><th>Duyarsız</th></tr>
<tr><td>kNN, k-ortalamalar, hiyerarşik kümeleme, SVM, YSA, PCA, Lasso</td><td>Karar ağacı, rastgele orman, gradyan artırma, Naive Bayes, birliktelik kuralları</td></tr>
</table></div>
<div class="box key"><span class="label">Tek soruluk test</span>Algoritma uzaklık ya da çarpım kullanıyor mu? Evet → ölçekle. Yalnızca sıralamaya bakıyorsa gerekmez.</div>
<p><b>Log dönüşümü</b> dağılımın <i>şeklini</i> değiştirir (ölçekleme yalnızca ekseni). Çarpımsal farkı toplamsala çevirir: oranı aynı olan iki çiftin log farkı aynıdır (×2 → 0,301). Ne zaman: sağa çarpık (ort/medyan ≫ 1), mertebe farkı (maks/min çok büyük), çarpımsal ilişki. Sıfır içeren veride <code>log(x+1)</code> (yalnız x &gt; −1 için tanımlıdır; negatiflerin tümünü çözmez). log₁₀2 = 0,301 · log₁₀3 = 0,477 · log₁₀1,5 = 0,176.</p>
<div class="table-wrap"><table>
<tr><th>Kodlama</th><th>Ne zaman</th></tr>
<tr><td>One-hot</td><td>Nominal, az kategori (şehir, renk)</td></tr>
<tr><td>Etiket (1,2,3…)</td><td>Yalnızca sıralı (eğitim, beden)</td></tr>
<tr><td>Hedef kodlama</td><td>Nominal, çok kategori (ilçe) — <b>sızıntıya en açık</b>, yalnızca eğitimden hesapla</td></tr>
</table></div>
<p><b>Boyut patlaması:</b> 970 ilçe → 970 sütun. Çözüm: nadirleri "Diğer", kavram hiyerarşisi (ilçe → il → bölge), hedef kodlama, ağaç modeli. <b>Boyutun laneti:</b> sütun arttıkça "en yakın komşu" anlamını yitirir.</p>
<details class="example"><summary>Ayrıklaştırma: 21 23 24 25 28 31 35 38 42 55 61 78</summary><div class="inner">
<div class="formula">Eşit genişlik (19): 21–40 (8) · 40–59 (2) · 59–78 (2)   → dengesiz kutular
Eşit frekans (4'er): 21–25 · 28–38 · 42–78              → genişlikler çok farklı
Denetimli (entropi): 21–30 · 30–78                      → hedefe bakar, sızıntı adayı</div>
</div></details>
<p><b>Kavram hiyerarşisi:</b> Kadıköy → İstanbul → Marmara → Türkiye. Yukarı çıktıkça gürültü azalır, ayrıntı kaybolur (Hafta 4'te roll-up / drill-down).</p>

<h2>6. İndirgeme</h2><div class="box tip"><span class="label">Çok basit düşün</span>Daha az veri her zaman daha kötü değildir. Gereksiz satırları veya sütunları azaltırken nadir sınıfı ve önemli bilgiyi kaybetmemeye dikkat et.</div>
<p><b>Satır:</b> basit rastgele · <b>tabakalı</b> (nadir sınıf oranını korur) · sistematik.</p>
<p><b>Seçim ↔ çıkarım:</b> seçimde sonuç sütununun adını söyleyebilirsin (yaş, gelir); çıkarımda söyleyemezsin (bileşen-1).</p>
<div class="table-wrap"><table>
<tr><th>Aile</th><th>Nasıl</th><th>Örnek</th><th>Artı / eksi</th></tr>
<tr><td>Filtre</td><td>Model kurmadan istatistiğe bakar</td><td>korelasyon, varyans, ki-kare</td><td>Hızlı; birlikte çalışan ikilileri kaçırır</td></tr>
<tr><td>Sarmalayıcı</td><td>Altküme dener, model kurar</td><td>ileri seçim, geri eleme, GA</td><td>Etkileşimi görür; 20 sütun = 2²⁰ altküme, yavaş</td></tr>
<tr><td>Gömülü</td><td>Eğitimin parçası</td><td>Lasso, ağaç önem skoru</td><td>Denge; modele özgü</td></tr>
</table></div>
<div class="formula">Lasso: min Σ(y − ŷ)² + λ · Σ|β|     → bazı β tam 0 olur (seçim yapar)
Ridge: min Σ(y − ŷ)² + λ · Σβ²      → küçültür ama sıfırlamaz</div>
<details class="example"><summary>λ = 4 ile elle Lasso (oda sayısı → kira)</summary><div class="inner">
<p>Veri: 1→10, 2→14, 3→18. <b>kira = 6 + 4·oda</b>: hata 0, vergi 4×4 = 16 → puan 16. <b>kira = 8 + 3·oda</b>: hata 1²+0²+1² = 2, vergi 4×3 = 12 → puan 14. Lasso ikinciyi seçer. λ çok büyürse (16) β = 0, sütun düşer.</p>
</div></details>
<p>Lasso ölçeklemeye duyarlıdır, ilişkili sütunlarda kararsızdır (Elastic Net daha iyi). λ çapraz doğrulamayla seçilir.</p>
<p><b>Genetik algoritma:</b> birey = 0/1 sütun dizisi; döngü: başlangıç → değerlendir → seç → çaprazla → mutasyon → tekrarla. Mutasyon kapalı kapıları açar. Uygunluk = başarı − ceza × sütun sayısı.</p>
<p><b>PCA:</b> verinin en çok yayıldığı yönü 1. eksen yapar. Ölçeklemeye duyarlı, bileşenler yorumlanamaz, <b>hedefe bakmaz</b>.</p>

<h2>7. 🔴 Veri sızıntısı</h2><div class="box tip"><span class="label">Çok basit düşün</span>Altın kural: model eğitim sırasında gerçek hayatta sahip olmayacağı bilgiyi görmemeli. Önce böl, sonra sadece eğitimden öğren, aynı dönüşümü teste uygula.</div>
<div class="box key"><span class="label">Tanım</span>Modelin eğitimde, gerçek hayatta elinde olmayacak bir bilgiye erişmesi. Test skoru muhteşem, saha çöker, hata mesajı yok.</div>
<ol>
<li><b>Bölmeden önce ön işleme</b> (ölçekleyici/doldurma tüm veriye fit edilmiş)</li>
<li><b>Hedeften türeyen öznitelik</b> (terk tahmininde <code>iptal_tarihi</code>)</li>
<li><b>Zaman serisinde rastgele bölme</b> (eğitime gelecek düşer)</li>
</ol>
<div class="formula">Doğru sıra: 1) böl  2) eğitimden ÖĞREN (fit)  3) eğitime UYGULA  4) aynı değerleri teste UYGULA  5) eğit  6) test et</div>
<p>Bölmeden önce güvenli olanlar: birim çevirme, yazım düzeltme, mükerrer silme, imkânsız değeri NaN yapma (satır bazlı, istatistik öğrenmeyen işlemler).</p>
<p><b>Kanıt:</b> 100 kayıt × 5000 rastgele öznitelik, yazı-tura hedef. Seçim tüm veride yapılırsa çapraz doğrulama <b>%81</b>; seçim Pipeline içinde her katlamada yapılırsa <b>%52</b>. Hedefe bakan işlem (seçici, hedef kodlama, denetimli ayrıklaştırma) çok daha tehlikelidir.</p>

<h2>Pima diyabet örneği</h2><div class="box tip"><span class="label">Çok basit düşün</span>Gerçek veri örneğinde önce '0 gerçekten 0 mı?' diye sor. Fiziksel olarak mümkün olmayan sıfırlar eksik veri olabilir ve her sütun için aynı doldurma yöntemi doğru olmayabilir.</div>
<p>768 kayıt. Sıfırlar: gebelik %14,5 (mümkün ✓) · glikoz %0,7 · kan basıncı %4,6 · deri kalınlığı %29,6 · insülin %48,7 (hepsi imkânsız ✗). Glikoz → sil; deri → doldur; insülin → <b>doldur + gösterge</b>.</p>

<h2>Vaka: Zillow Offers</h2><div class="box tip"><span class="label">Çok basit düşün</span>Model geçmiş dönemde iyi çalışsa bile dünya değişirse bozulabilir. Eğitim verisinin gerçek hayattaki koşulları temsil edip etmediğini kontrol et.</div>
<p>2018'de yaygınlaşan iBuying modeli: Zillow, Zestimate fiyat tahminine dayanarak evi alıp onarıp yeniden satıyordu. 2020–2021'de pandemiyle piyasa, modelin eğitildiği döneme benzemez hâle geldi ve tahminler sahada tutmadı; program kapatıldı. Ders: modelin tavanını verinin temsil ettiği koşullar belirler.</p>
`
},
{
  id: 4,
  title: "Veri Ambarları ve OLAP",
  short: "OLTP ↔ OLAP, Inmon'un dört sıfatı, ETL/ELT, SCD tipleri, olgu–boyut, tane, yıldız/kar tanesi, küp işlemleri, 2ⁿ.",
  principle: "Aynı veri, farklı soru, farklı şema. Şemayı veri değil, soracağınız soru belirler.",
  body: `
<h2>1. Neden ayrı depo?</h2><div class="box tip"><span class="label">Çok basit düşün</span>OLTP günlük işlemleri hızlı yapmak içindir; veri ambarı geçmişi analiz etmek içindir. Aynı sistemi iki amaç için zorlamak performans ve tarihsel veri problemi yaratır.</div>
<p>Rapor işlemsel veritabanında çalışınca üç sorun: <b>yavaş</b> (çok join), <b>engelliyor</b> (rezervasyon alınamıyor), <b>eksik</b> (silinmiş otelin geçmişi yok — en sinsisi, çünkü yanlışlıktır). Çözüm: ayrı kopya + analize uygun şema + geçmiş silinmez = <b>veri ambarı</b>.</p>

<h2>2. OLTP ↔ OLAP</h2><div class="box tip"><span class="label">Çok basit düşün</span>OLTP=işlemi yap, OLAP=veriyi analiz et. INSERT/UPDATE/DELETE ve kısa sorgular OLTP; uzun SELECT'ler, geçmiş ve toplulaştırma OLAP.</div>
<div class="table-wrap"><table>
<tr><th>Ölçüt</th><th>OLTP (işlemsel)</th><th>OLAP (analitik)</th></tr>
<tr><td>Amaç</td><td>Günlük işi yürütmek</td><td>Karara yardım</td></tr>
<tr><td>Sorgu</td><td>Çok, kısa, 1–2 kayıt</td><td>Az, uzun, milyonlarca kayıt</td></tr>
<tr><td>İşlem</td><td>INSERT · UPDATE · DELETE</td><td>Neredeyse yalnızca SELECT</td></tr>
<tr><td>Kayıt</td><td>Güncel; eskiler silinir</td><td>Yılların tamamı birikir</td></tr>
<tr><td>Güncellik</td><td>Anlık</td><td>Dönemsel (gece yükleme)</td></tr>
<tr><td>Şema</td><td>Normalize (3NF)</td><td>Denormalize (yıldız)</td></tr>
<tr><td>Kullanıcı</td><td>Binlerce (kasiyer, müşteri)</td><td>Onlarca (analist, yönetici)</td></tr>
<tr><td>Başarı</td><td>Saniyede işlem sayısı</td><td>Sorunun yanıt süresi</td></tr>
</table></div>
<p>"Beş yıl önce kapanan şubenin cirosu" → <b>yalnızca OLAP</b>; OLTP'de veri artık yok.</p>

<h2>3. Inmon'un dört sıfatı</h2><div class="box tip"><span class="label">Çok basit düşün</span>Veri ambarının dört kelimesini mantığıyla öğren: konu odaklı, bütünleşik, zamana bağlı, değişmez.</div>
<div class="table-wrap"><table>
<tr><th>Sıfat</th><th>Anlamı</th></tr>
<tr><td>Konu odaklı</td><td>Konulara göre (müşteri, satış), iş adımlarına göre değil</td></tr>
<tr><td><b>Bütünleşik</b></td><td>Birçok sistemin verisi tek dile çevrilir (E/K ↔ M/F, TL ↔ EUR, 8412 ↔ MUS-8412). En zoru; teknik değil <i>anlaşma</i> işi</td></tr>
<tr><td>Zamana bağlı</td><td>Her kayıt zaman damgalı; eski değer saklanır. ≠ gerçek zamanlı</td></tr>
<tr><td>Değişmez</td><td>Giren veri normalde değiştirilmez/silinmez; yeni bilgi yeni satır (istisna: SCD Tip 1 düzeltmesi, yasal silme/anonimleştirme)</td></tr>
</table></div>

<h2>4. Mimari ve ETL</h2><div class="box tip"><span class="label">Çok basit düşün</span>Kaynak sistemden gelen veriyi staging'de hazırlayıp ambara taşı. ETL'de dönüştürme önce, ELT'de ambarın içinde yapılır.</div>
<div class="formula">Kaynak (OLTP) → Hazırlama alanı (staging) → Veri ambarı → Veri pazarları → Sunum (Power BI)</div>
<p><b>Staging</b> neden var: kaynak hemen serbest kalır; ambar yarım veriyle kirlenmez; dağınık kaynaklar toplanır. <b>Veri pazarı</b> (data mart): bir birimin kendi alt kümesi. Ambar = tek doğruluk kaynağı.</p>
<div class="table-wrap"><table>
<tr><th></th><th>ETL</th><th>ELT</th></tr>
<tr><td>Ham veri</td><td>Ambara yalnızca dönüştürülmüş hâli girer</td><td>Ham hâli de ambarda saklanır</td></tr>
<tr><td>Kural değişirse</td><td>Kaynaktan yeniden çekilir</td><td>Ambardaki ham veriden yeniden üretilir</td></tr>
<tr><td>Not</td><td>KVKK ham veriyi saklamayı yasaklıyorsa zorunlu olabilir</td><td>Bulut depolama ucuzlayınca yaygınlaştı</td></tr>
</table></div>
<p>ETL'deki <b>T</b> adımı Hafta 3'ün (ön işleme) ta kendisidir.</p>

<h2>5. Yavaş değişen boyutlar (SCD)</h2><div class="box tip"><span class="label">Çok basit düşün</span>Müşteri İstanbul'dan Ankara'ya taşındığında geçmiş satışların Ankara'ya dönüşmesini istemiyorsan Tip 2 gerekir. Yazım hatası gibi hiç doğru olmayan eski değeri düzeltmek için Tip 1 kullan.</div>
<p>Müşteri 8412: 2019'dan beri İstanbul, 1 Haziran 2026'da Ankara'ya taşındı. 2024'te 40.000 TL harcadı.</p>
<div class="table-wrap"><table>
<tr><th>Tip</th><th>Ne yapılır</th><th>Sonuç</th></tr>
<tr><td><b>Tip 1</b> üzerine yaz</td><td>Eski şehir silinir</td><td>2024 harcaması Ankara'ya kayar; geçmiş rapor sessizce değişir</td></tr>
<tr><td><b>Tip 2</b> yeni satır</td><td>Yeni vekil anahtar + geçerlilik tarihleri</td><td>2024 İstanbul'a, 2026 Ankara'ya — ikisi de doğru (varsayılan)</td></tr>
<tr><td><b>Tip 3</b> ek sütun</td><td>"Önceki şehir" sütunu</td><td>Yalnızca tek adım hafıza</td></tr>
</table></div>
<div class="box key"><span class="label">Ayırt edici soru</span>"Eski değer o zaman doğru muydu?" Doğruysa → <b>Tip 2</b> (taşınma, kategori yeniden tanımı). Hiç doğru değildiyse → <b>Tip 1</b> (yazım hatası düzeltmesi).</div>

<h2>6. Boyutsal modelleme (Kimball)</h2><div class="box tip"><span class="label">Çok basit düşün</span>Olgu='ne oldu ve ne kadar?', boyut='kim/ne/nerede/ne zaman?'. Önce grain'i, yani bir satırın tam olarak neyi temsil ettiğini yaz.</div>
<div class="table-wrap"><table>
<tr><th></th><th>Olgu (fact)</th><th>Boyut (dimension)</th></tr>
<tr><td>Kaydeder</td><td>Olayı (satış, rezervasyon)</td><td>Bağlamı (kim, ne, nerede, ne zaman)</td></tr>
<tr><td>Satır / sütun</td><td>Çok satır, az sütun</td><td>Az satır, çok sütun</td></tr>
<tr><td>Ölçü</td><td>Var (tutar, adet)</td><td>Yok</td></tr>
</table></div>
<p>Ayırt edici soru: <b>"Bunu toplayabilir miyim?"</b> Tutar → olgu; oda tipi, posta kodu → boyut.</p>
<p><b>Tane (grain):</b> olguda bir satırın anlamı. Şemadan önce "Olgu tablosunda bir satır = …" yazılır. Rezervasyon tanesi (11.830 satır) · gece tanesi (44.524) · otel-gün tanesi (16.440). <b>Tuzak:</b> taneleri karıştırmak → SUM(tutar) iki kat çıkar, hata vermez.</p>
<h3>Şemalar</h3>
<div class="table-wrap"><table>
<tr><th></th><th>Yıldız</th><th>Kar tanesi</th></tr>
<tr><td>Boyut</td><td>Tek tablo (denormalize)</td><td>Otel → Şehir → Bölge (normalize)</td></tr>
<tr><td>Birleştirme</td><td>1</td><td>3</td></tr>
<tr><td>Ne zaman</td><td>Normalde</td><td>Boyut çok büyük ya da hiyerarşi sık değişiyorsa</td></tr>
</table></div>
<p><b>Takımyıldız (galaxy):</b> birden çok olgu aynı boyutları paylaşır. Paylaşılan boyut = <b>uyumlu boyut</b> (Inmon'un "bütünleşik" sıfatının teknik karşılığı).</p>
<p><b>Vekil anahtar</b> (surrogate, musteri_sk): ambarın sıra numarası, kişinin bir dönemdeki hâli. <b>İş anahtarı</b> (natural, musteri_id): değişmez. Olgu <b>sk'ya</b> bağlanır.</p>
<p><b>Neden bilerek denormalize?</b> 2 milyon satırda yıldız 0,071 sn, kar tanesi 0,152 sn; normalizasyon yalnızca 69 KB kazandırdı. Güncelleme anomalisi ambarda sorun değil: ambar güncellenmez, boyuta yalnızca ETL yazar, değişiklik yeni satırdır.</p>

<h2>7. Veri küpü ve OLAP işlemleri</h2><div class="box tip"><span class="label">Çok basit düşün</span>Roll-up ayrıntıyı azaltır, drill-down ayrıntıyı artırır, slice tek boyut seçer, dice birden fazla boyut seçer, pivot eksenleri döndürür.</div>
<details class="example" open><summary>12 hücrelik küp: 3 ay × 2 şehir × 2 oda tipi</summary><div class="inner">
<div class="table-wrap"><table>
<tr><th>Ay</th><th>İst Std</th><th>İst Suit</th><th>İzm Std</th><th>İzm Suit</th><th>Toplam</th></tr>
<tr><td>Ocak</td><td>120</td><td>30</td><td>60</td><td>10</td><td>220</td></tr>
<tr><td>Şubat</td><td>110</td><td>35</td><td>55</td><td>12</td><td>212</td></tr>
<tr><td>Mart</td><td>150</td><td>45</td><td>90</td><td>20</td><td>305</td></tr>
<tr><td>Toplam</td><td>380</td><td>110</td><td>205</td><td>42</td><td>737</td></tr>
</table></div>
</div></details>
<div class="table-wrap"><table>
<tr><th>İşlem</th><th>Ne yapar</th><th>Örnek</th></tr>
<tr><td>⬆️ Roll-up</td><td>Ayrıntıyı topla (boyutu kaldır ya da hiyerarşide çık)</td><td>Ay kalkar → İst 490, İzm 247</td></tr>
<tr><td>⬇️ Drill-down</td><td>Ayrıntıyı aç</td><td>İst 490 → Ocak 150 · Şubat 145 · Mart 195</td></tr>
<tr><td>🔪 Slice</td><td><b>Tek</b> boyutta seçim</td><td>Yalnızca Suit → toplam 152</td></tr>
<tr><td>🎲 Dice</td><td><b>İki veya daha fazla</b> boyutta seçim</td><td>Şubat–Mart × İstanbul → 340</td></tr>
<tr><td>↻ Pivot</td><td>Eksenleri döndür, sayı değişmez</td><td>Excel özet tablosu</td></tr>
<tr><td>↔ Drill-across</td><td>Aynı boyutları paylaşan başka olguya geç</td><td>Rezervasyon → ekstra hizmet geliri</td></tr>
</table></div>
<p>Beş işlemin hiçbiri yeni veri üretmez. Analistin işi: roll-up'ta anormalliği gör, drill-down'da sebebini ara.</p>
<h3>2ⁿ problemi</h3>
<p>Her boyut ya ayrıntıda kalır ya toplanır → n boyut için <b>2ⁿ küboid</b> (3 boyut → 8). Hiyerarşiyle: zaman 5 × ürün 4 × mağaza 4 × müşteri 3 = <b>240 küboid</b>.</p>
<div class="table-wrap"><table>
<tr><th></th><th>Nerede?</th><th>Güçlü</th><th>Zayıf</th></tr>
<tr><td>ROLAP</td><td>İlişkisel tablo; anlık SQL</td><td>Her ölçek, güncel</td><td>Yavaş — hiçbir küboidi önceden hesaplamaz</td></tr>
<tr><td>MOLAP</td><td>Özel küp dosyası; hepsi önceden</td><td>Çok hızlı</td><td>Çok yer, veri bayatlar</td></tr>
<tr><td>HOLAP</td><td>Sık özetler küpte, ayrıntı tabloda</td><td>Denge, en yaygın</td><td>Hangilerini saklayacağına karar ver</td></tr>
</table></div>
<p>Power BI <b>Import</b> ≈ MOLAP, <b>DirectQuery</b> ≈ ROLAP.</p>

<h2>8. Ambar · göl · göl-evi</h2><div class="box tip"><span class="label">Çok basit düşün</span>Ambar temiz ve şeması belli veriyi, göl ham veriyi saklar. Göl-evi ikisini birleştirmeye çalışır; katalog ve sahiplik yoksa göl veri bataklığına dönüşebilir.</div>
<div class="table-wrap"><table>
<tr><th></th><th>Şema ne zaman?</th><th>Ne saklar?</th></tr>
<tr><td>Ambar</td><td>Yazılırken (schema-on-write)</td><td>Temizlenmiş tablolar</td></tr>
<tr><td>Göl</td><td>Okunurken (schema-on-read)</td><td>Her şey, ham</td></tr>
<tr><td>Göl-evi</td><td>Ham veri + tablo katmanı</td><td>İkisi birden</td></tr>
</table></div>
<p>Kataloglama ve sahiplik yoksa göl <b>veri bataklığına</b> döner.</p>
<div class="box tip"><span class="label">Neden model öncesi ambar?</span>Herkes aynı tabloya bakar · tarihsel derinlik · SCD Tip 2 zaman damgaları sızıntıya karşı savunma · roll-up/drill-down ile keşif.</div>

<h2>Vaka: Walmart, kasırga ve Pop-Tarts</h2><div class="box tip"><span class="label">Çok basit düşün</span>OLAP'ın gücünü gerçek hayattan düşün: geçmiş satışları sorgulayarak kasırga öncesi hangi ürünlerin arttığını bulmak ve stok kararını önceden vermek.</div>
<p>Eylül 2004, Frances Kasırgası yaklaşırken Walmart, haftalar önceki Charley Kasırgası sırasındaki satışları ambarda sorguladı: kasırga öncesi çilekli Pop-Tarts satışı normalin ~7 katı, en çok satan ürün bira. Mağazalara önceden sevk edildi. Ders: geçmiş OLTP'de silinmiş olsaydı soru sorulamazdı (değişmezlik, zamana bağlılık).</p>
`
},
{
  id: 5,
  title: "Birliktelik Kuralı Madenciliği",
  short: "Destek, güven, lift, null-invariance, Apriori elle, kural üretme, FP-Growth, ECLAT, kapalı/maksimal kümeler.",
  principle: "Sık olan ilginç değildir. Yüksek destek ve güven kuralın işe yaradığını göstermez — lift'e bakın.",
  body: `
<h2>1. Temel fikir</h2><div class="box tip"><span class="label">Çok basit düşün</span>Birliktelik kuralı 'A alan B'yi de alma eğiliminde mi?' sorusudur; neden-sonuç iddiası değildir. Sepette adet değil ürünün bulunup bulunmaması önemlidir.</div>
<p>Denetimsiz: hedef sütun yok. "X → Y" = X'i alanlar Y'yi de alma eğiliminde; <b>nedensellik değildir</b>. Sepette adet önemsiz, yalnızca var/yok.</p>
<details class="example" open><summary>Haftanın verisi: 8 sepet</summary><div class="inner">
<div class="table-wrap"><table>
<tr><th>Sepet</th><th>Ürünler</th></tr>
<tr><td>T1</td><td>Ekmek · Süt · Peynir</td></tr>
<tr><td>T2</td><td>Ekmek · Peynir · Zeytin</td></tr>
<tr><td>T3</td><td>Ekmek · Süt · Yumurta</td></tr>
<tr><td>T4</td><td>Süt · Peynir · Zeytin</td></tr>
<tr><td>T5</td><td>Ekmek · Peynir · Zeytin</td></tr>
<tr><td>T6</td><td>Ekmek · Süt · Peynir · Zeytin · Çay</td></tr>
<tr><td>T7</td><td>Ekmek · Yumurta</td></tr>
<tr><td>T8</td><td>Ekmek · Süt · Yumurta</td></tr>
</table></div>
<p>Sayılar: Ekmek 7 · Peynir 5 · Süt 5 · Zeytin 4 · Yumurta 3 · Çay 1</p>
</div></details>

<h2>2. Üç ölçü</h2><div class="box tip"><span class="label">Çok basit düşün</span>Destek tüm sepetlere bakar, güven öncülü alanlara bakar, lift ise güveni sonucun genel yaygınlığıyla karşılaştırır. Üçünü aynı örnekte hesapla.</div>
<div class="formula">destek(X → Y) = sayı(X ∪ Y) / N                  (yön bilmez)
güven(X → Y)  = sayı(X ∪ Y) / sayı(X) = P(Y|X)    (yön bilir)
lift(X → Y)   = güven / destek(Y)
              = destek(X∪Y) / (destek(X) × destek(Y))   (simetrik)</div>
<div class="box warn"><span class="label">En çok karıştırılan</span>Destekte payda <b>tüm sepetler</b> (8); güvende payda <b>öncülün geçtiği sepetler</b>.</div>
<div class="table-wrap"><table>
<tr><th>Kural</th><th>Destek</th><th>Güven</th><th>destek(Y)</th><th>Lift</th></tr>
<tr><td>Peynir → Zeytin</td><td>4/8 = 0,50</td><td>4/5 = 0,80</td><td>4/8 = 0,50</td><td><b>1,60</b> gerçek birliktelik</td></tr>
<tr><td>Zeytin → Peynir</td><td>0,50</td><td>4/4 = 1,00</td><td>5/8 = 0,625</td><td>1,60</td></tr>
<tr><td>Peynir → Ekmek</td><td>4/8 = 0,50</td><td>4/5 = 0,80</td><td>7/8 = 0,875</td><td><b>0,91</b> zarar veriyor</td></tr>
</table></div>
<p>Lift &gt; 1 birliktelik gerçek · = 1 bağımsız · &lt; 1 kural ters çalışıyor. <b>Güvenin tuzağı:</b> Ekmek zaten %87,5 sepette; peynir alanlarda %80'e düşüyor.</p>
<p>Eşikler: <b>min_sup = %25</b> (8 sepette en az 2) · <b>min_conf = %60</b>. İkisini geçen kurala <b>güçlü kural</b> denir.</p>

<h3>Ek ölçütler</h3>
<div class="table-wrap"><table>
<tr><th>Ölçüt</th><th>Formül</th><th>Bağımsızlıkta</th><th>P→Z</th><th>P→E</th></tr>
<tr><td>Leverage</td><td>destek(X∪Y) − destek(X)·destek(Y)</td><td>0</td><td>+0,19</td><td>−0,05</td></tr>
<tr><td>Conviction</td><td>(1 − destek(Y)) / (1 − güven)</td><td>1</td><td>2,50</td><td>0,63</td></tr>
<tr><td>Kulczynski</td><td>½·(P(Y|X) + P(X|Y))</td><td>—</td><td>0,90</td><td>0,69</td></tr>
<tr><td>Kosinüs</td><td>destek(X∪Y) / √(destek(X)·destek(Y))</td><td>—</td><td>0,89</td><td>0,68</td></tr>
</table></div>
<div class="box key"><span class="label">Null-invariance</span>8 sepete yalnızca su içeren 92 sepet eklenince Peynir → Ekmek lift'i 0,91'den <b>11,43</b>'e fırlar; güven, Kulczynski ve kosinüs değişmez. <b>Kulczynski ve kosinüs null-invariant</b>; lift ve leverage değil. Lift nadir ürünlerde birlikteliği abartır.</div>

<h2>3. Problem büyüklüğü</h2><div class="box tip"><span class="label">Çok basit düşün</span>Ürün sayısı arttıkça olası kümeler üstel büyür. Apriori'nin adayları azaltmaya çalışmasının nedeni tam olarak bu patlamadır.</div>
<div class="formula">öğe kümesi sayısı = 2ᵈ − 1        kural sayısı = 3ᵈ − 2ᵈ⁺¹ + 1
d = 6 → 63 küme, 602 kural       d = 20 → 1.048.575 küme, ≈ 3,5 milyar kural</div>

<h2>4. Apriori ilkesi</h2><div class="box tip"><span class="label">Çok basit düşün</span>Bir küme seyrekse onu içeren daha büyük kümeler de seyrektir. Bu bilgi sayesinde sayılmayacak adayları daha baştan budarız.</div>
<div class="box key">Bir küme seyrekse, onu içeren her küme de seyrektir (<b>anti-monotonluk</b>: küme büyüdükçe destek artmaz). Ters yönü çalışmaz: tüm alt kümeleri sık olan bir küme seyrek olabilir — {Ekmek, Süt, Zeytin}.</div>

<h2>5. Apriori elle (min_sup = 2)</h2><div class="box tip"><span class="label">Çok basit düşün</span>Her turda aynı mantığı uygula: adayları üret → minimum desteği kontrol et → seyrekleri ele → kalanlarla sonraki turu üret.</div>
<details class="example" open><summary>Turlar</summary><div class="inner">
<p><b>1. tur:</b> Çay (1) elenir → L₁ = {Ekmek, Peynir, Süt, Yumurta, Zeytin}.</p>
<p><b>2. tur:</b> 5·4/2 = 10 aday. Elenen: Peynir-Yumurta (0), Yumurta-Zeytin (0). Süt-Yumurta (2) ve Süt-Zeytin (2) tam eşikte geçer → <b>L₂ = 8</b>.</p>
<p><b>3. tur:</b> Birleştirme (ilk k−2 öğesi aynı olanlar) 8 aday üretir; 3'ü budanır (alt kümesinde PY veya YZ var). Sayılan 5: EPS 2 ✓ · EPZ 3 ✓ · ESY 2 ✓ · <b>ESZ 1 ✗</b> · PSZ 2 ✓ → <b>L₃ = 4</b>.</p>
<p><b>4. tur:</b> EPS + EPZ → {E,P,S,Z}; alt kümesi ESZ L₃'te yok → budanır. C₄ boş, dur.</p>
<p><b>Bilanço:</b> 17 sık küme (5+8+4), 3 veritabanı taraması. Bu veride C₄ budamayla boşaldığı için 3 tarama yeter; genelde sayılacak aday kaldıysa k+1. tarama gerekir.</p>
</div></details>

<h2>6. Kural üretme</h2><div class="box tip"><span class="label">Çok basit düşün</span>Sık bir kümeden farklı X→Y yönleri üret. Güveni hesapla; eşik geçerse lift ile gerçekten anlamlı mı kontrol et.</div>
<p>k öğeli kümeden <b>2ᵏ − 2</b> kural. Destek hesaplanmaz (küme zaten sık), yalnızca güven: pay sabit, payda değişir.</p>
<div class="table-wrap"><table>
<tr><th>{Ekmek, Peynir, Zeytin} (3 sepet)</th><th>Güven</th><th>Karar</th><th>Lift</th></tr>
<tr><td>Ekmek → Peynir, Zeytin</td><td>3/7 = 0,43</td><td>✗</td><td>0,86</td></tr>
<tr><td>Peynir → Ekmek, Zeytin</td><td>3/5 = 0,60</td><td>✓ (eşikte)</td><td>1,60</td></tr>
<tr><td>Zeytin → Ekmek, Peynir</td><td>3/4 = 0,75</td><td>✓</td><td>1,50</td></tr>
<tr><td>Ekmek, Peynir → Zeytin</td><td>3/4 = 0,75</td><td>✓</td><td>1,50</td></tr>
<tr><td>Ekmek, Zeytin → Peynir</td><td>3/3 = 1,00</td><td>✓</td><td>1,60</td></tr>
<tr><td>Peynir, Zeytin → Ekmek</td><td>3/4 = 0,75</td><td>✓</td><td>0,86 ⚠</td></tr>
</table></div>
<p>Öncülden sonuca öğe taşıdıkça güven <b>artamaz</b> → kural üretmede budama. 17 sık kümeden 40 aday kural, 20'si güven eşiğini geçer, bunların <b>7'sinin lift'i &lt; 1</b> (çoğunun sonucu Ekmek). Groceries verisinde güvene göre ilk 10 kuralın 8'inin sonucu <i>whole milk</i>; lift'e göre hiçbiri.</p>

<h2>7. FP-Growth ve ECLAT</h2><div class="box tip"><span class="label">Çok basit düşün</span>Apriori aday aday üretirken FP-Growth veriyi sıkıştırıp aday üretmeden çalışır. ECLAT ise öğelerin hangi sepetlerde bulunduğunu tutup kümelerin kesişimini kullanır.</div>
<div class="table-wrap"><table>
<tr><th></th><th>Apriori</th><th>FP-Growth</th><th>ECLAT</th></tr>
<tr><td>Tarama</td><td>Tur başına 1 tarama</td><td><b>2</b></td><td>1 (dikey gösterime çevirirken)</td></tr>
<tr><td>Aday üretir mi?</td><td>Evet</td><td><b>Hayır</b></td><td>Evet, sayım kesişimle</td></tr>
<tr><td>Fikir</td><td>Birleştir–buda–say</td><td>Veriyi FP-ağacına sıkıştır</td><td>Öğe → sepet listesi (TID), kesişim</td></tr>
<tr><td>Zayıf</td><td>Çok aday, çok tarama</td><td>Ağaç belleğe sığmalı</td><td>Uzun listeler belleği zorlar</td></tr>
</table></div>
<p>FP-Growth (Han, Pei, Yin 2000): 1. taramada sayar, sepetleri sıklığa göre sıralar; 2. taramada ağaca ekler. 8 sepetteki 24 öğe 11 düğüme sığdı. En seyrek öğeden başlayıp <b>koşullu desen tabanı</b> çıkarılır: Yumurta → {Ekmek, Süt}:2, {Ekmek}:1. Üçü de aynı sık kümeleri bulur.</p>
<p>Apriori: Agrawal &amp; Srikant, 1994.</p>

<h2>8. Kapalı ve maksimal kümeler</h2><div class="box tip"><span class="label">Çok basit düşün</span>Kapalı küme: üst kümesi aynı desteğe sahip değil. Maksimal küme: üst kümesi artık sık değil. Kapalı bilgi kaybetmeden sıkıştırır; maksimal daha kısa ama sayıları kaybedebilir.</div>
<div class="table-wrap"><table>
<tr><th></th><th>Tanım</th><th>Bu veride</th></tr>
<tr><td><b>Kapalı</b></td><td>Hiçbir üst kümesi <i>aynı sayıya</i> sahip değil</td><td>12 ({Zeytin}=4={Peynir,Zeytin} → kapalı değil)</td></tr>
<tr><td><b>Maksimal</b></td><td>Hiçbir üst kümesi <i>sık</i> değil</td><td>4: EPS · EPZ · ESY · PSZ</td></tr>
</table></div>
<p>Kapalı kümeler <b>kayıpsız</b> sıkıştırır (sayılar korunur); maksimal daha kısa ama sayıları kaybeder. Kural madenciliğinde kapalı tercih edilir.</p>

<h2>9. Kural türleri</h2><div class="box tip"><span class="label">Çok basit düşün</span>Kuralı sadece ürün→ürün diye düşünme: çok düzeyli, çok boyutlu ve sayısal kurallar da vardır.</div>
<p><b>Çok düzeyli:</b> hiyerarşide alt düzeyde destek düşük → <i>reduced support</i>. Alt düzey kural ancak üst düzeyden beklenenden farklıysa ilginç. <b>Çok boyutlu:</b> yaş = "20–29" ∧ meslek = "öğrenci" → dizüstü. <b>Sayısal öznitelikler</b> önce ayrıklaştırılır (Hafta 3).</p>
`
},
{
  id: 6,
  title: "Sınıflandırma I: Karar Ağaçları",
  short: "Denetimli öğrenme, eğitim/doğrulama/test, Gini, entropi, bilgi kazancı, kazanç oranı, aşırı öğrenme, budama.",
  principle: "Occam'ın usturası. Aynı veriyi açıklayan iki modelden basit olanı tercih edilir.",
  body: `
<h2>1. Sınıflandırmaya giriş</h2><div class="box tip"><span class="label">Çok basit düşün</span>Hedef kategori ise sınıflandırmadır. Eğitim modelin öğrendiği, doğrulama ayar seçtiğin, test ise en son dokunduğun veri olmalı.</div>
<p><b>Denetimli</b>: hedef sütun var (sınıflandırma = kategori, regresyon = sayı). <b>Denetimsiz</b>: hedef yok (birliktelik, kümeleme).</p>
<div class="table-wrap"><table>
<tr><th>Küme</th><th>Görevi</th></tr>
<tr><td>Eğitim</td><td>Model kuralları buradan öğrenir</td></tr>
<tr><td>Doğrulama</td><td>Derinlik gibi ayarlar burada denenir</td></tr>
<tr><td>Test</td><td>En sonda, <b>bir kez</b>. Teste bakıp model değiştirmek = sızıntı</td></tr>
</table></div>

<h2>2. Karar ağacı</h2><div class="box tip"><span class="label">Çok basit düşün</span>Karar ağacını bir soru-cevap oyunu gibi düşün: kökte ilk soru, dallarda cevaplar, yaprakta karar vardır.</div>
<p>Kök (ilk soru) · iç düğüm (ara soru) · dal (cevap) · yaprak (karar/sınıf).</p>
<div class="box tip"><span class="label">Neden ilk yöntem?</span>1) Yorumlanabilir (EĞER…İSE kurallarına çevrilir) 2) Ölçeklemeye duyarsız 3) Kategorik + sayısal birlikte 4) Öznitelik seçimini kendisi yapar. Bedeli: kolay ezberler, küçük değişiklikte bambaşka ağaç çıkar.</div>
<p><b>Hunt algoritması (1966):</b> özyinelemeli — hepsi aynı sınıfsa yaprak; durdurma koşulu sağlandıysa çoğunluk sınıfı; değilse en iyi bölmeyi seç, ikiye ayır, her parçaya aynı tarifi uygula.</p>
<div class="table-wrap"><table>
<tr><th>Algoritma</th><th>Yıl</th><th>Ölçüt</th></tr>
<tr><td>CART</td><td>1984</td><td>Gini · her düğümde ikili bölme · sklearn varsayılanı</td></tr>
<tr><td>ID3</td><td>1986</td><td>Bilgi kazancı (entropi) · çoklu bölme</td></tr>
<tr><td>C4.5</td><td>1993</td><td>Kazanç oranı · sayısal öznitelik ve eksik değer</td></tr>
</table></div>

<h2>3. Gini</h2><div class="box tip"><span class="label">Çok basit düşün</span>Gini düğümün ne kadar karışık olduğunu ölçer. En iyi bölme, ağırlıklı Gini'yi en çok azaltan bölmedir.</div>
<div class="formula">Gini = 1 − Σ pᵢ²
Gini(bölme) = (n_sol/n)·Gini(sol) + (n_sağ/n)·Gini(sağ)
azalma = Gini(ebeveyn) − Gini(bölme)        → en büyük azalma seçilir</div>
<p>Saf düğüm 0. En büyük değer <b>1 − 1/k</b>: 2 sınıfta 0,5, 3 sınıfta 0,667. Sezgi: <b>geri koyarak</b> rastgele çekilen iki kaydın farklı sınıftan çıkma olasılığı.</p>
<p>Kredi örneği (5 ödedi, 5 ödemedi, Gini 0,50): "Düzenli maaşı var mı?" → iki grup 4–1 / 1–4 → 0,32, azalma 0,18. "Doğum ayı ilk yarıda mı?" → 3–2 / 2–3 → 0,48, azalma 0,02. <b>Maaş seçilir.</b> Ağırlıklı ortalama çünkü büyük grubun sözü daha çok geçmeli.</p>

<details class="example" open><summary>Elle örnek: 12 müşteri, tişört bedeni (S/M/L)</summary><div class="inner">
<div class="table-wrap"><table>
<tr><th>#</th><th>Cins.</th><th>Boy</th><th>Kilo</th><th>Beden</th></tr>
<tr><td>1</td><td>K</td><td>Kısa</td><td>48</td><td>S</td></tr>
<tr><td>2</td><td>K</td><td>Orta</td><td>52</td><td>S</td></tr>
<tr><td>3</td><td>E</td><td>Kısa</td><td>55</td><td>S</td></tr>
<tr><td>4</td><td>K</td><td>Kısa</td><td>58</td><td>S</td></tr>
<tr><td>5</td><td>K</td><td>Kısa</td><td>62</td><td>M</td></tr>
<tr><td>6</td><td>K</td><td>Orta</td><td>64</td><td>M</td></tr>
<tr><td>7</td><td>E</td><td>Orta</td><td>66</td><td>M</td></tr>
<tr><td>8</td><td>K</td><td>Uzun</td><td>68</td><td>L</td></tr>
<tr><td>9</td><td>K</td><td>Orta</td><td>70</td><td>M</td></tr>
<tr><td>10</td><td>E</td><td>Kısa</td><td>72</td><td>M</td></tr>
<tr><td>11</td><td>E</td><td>Uzun</td><td>78</td><td>L</td></tr>
<tr><td>12</td><td>E</td><td>Uzun</td><td>85</td><td>L</td></tr>
</table></div>
<div class="formula">Kök: 4S · 5M · 3L → Gini = 1 − (16+25+9)/144 = 94/144 ≈ 0,653</div>
<div class="table-wrap"><table>
<tr><th>Kökteki aday</th><th>Ağırlıklı Gini</th><th>Azalma</th></tr>
<tr><td><b>Kilo ≤ 60</b> (4S | 5M·3L)</td><td>0 + 8/12·0,469 = <b>0,3125</b></td><td><b>0,340</b></td></tr>
<tr><td>Boy = Uzun (3L | 4S·5M)</td><td>0 + 9/12·0,494 = 0,370</td><td>0,282</td></tr>
<tr><td>Kilo ≤ 75</td><td>0,483</td><td>0,169</td></tr>
<tr><td>Kilo ≤ 67</td><td>0,486</td><td>0,167</td></tr>
<tr><td>Boy = Kısa</td><td>0,557</td><td>0,096</td></tr>
<tr><td>Boy = Orta</td><td>0,5625</td><td>0,090</td></tr>
<tr><td>Cinsiyet = E</td><td>0,624</td><td>0,029</td></tr>
</table></div>
<p>Sayısal öznitelikte aday eşik = ardışık iki değerin ortası; en iyi eşik hep <b>sınıfın değiştiği yerde</b>dir.</p>
<p>Sağ dal (5M · 3L, Gini 0,469): <b>Boy = Uzun</b> iki grubu da saflaştırır (ağırlıklı Gini 0). Kökte ikinci olan, burada birinci — her düğümde adaylar yeniden yarışır.</p>
<div class="formula">EĞER Kilo ≤ 60                     İSE S
EĞER Kilo > 60 VE Boy = Uzun       İSE L
EĞER Kilo > 60 VE Boy ≠ Uzun       İSE M</div>
<p>Cinsiyet hiçbir kuralda yok → ağaç öznitelik seçimini kendisi yaptı. Yeni müşteri E · Orta · 61 kg → <b>M</b>.</p>
</div></details>

<h2>4. Entropi ve bilgi kazancı</h2><div class="box tip"><span class="label">Çok basit düşün</span>Entropi de karışıklığı ölçer. Bilgi kazancı, bölmeden sonra karışıklığın ne kadar azaldığını söyler.</div>
<div class="formula">Entropi = − Σ pᵢ · log₂ pᵢ          (birim: bit; log₂x = ln x / ln 2)
Bilgi kazancı(A) = Entropi(ebeveyn) − Σ (nᵥ/n)·Entropi(v)</div>
<p>4–0 → 0 · 5–5 → 1 · 9 Evet–5 Hayır → <b>0,940</b>.</p>
<details class="example"><summary>Hava durumu verisi (14 gün, Quinlan)</summary><div class="inner">
<p>Hava: Güneşli 2E·3H (0,971) · Bulutlu 4E (0) · Yağmurlu 3E·2H (0,971)</p>
<div class="formula">Ağırlıklı = 5/14·0,971 + 4/14·0 + 5/14·0,971 = 0,694
Kazanç(Hava) = 0,940 − 0,694 ≈ 0,247 (yuvarlanmamış değerlerle)</div>
<div class="table-wrap"><table>
<tr><th>Öznitelik</th><th>Bilgi kazancı</th><th>Gini azalması</th></tr>
<tr><td>Hava</td><td>0,247</td><td>0,116</td></tr>
<tr><td>Nem</td><td>0,152</td><td>0,092</td></tr>
<tr><td>Rüzgâr</td><td>0,048</td><td>0,031</td></tr>
<tr><td>Sıcaklık</td><td>0,029</td><td>0,019</td></tr>
</table></div>
<p>İki ölçüt de Hava'yı seçer; sıralama aynı.</p>
</div></details>

<h2>5. "Gün" tuzağı ve kazanç oranı (C4.5)</h2><div class="box tip"><span class="label">Çok basit düşün</span>Çok fazla farklı değer içeren bir sütun herkesi ayrı dala ayırıp yapay şekilde iyi görünebilir. Kazanç oranı bu yanlılığı azaltır.</div>
<p>Her kayda ayrı değer veren "Gün" sütunu her dalı saf yapar → kazanç 0,940 (en büyük), ama genellenemez. ID3 çok değerli özniteliklere yanlıdır.</p>
<div class="formula">Bölme bilgisi(A) = − Σ (nᵥ/n) · log₂(nᵥ/n)
Kazanç oranı(A)  = Bilgi kazancı(A) / Bölme bilgisi(A)</div>
<div class="table-wrap"><table>
<tr><th>Öznitelik</th><th>Kazanç</th><th>Bölme bilgisi</th><th>Oran</th></tr>
<tr><td>Gün</td><td>0,940</td><td>log₂14 = 3,807</td><td>0,247</td></tr>
<tr><td>Hava</td><td>0,247</td><td>1,577</td><td>0,156</td></tr>
<tr><td>Nem</td><td>0,152</td><td>1,000</td><td>0,152</td></tr>
</table></div>
<div class="box warn">Kazanç oranı Gün'ü cezalandırdı ama Gün <b>yine kazandı</b>. Düzeltme yanlılığı azaltır, yok etmez. Asıl çözüm: kimlik sütunlarını modelden önce atmak.</div>
<p><b>Gini mi entropi mi?</b> Eğriler neredeyse aynı, çoğu düğümde aynı bölmeyi seçerler. Gini log hesaplamadığı için daha hızlı.</p>

<h2>6. Aşırı öğrenme</h2><div class="box tip"><span class="label">Çok basit düşün</span>Eğitimde %100 başarı tek başına iyi değildir. Model ezberliyorsa eğitim yüksek, doğrulama/test daha düşük olur. Budama modeli sadeleştirir.</div>
<p>Derin ağaç gürültüyü de öğrenir: 500 kayıtlık gürültülü veride derinlik 2'de eğitim %88,6 / doğrulama <b>%84,6</b> (en iyi); sınırsız ağaçta eğitim %100 / doğrulama %81,0. <b>Eğitim doğruluğu modelin iyi olduğunu söylemez.</b></p>
<h3>Ön budama (erken dur)</h3>
<p><code>max_depth</code> · <code>min_samples_split</code> · <code>min_samples_leaf</code> · <code>min_impurity_decrease</code>. Değer doğrulama verisinde seçilir.</p>
<div class="box warn"><span class="label">Ufuk etkisi</span>Merdiven lambası (XOR): tek tek anahtarlar Gini'yi hiç azaltmaz (0,50 → 0,50), ön budama kökte durur (%50). İkisi birlikte sorulsa dört saf yaprak (%100). Ön budama bir adım ötesini göremez.</div>
<h3>Son budama (önce büyüt, sonra kes)</h3>
<p><b>Hata azaltma budaması:</b> alt ağacı yaprakla değiştirince doğrulama hatası artmıyorsa kes. <b>Maliyet-karmaşıklık</b> (CART, <code>ccp_alpha</code>):</p>
<div class="formula">Maliyet(T) = Hata(T) + α × yaprak sayısı(T)</div>
<p>Meme kanseri verisinde: α=0 → 16 yaprak, doğrulama %93,5; α=0,009 → 5 yaprak, doğrulama <b>%94,3</b> (seçilen). Test sütununa bakıp seçmek sızıntı olurdu.</p>
<p><b>Kural sadeleştirme:</b> "Kilo &gt; 60 VE Kilo &gt; 65 VE Boy = Uzun → L" → "Boy = Uzun → L". Kurallar çakışabilir; C4.5 sıraya koyar ve varsayılan sınıf belirler.</p>

<h2>7. Zayıflıklar</h2><div class="box tip"><span class="label">Çok basit düşün</span>Ağaçların basamaklı sınır ve kararsızlık gibi sorunlarını bil. Bir örnek değişince ağacın tamamen değişmesi varyans problemidir.</div>
<p><b>Merdiven sınırlar:</b> her düğüm tek özniteliğe sorar (dikey/yatay çizgi); "Kilo &gt; Boy − 100" gibi çapraz sınır basamaklarla taklit edilir. Çözüm: <code>Kilo − Boy</code> özniteliğini üret.</p>
<p><b>Kararsızlık:</b> 13. müşteri (K · Kısa · 56 kg · M) eklenince kök Boy = Uzun'a döner, derinlik 2'den 4'e çıkar, tek müşterilik yapraklar oluşur. Çözüm Hafta 7: rastgele orman.</p>
<p><b>Eksik değer (C4.5):</b> kaydı ağırlıklarla dallara böler (5/13, 4/13, 4/13); kazanç bilinen kayıt oranıyla (13/14) çarpılır.</p>
`
}
];
