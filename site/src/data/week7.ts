import type { Week } from './types'

// Hafta 7: H07-sunum, H07-ders-notu ve H07-detay dosyalarından.
export const WEEK7: Week = {
  id: 7,
  title: "CART, Regresyon Ağaçları ve Ormanlar",
  short: "SSE ile regresyon ağacı, en zayıf halka, vekil bölme, sınıf ağırlığı, öznitelik önemi, yanlılık-varyans, bagging, orman, boosting.",
  principle: "Kalabalığın bilgeliği, hatalar bağımsızsa işe yarar. Topluluğun gücü doğruluktan değil, çeşitlilikten gelir.",
  body: `
<h2>1. CART: aileden üçüncü algoritma</h2>
<p><b>CART</b> = Classification And Regression Trees (Breiman, Friedman, Olshen, Stone, 1984). Adı iki işi de yaptığını söyler: kategori de, sayı da tahmin eder. scikit-learn'deki <code>DecisionTreeClassifier</code> ve <code>DecisionTreeRegressor</code> CART'ın uygulamasıdır.</p>
<div class="table-wrap"><table>
<tr><th></th><th>ID3 (1986)</th><th>C4.5 (1993)</th><th>CART (1984)</th></tr>
<tr><td>Bölme ölçütü</td><td>Bilgi kazancı</td><td>Kazanç oranı</td><td><b>Gini · regresyonda SSE</b></td></tr>
<tr><td>Bölme biçimi</td><td>Her değer bir dal</td><td>Her değer bir dal</td><td><b>Her düğümde ikiye</b></td></tr>
<tr><td>Sayısal öznitelik</td><td>Yok; önce kategoriye çevrilir</td><td>Eşikle</td><td>Eşikle</td></tr>
<tr><td>Hedef</td><td>Kategori</td><td>Kategori</td><td><b>Kategori veya sayı</b></td></tr>
<tr><td>Budama</td><td>Yok</td><td>Hataya dayalı</td><td><b>Maliyet-karmaşıklık (α)</b></td></tr>
<tr><td>Eksik değer</td><td>Yok</td><td>Kesirli kayıt</td><td><b>Vekil bölme</b></td></tr>
</table></div>
<div class="box warn"><span class="label">İki ayrı şey</span><b>Öznitelik</b> soru sorduğumuz sütun (Kilo, Hava), <b>hedef</b> tahmin ettiğimiz sütundur (Beden, fiyat). Bu haftanın yeniliği hedefin sayı olması: ev fiyatını yalnızca CART tahmin edebilir.</div>
<p><b>Aynı veri, üç algoritma:</b> 14 günlük Hava verisinde ID3 (kazanç 0,247) ve C4.5 (oran 0,156) kökte Hava'yı seçip üç dal açar. CART ikili sorar: <b>Hava = Bulutlu?</b> (ağırlıklı Gini 0,357, azalma 0,102). Kökün Gini'si 0,459. Diğer adaylar: Nem = Yüksek 0,367 · Hava = Güneşli 0,394 · Hava = Yağmurlu 0,457.</p>

<h2>2. Regresyon ağacı</h2>
<p>Hedef sayı olunca ağacın tarifi aynı kalır, <b>iki şey</b> değişir:</p>
<div class="table-wrap"><table>
<tr><th></th><th>Sınıflandırma ağacı</th><th>Regresyon ağacı</th></tr>
<tr><td>Karışıklık ölçüsü</td><td>Gini</td><td><b>SSE</b></td></tr>
<tr><td>Bölme hesabı</td><td>Ağırlıklı ortalama</td><td><b>Doğrudan toplam:</b> SSE(sol) + SSE(sağ)</td></tr>
<tr><td>Yaprağın cevabı</td><td>Çoğunluk sınıfı</td><td><b>Ortalama</b></td></tr>
</table></div>
<div class="formula">SSE = Σ (yᵢ − ȳ)²   ·   ȳ = grubun ortalaması   ·   Bölmenin SSE'si = SSE(sol) + SSE(sağ)</div>
<div class="box key"><span class="label">İki "neden" sorusu</span><b>Neden ortalama?</b> Bir grubun SSE'sini en küçük yapan tek sayı ortalamadır. <b>Neden ağırlıklı değil?</b> Gini bir orandır, grup büyüklüğünü bilmez; SSE bir toplamdır, 10 kayıtlık grupta 10 terim vardır. <b>Neden kare?</b> Eksi ve artı farklar birbirini götürmesin, büyük hatalar daha çok cezalansın.</div>
<details class="example"><summary>Elle örnek: 10 ev</summary><div class="inner">
<div class="table-wrap"><table>
<tr><th>Ev</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
<tr><th>m²</th><td>50</td><td>60</td><td>70</td><td>80</td><td>95</td><td>110</td><td>120</td><td>135</td><td>150</td><td>170</td></tr>
<tr><th>Fiyat (mn)</th><td>2,0</td><td>2,2</td><td>2,4</td><td>2,6</td><td>3,8</td><td>4,0</td><td>4,2</td><td>6,0</td><td>6,2</td><td>6,4</td></tr>
</table></div>
<p><b>Kök:</b> ortalama 3,98, SSE 26,436. Aday eşikler ardışık iki m²'nin ortası: 10 ev → 9 eşik.</p>
<div class="table-wrap"><table>
<tr><th>Eşik</th><th>Sol · SSE</th><th>Sağ · SSE</th><th>Toplam</th></tr>
<tr><td>55</td><td>1 ev · 0</td><td>9 ev · 22,080</td><td>22,080</td></tr>
<tr><td>65</td><td>2 ev · 0,020</td><td>8 ev · 17,580</td><td>17,600</td></tr>
<tr><td>75</td><td>3 ev · 0,080</td><td>7 ev · 12,777</td><td>12,857</td></tr>
<tr><td>87,5</td><td>4 ev · 0,200</td><td>6 ev · 7,420</td><td>7,620</td></tr>
<tr><td>102,5</td><td>5 ev · 2,000</td><td>5 ev · 5,392</td><td>7,392</td></tr>
<tr><td>115</td><td>6 ev · 3,633</td><td>4 ev · 3,080</td><td>6,713</td></tr>
<tr><td><b>127,5</b></td><td>7 ev · 5,234</td><td>3 ev · 0,080</td><td><b>5,314</b></td></tr>
<tr><td>142,5</td><td>8 ev · 12,960</td><td>2 ev · 0,020</td><td>12,980</td></tr>
<tr><td>160</td><td>9 ev · 19,929</td><td>1 ev · 0</td><td>19,929</td></tr>
</table></div>
<p><b>Kök: m² ≤ 127,5.</b> SSE 26,436 → 5,314, azalma 21,12. <b>Sağ dal</b> 3 ev: "bölme için en az 4 kayıt" kuralıyla yaprak, cevap 6,2. <b>Sol dal</b> 7 ev: en iyi eşik 87,5 (0,200 + 0,080 = 0,280); derinlik 2 sınırında ağaç biter.</p>
<div class="formula">m² ≤ 87,5 → 2,3 mn · 87,5 &lt; m² ≤ 127,5 → 4,0 mn · m² &gt; 127,5 → 6,2 mn · Toplam SSE: 26,436 → 0,36</div>
</div></details>
<div data-demo="sse"></div>
<div class="box warn"><span class="label">Basamaklı tahmin</span>Ağaç yalnızca yaprak sayısı kadar farklı değer söyler: 96 m² de 125 m² de 4,0 alır. <b>Eğitim aralığının dışına çıkamaz:</b> 300 m²'lik eve de 6,2 der.</div>
<p><b>Model ağacı (M5, Quinlan 1992):</b> yaprakta sabit sayı yerine küçük doğrusal model vardır. İlk yaprak 1,00 + 0,020 × m², ikincisi 2,29 + 0,0158 × m², üçüncüsü 4,48 + 0,0114 × m². 100 m²: regresyon ağacı 4,0, model ağacı 3,87 der. Bedeli her yaprakta ayrı bir regresyondur.</p>

<h2>3. Maliyet-karmaşıklık budaması: α nereden gelir?</h2>
<div class="formula">α(düğüm) = (yaprak yapınca hata − alt ağacın hatası) ÷ (alt ağaçtaki yaprak − 1)</div>
<p>Bu sayı dalın <b>yaprak başına önlediği hatadır</b>. En küçük α'lı düğüm en az iş gören daldır: <b>önce o kesilir</b> (en zayıf halka). Sonra hesap yenilenir, tek yaprak kalana dek sürer. Sonuç bir α dizisi ve iç içe ağaç dizisidir.</p>
<details class="example"><summary>Elle örnek: 13 müşterilik Beden ağacı</summary><div class="inner">
<div class="formula">t1 Boy = Uzun? → Evet: L (3) · Hayır: t2 Kilo ≤ 60? → Hayır: M (5) · Evet: t3 Kilo ≤ 55,5? → Evet: S (3) · Hayır: t4 Kilo ≤ 57? → M (1) / S (1)</div>
<div class="table-wrap"><table>
<tr><th>Düğüm</th><th>Yaprak yapınca</th><th>Alt ağaç</th><th>α</th></tr>
<tr><td>t4</td><td>1 M · 1 S → 1 hata</td><td>2 yaprak · 0</td><td>(1−0)÷1 = 1</td></tr>
<tr><td><b>t3</b></td><td>4 S · 1 M → 1 hata</td><td>3 yaprak · 0</td><td><b>(1−0)÷2 = 0,5</b></td></tr>
<tr><td>t2</td><td>4 S · 6 M → 4 hata</td><td>4 yaprak · 0</td><td>4÷3 = 1,33</td></tr>
<tr><td>t1</td><td>4 S · 6 M · 3 L → 7 hata</td><td>5 yaprak · 0</td><td>7÷4 = 1,75</td></tr>
</table></div>
<p>En zayıf halka <b>t3</b> (t4 ile birlikte kesilir). İkinci tur: t2 (4−1)÷(2−1) = 3 ve kök (7−1)÷(3−1) = 3; eşit oldukları için ikisi birden kesilir.</p>
<div class="table-wrap"><table>
<tr><th>α aralığı</th><th>Ağaç</th><th>Hata</th></tr>
<tr><td>0 ≤ α &lt; 0,5</td><td>5 yaprak</td><td>0</td></tr>
<tr><td>0,5 ≤ α &lt; 3</td><td>3 yaprak</td><td>1</td></tr>
<tr><td>α ≥ 3</td><td>1 yaprak: herkese M</td><td>7</td></tr>
</table></div>
<p><b>α = 1:</b> 5 yaprak 0+5 = 5 · 3 yaprak 1+3 = <b>4</b> · 1 yaprak 7+1 = 8. Kazanan 3 yapraklı ağaçtır ve kuralları 12 müşterilik Hafta 6 ağacıyla aynıdır: budama tek müşterinin yarattığı "55,5–57 kg ise M" kuralını attı.</p>
</div></details>
<p><b>Hangi α?</b> Doğrulama karar verir. Test ile seçmek sızıntıdır. scikit-learn: <code>cost_complexity_pruning_path</code> diziyi verir, <code>ccp_alpha</code> seçilen değerdir; yapraklardaki Gini ile çalıştığı için α'lar farklı ölçekte çıkar. <b>1-SE kuralı:</b> en düşük hatanın bir standart hata içindeki en basit ağaç seçilir.</p>

<h2>4. Vekil bölme</h2>
<p>Kilo bilinmiyorsa kök "Kilo ≤ 60?" cevaplanamaz. CART her düğümde asıl soruyu en iyi taklit eden <b>vekil</b> (surrogate) soruyu saklar. Kalite: kayıtları asıl soruyla aynı tarafa gönderme oranı.</p>
<div class="table-wrap"><table>
<tr><th>Aday</th><th>12 müşteride uyum</th></tr>
<tr><td><b>Boy = Kısa?</b></td><td><b>9 / 12</b></td></tr>
<tr><td>Çoğunluk tarafına gönder (soru yok)</td><td>8 / 12</td></tr>
<tr><td>Cinsiyet = K?</td><td>7 / 12</td></tr>
<tr><td>Boy = Orta?</td><td>6 / 12</td></tr>
</table></div>
<div class="box warn"><span class="label">Şart</span>Vekil, <b>çoğunluk kuralını geçmelidir.</b> Burada yalnız Boy = Kısa geçer; Cinsiyet geçemez. Vekil de eksikse sonraki vekile, o da yoksa çoğunluk tarafına gidilir.</div>
<div class="table-wrap"><table>
<tr><th>Yöntem</th><th>Eksik değerli kayıt</th></tr>
<tr><td>C4.5</td><td>Kesirli olarak bütün dallara bölünür</td></tr>
<tr><td>CART</td><td>Vekil soruya göre bir dala gider</td></tr>
<tr><td>scikit-learn (1.3+)</td><td>Vekil kullanmaz, en iyi sonucu veren tarafa gönderir</td></tr>
</table></div>

<h2>5. Dengesiz veri: sınıf ağırlıkları</h2>
<p>3.000 makinenin %5,6'sı (168) arızalı; test 900 makine, 51 arıza.</p>
<div class="table-wrap"><table>
<tr><th></th><th>Tembel model</th><th>Ağırlıksız ağaç</th><th>class_weight='balanced'</th></tr>
<tr><td>Doğruluk</td><td>%94,3</td><td>%95,8</td><td>%88,3</td></tr>
<tr><td>Yakalanan arıza</td><td>0 / 51</td><td>15 / 51</td><td><b>43 / 51</b></td></tr>
<tr><td>Yanlış alarm</td><td>0</td><td>2</td><td>97</td></tr>
</table></div>
<div class="formula">ağırlık = n ÷ (2 × sınıftaki kayıt)  →  arıza 3000÷336 ≈ 8,9 · sağlam 3000÷5664 ≈ 0,53  →  1 arıza ≈ 17 sağlam</div>
<div class="box key"><span class="label">Doğruluk düştü, model iyileşti</span>Karar hatanın maliyetiyle verilir. Kaçan arıza yanlış alarmın 20 katı pahalıysa: ağırlıksız 36×20+2 = 722, ağırlıklı 8×20+97 = <b>257</b>. 5 katıysa: 182'ye karşı <b>137</b>.</div>

<h2>6. Öznitelik önemi</h2>
<p>Önem, o özniteliğin bölmelerindeki karışıklık azalmalarının düğümdeki kayıt payıyla tartılıp toplanması ve toplamı 1 olacak biçimde ölçeklenmesidir.</p>
<details class="example"><summary>Elle örnek: Beden ağacı</summary><div class="inner">
<p>Kök Gini = 0,6528. Kilo ≤ 60: sol saf, sağ 5 M · 3 L Gini 0,469; 0,469 × 8/12 = 0,3125 → katkı <b>0,340</b>. Boy = Uzun: 0,469 × 8/12 = <b>0,3125</b>.</p>
<div class="formula">Kilo 0,340 ÷ 0,6528 = 0,521 · Boy 0,3125 ÷ 0,6528 = 0,479 · Cinsiyet 0</div>
</div></details>
<div class="box warn"><span class="label">Tuzak: önem ≠ neden</span>x1'e neredeyse aynı bir ikiz (korelasyon 0,999) eklenince önemler 0,673 / 0,327'den x1 0,366 · ikiz 0,379 · x3 0,255 oldu. <b>Yüksek önem sebep demek değildir; düşük önem işe yaramaz demek değildir</b> (ikizi varsa bölünmüştür). Önem modelin neye dayandığını söyler, dünyanın nasıl işlediğini değil. Önce korelasyona bakın.</div>
<p><b>MDI'nin yanlılıkları:</b> çok değerli özniteliklere yanlıdır ve eğitim verisinde hesaplanır. <b>Permütasyon önemi</b> değerleri karıştırıp doğruluk düşüşüne bakar; ama ilişkili özniteliklerde o da yanıltır.</p>

<h2>7. Neden bir ağaç yetmez?</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Yanlılık (bias)</th><th>Varyans (variance)</th></tr>
<tr><td>Nedir?</td><td>Sistematik hata; atışların merkezden kayması</td><td>Kararsızlık; atışların dağılması</td></tr>
<tr><td>Bozuk tartı (gerçek 70)</td><td>72 · 72 · 72 · 72 · 72</td><td>66 · 74 · 69 · 75 · 67</td></tr>
<tr><td>Kim?</td><td>Sığ ağaç, fazla basit model</td><td>Derin ağaç, ezberleyen model</td></tr>
<tr><td>Ortalama almak</td><td>İşe yaramaz: 72'lerin ortalaması 72</td><td>İşe yarar: ortalama 70'e yaklaşır</td></tr>
</table></div>
<div class="table-wrap"><table>
<tr><th>Gürültülü iki ay verisi</th><th>Eğitim</th><th>Test</th><th>Teşhis</th></tr>
<tr><td>Sığ ağaç (derinlik 2)</td><td>%87,4</td><td>%88,7</td><td>Biraz yanlı</td></tr>
<tr><td>Derin ağaç</td><td>%100</td><td>%86,7</td><td>Varyansı yüksek</td></tr>
<tr><td>200 derin ağacın oylaması</td><td>%100</td><td>%90,7</td><td>Varyans düştü</td></tr>
</table></div>
<div class="box tip"><span class="label">Teşhis tablosu</span>Eğitim düşük, fark küçük → yanlılık. Eğitim çok yüksek, fark büyük → varyans. Eğitim yüksek, fark küçük → iyi model.</div>
<div class="formula">Beklenen hata = Yanlılık² + Varyans + σ² (indirgenemez gürültü)   ·   Var(ortalama) = ρσ² + (1−ρ)σ²/B</div>
<h3>Kalabalığın bilgeliği</h3>
<p>Her biri %65 doğru, hataları bağımsız n model: <b>1 → %65,0 · 5 → %76,5 · 25 → %94,0 · 101 → %99,9</b>. Aynı hatayı yapıyorlarsa kaç tane olursa olsun %65. Tek model %50'nin altındaysa oylama işi kötüleştirir (Condorcet, 1785).</p>
<div data-demo="vote"></div>

<h2>8. Topluluk yöntemleri</h2>
<p><b>Bootstrap:</b> n kayıtlık veriden <b>yerine koyarak</b> n kayıt çekilir. <b>Bagging</b> (Breiman 1996) her örneklemle ağaç kurup oylatır.</p>
<div class="formula">Bir kaydın hiç gelmeme olasılığı (1 − 1/n)ⁿ ≈ 1/e ≈ 0,368  →  her ağaç verinin ≈ %63,2'sini görür</div>
<p><b>OOB (out-of-bag):</b> Görülmeyen %36,8 o ağaç için hazır doğrulamadır; her kayıt onu görmeyen ağaçların oyuyla tahmin edilir. <b>Test verisinin yerini tutmaz.</b></p>
<p><b>Rastgele orman</b> (Breiman 2001) her düğümde özniteliklerin rastgele alt kümesine bakar: sınıflandırmada √p (30 → 5). Bu 5 sütun ağaç başına değil, <b>her düğümde yeniden</b> çekilir. Böylece ρ düşer, ağaçlar çeşitlenir.</p>
<div class="table-wrap"><table>
<tr><th>Meme kanseri</th><th>Test</th><th>OOB</th></tr>
<tr><td>Tek ağaç (16 yaprak)</td><td>%91,8</td><td>—</td></tr>
<tr><td>Bagging · 200 ağaç</td><td>%94,2</td><td>%96,0</td></tr>
<tr><td>Rastgele orman · 200 ağaç</td><td>%93,6</td><td>%96,7</td></tr>
</table></div>
<p><b>Ağaç sayısı:</b> 1 → %91,2 · 5 → %94,2 · 25 → %94,2 · 100 → %94,2. Daha çok ağaç aşırı öğrenmeye yol açmaz, yalnız yavaşlatır. <b>Bedeli yorumlanabilirliktir:</b> proje şartında orman ikinci model olabilir, açıklanabilir model değil.</p>
<h3>Boosting</h3>
<p>Ağaçlar sırayla kurulur, her yeni ağaç öncekinin hatasına odaklanır. AdaBoost yanlış kayıtların ağırlığını artırır; Gradient Boosting artıkları öğrenir.</p>
<details class="example"><summary>Elle örnek: 10 ev, iki tek-soruluk ağaç</summary><div class="inner">
<p>1. ağaç: m² ≤ 127,5 → 3,03, değilse 6,20. SSE 5,314. Artık = gerçek − tahmin: −1,03 · −0,83 · −0,63 · −0,43 · +0,77 · +0,97 · +1,17 · −0,2 · 0 · +0,2.</p>
<p>2. ağaç m²'ye sorar, <b>artığı</b> tahmin eder: m² ≤ 87,5 → −0,73, değilse +0,49. Toplam tahmin 2,30 · 3,51 · 6,69. <b>SSE 5,314 → 1,776.</b> 8–10. evler artık fazla tahmin ediliyor; üçüncü ağaç bunu düzeltirdi.</p>
</div></details>
<div class="table-wrap"><table>
<tr><th></th><th>Bagging · orman</th><th>Boosting</th></tr>
<tr><td>Ağaçlar</td><td>Bağımsız, paralel</td><td>Sırayla, öncekine bağlı</td></tr>
<tr><td>Ağaç türü</td><td>Derin (varyansı yüksek)</td><td>Sığ (yanlılığı yüksek)</td></tr>
<tr><td>Neyi düşürür?</td><td><b>Varyansı</b></td><td><b>Yanlılığı</b></td></tr>
<tr><td>Örnek</td><td>Rastgele orman</td><td>AdaBoost · Gradient Boosting · XGBoost</td></tr>
</table></div>
<div class="box warn"><span class="label">Tersini yaparsak</span>Ormanı sığ ağaçlarla kurmak: oylama yanlılığı düzeltemez. Boosting'i derin ağaçlarla kurmak: ilk ağaç ezberler, artıklar sıfırlanır, sonrası gürültü öğrenir.</div>

<h2>9. Vaka: Amazon'un işe alım modeli</h2>
<p>Reuters, Jeffrey Dastin, 10 Ekim 2018. Edinburgh'daki ekip 2014'te özgeçmişlere 1–5 yıldız veren model kurmaya başladı. Son 10 yılın, çoğu erkeklerden gelen özgeçmişleriyle eğitildi. "women's" kelimesini cezalandırdı, iki kadın kolejinin mezunlarının puanını düşürdü. 2015'te fark edildi, ekip 2017 başında dağıtıldı.</p>
<div class="box key"><span class="label">Üç ders</span><b>Model geçmişi öğrenir:</b> hedef "kim işe alındı" ise modelin öğrendiği "en iyi aday" değil "geçmişte kimin seçildiği"dir. <b>Sütunu silmek yetmez:</b> cinsiyet yoktu ama vekilleri (kelime, okul) vardı. <b>Önem tablosuna bakın:</b> "women's" gibi terim alarm işaretidir.</div>
<p>Haber modelin türünü açıklamaz; vaka bir "karar ağacı hatası" değil, vekil öznitelik mekanizmasının örneğidir.</p>
`,
}
