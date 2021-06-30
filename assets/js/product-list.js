// USD RATE DAILY
let usdIdrRate = 14250;
let myRate = 0.15;
let myRangePrice = 7.5;

// IMAGE LOCATION
let imageUrl = `assets/img/products/`;

var productList = 
`
<product-list>
	<product>
		<id>1</id>
		<name>Trisodium Phosphate</name>
		<category>Phosphate</category>
		<formula>Na3PO4</formula>
		<application>Industrial</application>
		<purity>98%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk Putih</appearance>
		<price>0.40</price>
		
		<images>
			<image>${imageUrl}trisodium-phosphate-1.jpg</image>
			<image>${imageUrl}trisodium-phosphate-2.jpg</image>
		</images>

		<description>
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Penghambat skala boiler.&lt;/li&gt;
				&lt;li&gt;Memperbaiki untuk percetakan dan pencelupan bahan fabric pakaian.&lt;/li&gt;
				&lt;li&gt;Mercerisasi bahan fabric pakaian.&lt;/li&gt;
				&lt;li&gt;Bahan pengental lateks karet.&lt;/li&gt;
				&lt;li&gt;Bahan pelembut untuk pencelupan kertas.&lt;/li&gt;
				&lt;li&gt;Penghilang minyak dan dekontminasi kimia industri metallic.&lt;/li&gt;
				&lt;li&gt;Akselerator yang sangat baik dalam solusi fotografi.&lt;/li&gt;
				&lt;li&gt;Perekat kertas lilin berbasis-pH.&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
    <id>2</id>
    <name>Sodium Thiosulphate</name>
    <category>Sulphate</category>
    <formula>Na2S2O3.5H2O</formula>
    <application>plating, leather, sulfur dye</application>
    <purity>99%</purity>
    <brand>-</brand>
    <origin>China</origin>
    <package>Bag</package>
    <weight>25</weight>
    <color>Putih</color>
    <appearance>Kristal Transparan</appearance>
    <price>0.52</price>

    <images>
			<image>${imageUrl}sodium-thiosulphate-1.jpg</image>
			<image>${imageUrl}sodium-thiosulphate-2.jpg</image>
    </images>

    <description>
			Nama Lain: Sodium Thiosulphate Anhydrous&lt;br&gt;
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan dalam proses fotografi&lt;/li&gt;
				&lt;li&gt;Aplikasi lempeng listrik dalam baja/besi&lt;/li&gt;
				&lt;li&gt;Digunakan untuk kulit sistentis&lt;/li&gt;
				&lt;li&gt;Digunakan untuk pengujian PH zat pemutih&lt;/li&gt;
				&lt;li&gt;Dalam pengolahan air limbah, menetralkan air yang diputihkan dan diklorinasi&lt;/li&gt;
				&lt;li&gt;Menurunkan kadar klorin di kolam renang dan spa&lt;/li&gt;
				&lt;li&gt;Digunakan dalam pemutih&lt;/li&gt;
				&lt;li&gt;Digunakan dalam industri kertas&lt;/li&gt;
				&lt;li&gt;Digunakan untuk menghilangkan bekas iodine&lt;/li&gt;
			&lt;/ol&gt;
    </description>
	</product>

	<product>
    <id>3</id>
    <name>Sodium Bicarbonate</name>
    <category>Food</category>
    <formula>NAHCO3</formula>
    <application>Food and Detergent</application>
    <purity>99%</purity>
    <brand>Malan</brand>
    <origin>China</origin>
    <package>Bag</package>
    <weight>25</weight>
    <color>Putih</color>
    <appearance>Bubuk</appearance>
    <price>0.32</price>

    <images>
			<image>${imageUrl}sodium-bicarbonate-malan-1.jpg</image>
			<image>${imageUrl}sodium-bicarbonate-malan-2.jpg</image>
    </images>

    <description>
			Nama Lain: Baking soda / Soda Kue&lt;br&gt;
			*note*
    </description>
	</product>

	<product>
		<id>4</id>
		<name>Sodium Tripolyphosphate</name>
		<category>Phosphate</category>
		<formula>Na5O10P3</formula>
		<application>Industrial</application>
		<purity>94%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Granular Putih</color>
		<appearance>Bubuk Putih</appearance>
		<price>0.40</price>
		
		<images>
			<image>${imageUrl}sodium-tripolyphosphate-1.jpg</image>
			<image>${imageUrl}sodium-tripolyphosphate-2.jpg</image>
		</images>

		<description>
			Nama Lain: Sodium Tripolyphosphate STPP&lt;br&gt;&lt;br&gt;
			Kegunaan: Dalam dunia makanan, STPP digunakan sebagai pengawet. Sodium Tripolyphosphate juga dapat digunakan untuk mengawetkan makanan seperti daging merah, unggas dan makanan laut.&lt;br&gt;
			Mayoritas STPP digunakan sebagai bahan komponen dari deterjen komersial. Kegunaan lainnya juga untuk keramik, penyamakan kulit, penghambat api, kertas, tekstik, karet, fermentasi dan anti-beku.
		</description>
	</product>

	<product>
		<id>5</id>
		<name>Caustic Soda Flakes</name>
		<category>Caustic Soda</category>
		<formula>NAOH</formula>
		<application>Food and Industrial</application>
		<purity>-</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Flake/Serpihan</appearance>
		<price>0.40</price>
		
		<images>
			<image>${imageUrl}caustic-soda-flakes-1.jpg</image>
			<image>${imageUrl}caustic-soda-flakes-2.jpg</image>
		</images>

		<description>
			Titik didih: 1390°C&lt;br&gt;
			Titik lebur: 318.4°C&lt;br&gt;&lt;br&gt;

			Kegunaan:&lt;br&gt;
			Banyak digunakan dalam dunia industri seperti proses kimia (40%), manufaktur pulp and paper (17%), treatment air (5%), produksi alumunium (8%), sabun, deterjen dan tekstil (12%) dan lain-lain.
		</description>
	</product>

	<product>
		<id>6</id>
		<name>Calcium Chloride</name>
		<category>Desiccant</category>
		<formula>CACL</formula>
		<application>Food &amp; Industrial</application>
		<purity>74-77%, 94-96%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Serpihan, Bubuk, Granular</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}calcium-chloride-1.jpg</image>
			<image>${imageUrl}calcium-chloride-2.jpg</image>
		</images>

		<description>
			Nama Lain: Calcium Chloride Dihydrate&lt;br&gt;&lt;br&gt;
			Kegunaan:&lt;br&gt;
			Kalsium klorida banyak digunakan dalam pencairan es, pengeboran minyak dan gas, penyerap kelembaban, pengering, “removing agent”, pengumpul debu, pendingin, anti-beku dan banyak diaplikasikan ke dalam industri karet dan minyak bumi.
		</description>
	</product>

	<product>
		<id>7</id>
		<name>Sodium Hydrosulfite</name>
		<category>Bleaching</category>
		<formula>Na2S2O4</formula>
		<application>Industrial</application>
		<purity>85-90%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Drum</package>
		<weight>50</weight>
		<color>Putih</color>
		<appearance>Bubuk</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}sodium-hydrosulfite-1.jpg</image>
			<image>${imageUrl}sodium-hydrosulfite-2.jpg</image>
		</images>

		<description>
			Nama Lain: Sodium Dithionite / Sodium Hydrosulfite / Sodium Hidrosulfat&lt;br&gt;&lt;br&gt;
			Catatan: Mudah terbakar jika terdapat cairan&lt;br&gt;&lt;br&gt;
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan dalam industri tekstil untuk pewarna, pembersihan, pencetakan &lt;/li&gt;
				&lt;li&gt;Digunakan sebagai bahan pemutih yang paling sering digunakan dalam industry paper and pulp&lt;/li&gt;
				&lt;li&gt;Digunakan sebagai agent reduksi dalam industri kimia&lt;/li&gt;
				&lt;li&gt;Dapat digunakan dalam industri sabun dan deterjen&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>8</id>
		<name>Sodium Metabisulfite</name>
		<category>Food</category>
		<formula>Na2S2O5</formula>
		<application>Food, Cleaning Agent &amp; Industrial</application>
		<purity>97%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}sodium-metabisulfite-1.jpg</image>
			<image>${imageUrl}sodium-metabisulfite-2.jpg</image>
		</images>

		<description>
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan sebagai zak reduksi di dalam adonan kue (kue dan kerupuk)&lt;/li&gt;
				&lt;li&gt;Digunakan pula sebagai zat pengawet dalam untuk makanan yang di panggang, anggur, buah kering dan selai&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>9</id>
		<name>Ammonium Bicarbonate</name>
		<category>Food</category>
		<formula>NH4HCO3</formula>
		<application>Food &amp; Industrial</application>
		<purity>99%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}ammonium-bicarbonate-1.jpg</image>
			<image>${imageUrl}ammonium-bicarbonate-2.jpg</image>
		</images>

		<description>
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan dalam alat pemadam kebakaran&lt;/li&gt;
				&lt;li&gt;Baking powder&lt;/li&gt;
				&lt;li&gt;Alat pendingin di pabrik&lt;/li&gt;
				&lt;li&gt;Dipakai dalam pembuatan plastik, karet, pewarna keramik, dan pigmen&lt;/li&gt;
				&lt;li&gt;Dan dapat digunakan pula dalam produk pembersih sebagai sumber amonia&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>10</id>
		<name>Sodium Benzoate</name>
		<category>Food</category>
		<formula>C6H5COOH</formula>
		<application>Food &amp; Industrial</application>
		<purity>99%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk atau Granular</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}sodium-benzoate-1.jpg</image>
			<image>${imageUrl}sodium-benzoate-2.jpg</image>
		</images>

		<description>
			Nama Lain: Benzoic Acid&lt;br&gt;
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Makanan: menghambat pertumbuhan bakteri jamur, dan mikroba lain yang berpotensi berbahaya dalam makanan, sehingga mencegah pembusukan. Sangat efektif dalam makanan asam, sehingga sering digunakan dalam makanan seperti soda, jus lemon botol, acar, jeli, saus salad, kecap dan bumbu lainnya&lt;/li&gt;
				&lt;li&gt;Obat: digunakan sebagai pengawet di beberapa obat, terutama dalam obat-obatan cair seperti sirup obat batuk&lt;/li&gt;
				&lt;li&gt;Kegunaan lainnya: digunakan sebagai pengawet kosmetik dan produk perawatan pribadi, seperti produk rambut, tissue bayi, pasta gigi dan obat kumur&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>11</id>
		<name>Acetic Acid</name>
		<category>Food</category>
		<formula>C2H4O2</formula>
		<application>Food &amp; Industrial</application>
		<purity>99%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Drum</package>
		<weight>200</weight>
		<color>Transparent</color>
		<appearance>Cairan</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}acetic-acid-1.jpg</image>
		</images>

		<description>
			Nama Lain: Acetic Acid Glacial&lt;br&gt;
			Kepadatan: 1.049 g/ML: 25°C&lt;br&gt;
			Titik lebur: 16.2 °C&lt;br&gt;
			Titik didih: 117-118 °C&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Larutan encer yang digunakan secara luas sebagai asam cuka&lt;/li&gt;
				&lt;li&gt;Membersihkan, mencuci pakaian, memasak dan banyak keperluan rumah tangga lainnya&lt;/li&gt;
				&lt;li&gt;Di dalam dunia pertanian, biasa dipakai untuk melawan pertumbuhan bakteri dan jamur&lt;/li&gt;
				&lt;li&gt;Kegunaan lainnya: pembuatan pewarna, organik sistesis, pelarut dengan sifat larutan yang sangat baik dan bisa di pakai sebagai re-agen kromatografi&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>12</id>
		<name>Barium Carbonate</name>
		<category>Carbonate</category>
		<formula>BaCO3</formula>
		<application>Industrial</application>
		<purity>99.2%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Transparent</color>
		<appearance>Bubuk</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}barium-carbonate-1.jpg</image>
			<image>${imageUrl}barium-carbonate-2.jpg</image>
		</images>

		<description>
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Barium carbonate biasa digunakan dalam produksi kaca khusus, glasir, industri batu bata dan ubin, industri keramik dan ferit&lt;/li&gt;
				&lt;li&gt;Kegunaan lainnya: digunakan untuk menghilangkan sulfat dalam produksi asam fosfat dan elektrolisis alkali klorin&lt;/li&gt;
			&lt;/ol&gt;

			Perhatian:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Bahan kimia beracun, berbahaya. Disimpan di tempat yang kering, tidak ada kerusakan atau kebocoran&lt;/li&gt;
				&lt;li&gt;Pekerja harus membersihkan pakaian dan badan setelah menyentuh barang&lt;/li&gt;
				&lt;li&gt;Jangan dicampur dengan asam dan makanan&lt;/li&gt;
			&lt;/ol&gt;
			
		</description>
	</product>

	<product>
		<id>13</id>
		<name>Barium Chloride</name>
		<category>Chloride</category>
		<formula>BaCl2H4O2</formula>
		<application>Industrial</application>
		<purity>99%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk Kristal</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}barium-chloride-1.jpg</image>
			<image>${imageUrl}barium-chloride-2.jpg</image>
		</images>

		<description>
			Nama Lain: Barium chloride Dihydrate&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Dalam dunia industri, barium klorit digunakan untuk pemurnian larutan air garam di pabrik klorin kaustik&lt;/li&gt;
				&lt;li&gt;Digunakan untuk pembuatan garam tahan panas, pengerasan baja, pembuatan pigmen dan sering digunakan untuk membuat garam barium lainnya&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>14</id>
		<name>Caporite</name>
		<category>Bleaching</category>
		<formula>Ca(clo)2</formula>
		<application>Industrial</application>
		<purity>65-70%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Drum</package>
		<weight>45-50</weight>
		<color>Putih</color>
		<appearance>Granular</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}calcium-hypochlorite-1.jpg</image>
			<image>${imageUrl}calcium-hypochlorite-2.jpg</image>
		</images>

		<description>
			Nama Lain: Calcium Hypochlorite/Caporite/Kaporit&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Bleaching Powder, Garam Kalsium&lt;/li&gt;
				&lt;li&gt;Digunakan untuk penjernihan air dan disinfektan untuk kolam renang&lt;/li&gt;
				&lt;li&gt;Digunakan untuk pemutihan dalam industri kertas dan tekstil, dan sering diberi nama: agen pemuth&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>15</id>
		<name>Ferric Chloride</name>
		<category>Chloride</category>
		<formula>Ca(FeCl3)2</formula>
		<application>Water Treatment &amp; Industrial</application>
		<purity>96%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Drum</package>
		<weight>45-50</weight>
		<color>Hitam</color>
		<appearance>Bubuk, Flake/Serpihan</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}ferric-chloride-1.jpg</image>
			<image>${imageUrl}ferric-chloride-2.jpg</image>
		</images>

		<description>
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan untuk pengolahan air di industri&lt;/li&gt;
				&lt;li&gt;Sangat korosif untuk PCB&lt;/li&gt;
				&lt;li&gt;Agen klorin danam industri metallurgical, oksidan dalam industri pewarnaan, dan agen klorin dalam organik sistesis&lt;/li&gt;
				&lt;li&gt;Kadang digunakan untuk membuat garam besi, pigmen sebagai bahan baku mentah&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>16</id>
		<name>Sodium Sulphate</name>
		<category>Sulphate</category>
		<formula>Ca(Na2SO4)2</formula>
		<application>Detergen &amp; Industrial</application>
		<purity>99%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>50</weight>
		<color>Putih</color>
		<appearance>Bubuk Kristal</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}sodium-sulphate-1.jpg</image>
			<image>${imageUrl}sodium-sulphate-2.jpg</image>
		</images>

		<description>
			Nama Lain: Sodium Suplhate Anhydrous, Sulfate of Soda &amp; Glaber Salt&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Detergen: Sebagai pengisi untuk deterjen rumahan, penggunaan +- 50% dari dunia&lt;/li&gt;
				&lt;li&gt;Untuk produksi Sodium Silicate&lt;/li&gt;
				&lt;li&gt;Sebagai bahan baku pembuatan kaca, pengganti soda ash&lt;/li&gt;
				&lt;li&gt;Digunakan dalam proses pembuatan kertas&lt;/li&gt;
				&lt;li&gt;Digunakan dalam industri tekstil sebagai pemintalan&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>17</id>
		<name>Zinc Chloride</name>
		<category>Chloride</category>
		<formula>ZNCL2</formula>
		<application>Industrial</application>
		<purity>95-98%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}zinc-chloride-1.jpg</image>
			<image>${imageUrl}zinc-chloride-2.jpg</image>
		</images>

		<description>
			Nama Lain: Sodium Suplhate Anhydrous, Sulfate of Soda &amp; Glaber Salt&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan sebagai zak elektrolit baterai&lt;/li&gt;
				&lt;li&gt;Alat dehidrasi atau kondensasi dalam industri senyawa organik&lt;/li&gt;
				&lt;li&gt;Resin activator&lt;/li&gt;
				&lt;li&gt;Alat sizing dalam industri pencelupan tenun&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>18</id>
		<name>Sodium Nitrate</name>
		<category>Nitrate</category>
		<formula>NaNO3</formula>
		<application>Industrial</application>
		<purity>99%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih, Kuning</color>
		<appearance>Bubuk</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}sodium-nitrate-1.jpg</image>
		</images>

		<description>
			Nama Lain: Nitrate of Soda, Soda Nitrat, Chile Saltpeter&lt;br&gt;
			Bentuk: Tidak bewarna, tidak berbau, senyawa Kristal&lt;br&gt;

			Kegunaan: Digunakan untuk membuat kalium nitrat, pupuk, produksi kaca berkekuatan tinggi, pembuatan beberapa obat-obatan dan untuk mengawetkan daging.
		</description>
	</product>

	<product>
		<id>19</id>
		<name>Oxalic Acid</name>
		<category>Acid</category>
		<formula>H2C2O4</formula>
		<application>Industrial</application>
		<purity>99.6%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk Kristal</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}oxalic-acid-1.jpg</image>
			<image>${imageUrl}oxalic-acid-2.jpg</image>
		</images>

		<description>
			Nama Lain: Ethanedioic acid&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Bahan pemurni dalam industri farmasi, seperti antibiotic&lt;/li&gt;
				&lt;li&gt;Zak pendendap dalam pengolahan mineral tanah&lt;/li&gt;
				&lt;li&gt;Bahan pemutih dalam tekstil dan pulp&lt;/li&gt;
				&lt;li&gt;Pengilang karat untuk perawatan logam&lt;/li&gt;
				&lt;li&gt;Obat grinding, contoh: pemolesan marmer&lt;/li&gt;
				&lt;li&gt;Pengolahan air limbah dan menghilangkan kalsium dari air&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>20</id>
		<name>Magnesium Sulfate</name>
		<category>Sulphate</category>
		<formula>MgSO4</formula>
		<application>Industrial</application>
		<purity>98%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk, Granular</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}magnesium-sulfate-1.jpg</image>
			<image>${imageUrl}magnesium-sulfate-2.jpg</image>
		</images>

		<description>
			Nama Lain: Magnesium Sulphate Anhydrous, Magnesium Sulphate&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Industri: Dalam industri, digunakan untuk memproduksi ragi, MSG, minuman, air mineral, garam kesehatan, kristal laut dan stabilizer kalsium hidrogen fosfat dalam produksi pasta gigi.&lt;/li&gt;
				&lt;li&gt;Makanan: Digunakan dalam aditif makanan untuk suplemen nutrisi, bahan pengawet, penambah rasa dan pembantu proses makanan&lt;/li&gt;
				&lt;li&gt;Agrikultur: komponen klorofil dan pigmen. Magnesium dapat membantu dalam pebentukan karbohidrat, protein dan lemak.&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>21</id>
		<name>Formic Acid</name>
		<category>Acid</category>
		<formula>CHOOH</formula>
		<application>Industrial</application>
		<purity>85-94%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Drum</package>
		<weight>25</weight>
		<color>Transparan</color>
		<appearance>Cairan</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}formic-acid-1.jpg</image>
		</images>

		<description>
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Sebagai pengawet dan antibakteri dalam pakan ternak&lt;/li&gt;
				&lt;li&gt;Ketika disemprotkan ke jerami (atau semacamnya) untuk menahan proses pembusukan&lt;/li&gt;
				&lt;li&gt;Industri kulit/leather&lt;/li&gt;
				&lt;li&gt;Industri karet&lt;/li&gt;
				&lt;li&gt;Industri tekstil&lt;/li&gt;
				&lt;li&gt;Industri paper &amp; pulp&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>22</id>
		<name>Nitric Acid</name>
		<category>Acid</category>
		<formula>HNO3</formula>
		<application>Industrial</application>
		<purity>99%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Drum</package>
		<weight>35</weight>
		<color>Transparan</color>
		<appearance>Cairan</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}nitric-acid-1.jpg</image>
		</images>

		<description>
			Kepadatan: 1.649g/cm³
			Titik didih: 83.00℃
			Kegunaan: Digunakan dalam produksi ammonium nitrat untuk pupuk, pembuatan plastik, dan dalam pembuatan pewarna. Dapat digunakan juga untuk membuat: pupuk, pestisida, pewarna, garam dan lain-lain di dalam industri.
		</description>
	</product>

	<product>
		<id>23</id>
		<name>Talcum Powder</name>
		<category>Uncategorized</category>
		<formula>-</formula>
		<application>Industrial</application>
		<purity>-</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}talcum-powder-1.jpg</image>
			<image>${imageUrl}talcum-powder-2.jpg</image>
		</images>

		<description>
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan untuk pembuatan kertas, keramik, plastik, karet, tekstil, farmasi, insektisida pertanian, kosmetik, kulit, dan lain-lain&lt;/li&gt;
				&lt;li&gt;Dipakai untuk: pembuatan pensil tulis, ukiran dan lain-lain.&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>24</id>
		<name>Sodium Silicofluoride</name>
		<category>Silicate</category>
		<formula>Na2SiF6</formula>
		<application>Industrial</application>
		<purity>99%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Kristal Hexagonal</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}sodium-silicofluoride-1.jpg</image>
			<image>${imageUrl}sodium-silicofluoride-2.jpg</image>
		</images>

		<description>
			Nama Lain: Sodium Fluorosilicate&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan sebagai insektisida dan perekat dan dapat digunakan dalam produksi logam&lt;/li&gt;
				&lt;li&gt;Pada saat ini, sodium silicofluoride digunakan dalam penyulingan minyak hingga organic sintesis dan pembuatan obat-obatan&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>25</id>
		<name>Sodium Dichromate</name>
		<category>Uncategorized</category>
		<formula>Na2Cr2O7</formula>
		<application>Industrial</application>
		<purity>99%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Merah/Orange</color>
		<appearance>Kristal Higroskopis</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}sodium-dichromate-1.jpg</image>
			<image>${imageUrl}sodium-dichromate-2.jpg</image>
		</images>

		<description>
			Nama Lain: Sodium Dichromate Anhydrous/Sodium Dichromate/Sodium Bichromate&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan untuk membuat chromium, pewarna dasar, oksidan yang digunakan untuk memproduksi kamper sintesis dan serat sintesis.&lt;/li&gt;
				&lt;li&gt;Di dalam dunia farmasi: oksidan dalam pembuatan tawas amina benzene dan lain-lain&lt;/li&gt;
				
				&lt;li&gt;Digunakan dalam industri percetakan&lt;/li&gt;
				&lt;li&gt;Digunakan dalam industri pelapisan&lt;/li&gt;
				&lt;li&gt;Digunakan dalam industri produk kulit(leather)&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>26</id>
		<name>Sodium Nitrite</name>
		<category>Nitrate</category>
		<formula>NaNO2</formula>
		<application>Industrial</application>
		<purity>98.5%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>25</weight>
		<color>Putih</color>
		<appearance>Bubuk</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}sodium-nitrite-1.jpg</image>
			<image>${imageUrl}sodium-nitrite-2.jpg</image>
		</images>

		<description>
			Nama Lain: Sodium Dichromate Anhydrous/Sodium Dichromate/Sodium Bichromate&lt;br&gt;

			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan untuk mengawetkan daging seperti ham, bacon dan hotdog, dan akan memberikan daging yang diawetkan rasa dan warna yang khas&lt;/li&gt;
				&lt;li&gt;Digunakan dalam dunia farmasi untuk menghambat pertumbuhan bakteri penyebab botulisme dan mencegah pembusukan&lt;/li&gt;
			&lt;/ol&gt;
		</description>
	</product>

	<product>
		<id>27</id>
		<name>Soda Ash Light</name>
		<category>Carbonate</category>
		<formula>Na2CO3</formula>
		<application>Industrial</application>
		<purity>99.2%</purity>
		<brand>-</brand>
		<origin>China</origin>
		<package>Bag</package>
		<weight>40</weight>
		<color>Putih</color>
		<appearance>Bubuk</appearance>
		<price>0</price>
		
		<images>
			<image>${imageUrl}soda-ash-light-1.jpg</image>
			<image>${imageUrl}soda-ash-light-2.jpg</image>
		</images>

		<description>
			Kegunaan:&lt;br&gt;
			&lt;ol&gt;
				&lt;li&gt;Digunakan dalam pabrik kaca untuk pembentukan kaca&lt;/li&gt;
				&lt;li&gt;Digunakan dalam deterjen untuk pembilasan kain wool&lt;/li&gt;
				&lt;li&gt;Digunakan dalam industri kertas untuk pencetakan dan pencelupan sebagai pelembut air&lt;/li&gt;
				&lt;li&gt;Sebagai bahan penetralisir dan peningkat adonan, makanan, kue dan mie dan bahan makanan lainnya&lt;/li&gt;
			&lt;/ol&gt;

		</description>
	</product>



	

</product-list>
`;