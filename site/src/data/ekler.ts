// Haftaların sonuna eklenen, kaynak denetiminde sitede eksik bulunan konular.
export const EKLER: Record<number, string> = {
  1: `
<h2>Kaynaktan tamamlananlar</h2>
<p><b>Üç sürecin eşleşmesi:</b> Veriyi tanıma (KDD Seçim · CRISP-DM Veri anlayışı · SEMMA Sample/Explore), hazırlama (Ön işleme/Dönüştürme · Veri hazırlama · Modify), modelleme (Veri madenciliği · Modelleme · Model), ölçme (Yorumlama · Değerlendirme · Assess). Yalnız CRISP-DM işle başlar ve sahaya almayla biter.</p>
<p><b>İş anlayışının dört görevi:</b> 1.1 iş hedefleri, 1.2 durum değerlendirmesi (kaynak, kısıt, risk ve B planı, maliyet-fayda), 1.3 veri madenciliği hedefleri, 1.4 proje planı. Toplamına <b>Proje Başlangıç Belgesi</b> denir.</p>
<p><b>Destek ve lift birlikte okunur:</b> Lift gücü, destek büyüklüğü gösterir; 4 milyon fişte 60 kez geçen yüksek lift'li kural kırılgandır. Lift = 1 bağımsızlık, Lift &lt; 1 birbirini itme (ikame ürünler).</p>
<p><b>Korelasyon ve neden:</b> Veri madenciliği birlikte değişeni bulur, nedeni kanıtlamaz. Hipotezi üretir; <b>A/B testi</b> sahada doğrular.</p>
<div class="box warn"><span class="label">Tahmin kendini gerçekleştirebilir</span>"Riskli" damgası yiyen öğrenciye farklı davranmak başarısızlığı tetikleyebilir; ayrımcılığı doğuran çoğu zaman tahmine bağlanan eylemdir. Yüksek riske cezalandırıcı değil destekleyici eylem bağlanmalıdır.</div>
<p><b>Terimin kökeni:</b> İstatistikçiler 1960–70'lerde hipotezsiz veri taramayı yermek için <i>data dredging / data fishing</i> dedi. Çoklu karşılaştırma düzeltmesi, çapraz doğrulama ve test disiplini alanı bilimsel çerçeveye oturttu. <b>Yapay zekâ</b> zeki davranış üretir; veri madenciliği var olan veriden yorumlanabilir örüntü arar.</p>
`,
  2: `
<h2>Kaynaktan tamamlananlar</h2>
<div class="table-wrap"><table>
<tr><th>Korelasyon</th><th>Ne zaman?</th></tr>
<tr><td>Pearson</td><td>Sürekli, doğrusal ilişki</td></tr>
<tr><td>Spearman</td><td>Sıralar üzerinden monoton ilişki, aykırı değerli durum</td></tr>
<tr><td>Kendall tau</td><td>Küçük örneklem, çok sayıda eşit değer</td></tr>
</table></div>
<p>Pearson ile Spearman çok farklıysa ilişki doğrusal değildir; saçılım grafiğine bakın. <b>Datasaurus Dozen</b> (2017): özet istatistikleri aynı 13 veri kümesi çizilince dinozor, yıldız gibi çıkar.</p>
<p><b>Stevens (1946), anlamı koruyan dönüşümler:</b> Nominal birebir · Sıralı monoton artan · Aralık y = ax + b · Oran y = ax. F = 1,8C + 32 ikinci türdedir; bu yüzden "iki kat sıcak" anlamsızdır.</p>
<p><b>Minkowski geometrisi:</b> Birim çember p=1'de elmas, p=2'de çember, p=∞'da karedir. Manhattan aykırı değere Öklid'den dayanıklıdır; p büyüdükçe en büyük tek fark baskınlaşır; p &lt; 1 üçgen eşitsizliğini bozduğu için metrik değildir.</p>
<div class="box warn"><span class="label">Boyut laneti</span>Boyut arttıkça en yakın ve en uzak komşu arasındaki fark sıfıra yaklaşır; kNN ve kümeleme ayırt ediciliğini yitirir. Çözüm: öznitelik seçimi, PCA, seyrek veride kosinüs.</div>
<p><b>Sıralı veriyi özetlemek:</b> Tek soru <i>Likert maddesi</i> (sıralı), birkaç maddenin toplamı <i>Likert ölçeği</i>dir. Ortalama yerine <b>Top-2 Box</b> veya <b>NPS</b> kullanılır: 9–10 destekleyici, 7–8 pasif, 0–6 kötüleyen; NPS = %destekleyici − %kötüleyen (−100…+100).</p>
<p><b>Google Grip Eğilimleri:</b> Lazer vd. (2014) iki tuzak adlandırır: <b>büyük veri kibri</b> ve ölçüm aracını değiştiren <b>algoritma dinamikleri</b>.</p>
<p><b>Verinin üç ekseni:</b> Biçim (yapılandırılmış/yarı/yapılandırılmamış), tür (kayıt, işlem, sıralı, graf, metin), veri yapısı (dizi, ağaç, DataFrame). <b>Türkçe veri tuzakları:</b> 1.234,56 için <code>decimal=',', thousands='.'</code>; posta kodu için <code>dtype=str</code>.</p>
`,
  3: `
<h2>Kaynaktan tamamlananlar</h2>
<div class="formula">ÇAA = Q3 − Q1 · alt sınır = Q1 − 1,5×ÇAA · üst sınır = Q3 + 1,5×ÇAA · (11 harcama: Q1=140, Q3=260 → −40 ile 440)</div>
<div class="table-wrap"><table>
<tr><th>Ölçekleme</th><th>Ne zaman?</th><th>Kırılganlık</th></tr>
<tr><td>Min-maks</td><td>Sabit aralık gerekiyorsa</td><td>Beş harcamaya 50.000 eklenince 5200 bile ≈ 0,082 olur</td></tr>
<tr><td>Z-skoru</td><td>Yaklaşık simetrik dağılım</td><td>Aykırıdan etkilenir</td></tr>
<tr><td>Robust</td><td>Korunacak aykırı değer varsa</td><td>Sabit aralıkta kalmaz</td></tr>
</table></div>
<div class="box warn"><span class="label">Test aralık dışına çıkınca</span>Eğitim min=10, maks=40 ise aynı dönüşüm testte 25'i 0,5'e, 100'ü 3'e götürür. 3 hata değildir; test için yeniden fit <b>yapılmaz</b>. Ayrı ölçekleyici aynı sayının anlamını değiştirir.</div>
<p><b>Gelişmiş doldurma:</b> Grup içi ortalama, kNN (önce ölçekleyin), regresyon (korelasyonu yapay güçlendirebilir). <b>Çoklu doldurma (MICE):</b> veri birkaç biçimde doldurulur, sonuçlar birleştirilir; belirsizlik hesaba katılır.</p>
<p><b>Pima:</b> VKİ'deki 11 sıfır (%1,4) da eksik sayılır; gebelikteki sıfır gerçektir. Deri kalınlığı kararı yalnız %29,6'ya dayanmaz: insülinle örtüşme ve VKİ ile bilgi tekrarı incelenir.</p>
<div class="table-wrap"><table>
<tr><th></th><th>Sızıntı</th><th>Kavram kayması</th></tr>
<tr><td>Ne olur?</td><td>Eğitim görmemesi gereken bilgiyi görür, skor baştan şişer</td><td>Veri-hedef ilişkisi zamanla değişir, dürüst skor eskir</td></tr>
<tr><td>Çözüm</td><td>Hattı düzelt</td><td>İzle, yeniden eğit</td></tr>
</table></div>
<p><b>Zillow:</b> Kayma örneğidir. Hatalar asimetriktir: düşük tahmin fırsat kaybı, yüksek tahmin pahalı alım. Geri bildirim yavaşsa hacim sınırı, insan denetimi, kademeli açılım gerekir.</p>
<p><b>Genetik algoritma:</b> En iyi altkümeyi garanti etmez. <b>İç içe çapraz doğrulama:</b> iç döngü seçer, dış döngü ölçer; aynı veriye bakarak seçmek başarıyı şişirir.</p>
<p><b>Entropi ve MDLP:</b> H(p) = −p·log₂p − (1−p)·log₂(1−p); saf grupta 0, yarı yarıyada 1, p=0,9'da ≈ 0,469. Denetimli ayrıklaştırma entropiyi azaltan sınırları arar.</p>
`,
  4: `
<h2>Kaynaktan tamamlananlar</h2>
<p><b>Tane seçimi soruyu belirler:</b> Rezervasyon tanesi ortalama konaklamayı verir, günlük doluluk için tarih aralığı gerekir. Gece tanesi ikisini de cevaplar: ortalama konaklama = gece satırı ÷ farklı rezervasyon. Taneler aynı olguda karıştırılmaz.</p>
<div class="formula">GirisTarihID &lt;= 20250714 AND CikisTarihID &gt; 20250714 AND IptalEdildi = 'Hayır'  →  doğru cevap 80</div>
<div class="box warn"><span class="label">Doluluk tuzakları</span>İptal koşulu unutulursa 87, çıkışta <code>&gt;=</code> yazılırsa 97 çıkar: çıkış günü dolu sayılmaz. Gece tanesinde soru <code>TarihID = 20250714</code> eşitliğine iner.</div>
<p><b>İş anahtarına bağlanma hatası:</b> 8412'nin İstanbul ve Ankara sürümleri aynı iş anahtarını taşır; olgu buna bağlanırsa iki satırla eşleşir, tutar iki kez sayılabilir. Olgu vekil anahtara bağlanır (2024 → 4471, 2026 → 9038).</p>
<p><b>Kur seçimi:</b> İşlem günü kuru geçmişi sabit tutar; bugünün kuru raporu her gün değiştirir. İkisi de savunulabilir, kural yazılı olmalıdır.</p>
<p><b>Yıldız mı kar tanesi mi, hesapla:</b> 5 milyon üründe 60 bayt tekrar ≈ 300 MB. Kategoriyi yıldızda 1 milyar satışa anahtar olarak eklemek ≈ 4 GB, kar tanesinde ürünlere eklemek ≈ 20 MB.</p>
<p><b>Küboid ve SQL:</b> <code>GROUP BY CUBE(ay, sehir, oda)</code> 8 küboid üretir. <code>ROLLUP</code> yalnız hiyerarşik ön ekleri üretir: n + 1 küboid. <b>Özet seçimi</b> NP-zordur; açgözlü yöntem en iyi kazancın en az %63'ünü garanti eder. <b>Buzdağı küpü</b> eşiği geçen hücreleri hesaplar; Apriori'nin anti-monotonluk fikriyle aynıdır.</p>
<p><b>Inmon:</b> önce normalize kurumsal ambar, sonra veri pazarları. <b>Kimball:</b> önce yıldız veri pazarı, uyumlu boyutlarla bütünleştirme.</p>
<p><b>Sütun tabanlı depolama:</b> Az sütun okunduğu için okuma azalır, sıkıştırma kolaylaşır (Power BI VertiPaq). <b>Madalyon mimarisi:</b> bronz ham, gümüş temiz, altın iş sorusuna özet. Tablo katmanı ACID, şema denetimi ve sürüm geçmişi verir.</p>
<p><b>Walmart'ın kanıt sınırı:</b> "Yaklaşık yedi kat" bir röportajdan aktarılır, analiz tablosu yayımlanmamıştır; yalnız tutan tahminlerin anılması seçim yanlılığıdır.</p>
`,
  5: `
<h2>Kaynaktan tamamlananlar</h2>
<div class="box warn"><span class="label">Simpson paradoksu</span>Mağaza A: N=100, Peynir 80, Zeytin 80, birlikte 62 → lift 0,97. Mağaza B: N=100, 20, 20, birlikte 3 → lift 0,75. Birleşince N=200, 100, 100, birlikte 65 → <b>lift 1,30</b>. Kuralları alt gruplarda da denetleyin.</div>
<p><b>Sıralı örüntü:</b> Birliktelik sırayı dikkate almaz; sıralı örüntü zaman içindeki sırayı inceler: ⟨{Telefon} → {Kılıf} → {Ekran koruyucu}⟩. Seyrek alt dizinin üst dizisi de seyrektir.</p>
<p><b>Destek eşiği (güven %60):</b> min_sup %12,5 / %25 / %37,5 / %50 için sık küme 35 / 17 / 12 / 7, güçlü kural 89 / 20 / 13 / 4. Tek sepetlik örüntüler tesadüfe açıktır.</p>
<p><b>Nesnel ve öznel ilginçlik:</b> Destek, güven, lift veriden hesaplanır. Öznel ilginçlik kuralın beklenmedik ve uygulanabilir olmasıdır; herkesin bildiği kural yararsız olabilir.</p>
<p><b>Target:</b> Andrew Pole'un modeli yaklaşık 25 üründen hamilelik puanı üretir; bu tek bir X → Y kuralı değil, sınıflandırma modelidir. Baba-kız anekdotunun bu modelden çıktığı kanıtlı değildir. Doğru tahminle hassas bilgi çıkarmak da etik sorundur.</p>
<p><b>Kural koşulu:</b> X ve Y boş olmayan, ortak öğesi bulunmayan kümelerdir. <b>FP-ağacı sayacı:</b> kökten o düğüme aynı öneki paylaşan sepet sayısıdır; öğenin toplamı bütün düğümlerin toplamıdır (Peynir 4+1 = 5). <b>Ayrıklaştırma tuzağı:</b> aralık sınırları bir birlikteliği ikiye bölebilir.</p>
`,
  6: `
<h2>Kaynaktan tamamlananlar</h2>
<div class="box warn"><span class="label">Test sızıntısı</span>Meme kanseri verisinde test sütununa bakılsaydı α = 0,004 seçilirdi. α çapraz doğrulamayla seçilir: α = 0,009, CV %94,3, 5 yaprak.</div>
<p><b>Ufuk etkisi sayılarla:</b> 8 gözlemli merdiven lambası: kök 4 yanık · 4 sönük, Gini 0,50. Tek anahtar sorulunca iki dalda da 2-2 kalır, azalma 0; ön budama kökte durur (%50). İki soru art arda dört saf yaprak verir (%100). Son budama önce büyüttüğü için bu tuzağa düşmez.</p>
<p><b>Bölme bilgisi</b> hedefe bakmaz, yalnız dağılımı ölçer: Gün 3,807 · Hava 1,577 · Sıcaklık 1,557 · Nem 1,000 · Rüzgâr 0,985.</p>
<p><b>Entropi ve Gini farkı:</b> 5'e 5 düğüm 100 puansa 9'a 1 düğüm Gini'de 36, entropide 47 alır; entropi uçlardaki kirlenmeye daha duyarlıdır.</p>
<p><b>C4.5'te eksik değerli yeni kayıt:</b> Ağırlıklarla bütün dallardan iner, yaprak olasılıkları toplanır, en yüksek sınıf atanır. CART ise vekil bölme kullanır (Hafta 7).</p>
<p><b>scikit-learn:</b> Kategorik sütun için one-hot gerekir; <code>Boy_Uzun &lt;= 0.50</code> "Uzun değil" demektir. Önemler: Kilo 0,521, Boy_Uzun 0,479, Cinsiyet 0.</p>
<p><b>Kural sadeleştirme:</b> Önce kapsama ("Kilo &gt; 65", "Kilo &gt; 60"ı kapsar), sonra doğrulama hatasını artırmayan koşullar atılır.</p>
<h3>Vaka: COMPAS</h3>
<div class="table-wrap"><table>
<tr><th></th><th>Siyah sanık</th><th>Beyaz sanık</th></tr>
<tr><td>Suç işlemeyene yanlış "yüksek risk"</td><td>%45</td><td>%23</td></tr>
<tr><td>Suç işleyene yanlış "düşük risk"</td><td>%28</td><td>%48</td></tr>
</table></div>
<p>Modelde ırk sütunu yoktu. Northpointe aynı puanın aynı riski gösterdiğini (kalibrasyon) savundu. Kleinberg vd. ve Chouldechova: taban oranlar farklıysa kalibrasyon ve eşit hata oranları <b>aynı anda sağlanamaz</b>. Dressel ve Farid: 137 öznitelikli COMPAS %65 doğru; yalnız yaş ve önceki mahkûmiyetle kurulan basit model de neredeyse aynı sonucu verir. Yüksek riskli kararda yorumlanabilir model tercih edilir.</p>
`,
}
