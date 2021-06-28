// USD RATE DAILY
let usdIdrRate = 14250;
let myRate = 0.15;
let myRangePrice = 7.5;

// IMAGE LOCATION
let imageUrl = `assets/img/products/`;

let productList = 
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
		<boilingpoint>1390°C</boilingpoint>
		<meltingpoint>318.4°C</meltingpoint>
		
		<images>
			<image>${imageUrl}caustic-soda-flakes-1.jpg</image>
			<image>${imageUrl}caustic-soda-flakes-2.jpg</image>
		</images>

		<description>
			Kegunaan:&lt;br&gt;
			Banyak digunakan dalam dunia industri seperti proses kimia (40%), manufaktur pulp and paper (17%), treatment air (5%), produksi alumunium (8%), sabun, deterjen dan tekstil (12%) dan lain-lain.
		</description>
	</product>
</product-list>
`