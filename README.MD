

# IBANKING
[![NPM](https://nodei.co/npm/mutasi-scraper.png?compact=true)](https://npmjs.org/package/mutasi-scraper)


NodeJS Package for scraping settlement (mutasi) in iBank indonesia

![Screenshot 2022-06-02 113138](https://github.com/fdciabdul/mutasi-scraper/assets/31664438/2dca4544-f1b6-46fd-9daa-bd97114bf203)


# Mutasi Scraper

  Silahkan memberikan Star (⭐) pada repo ini jika anda menyukai ini 
 atau beri dukungan untuk project ini [dukungan](#dukungan)

Library untuk membantu anda mendapatkan informasi mutasi dari iBanking anda 
banyak fungsi yang akan didapatkan jika kalian bisa mengimplementasikannya kedalam kebutuhan yang ada , semisal auto accept payment , auto transfer , auto cek , dsb

# Pre requirements

 - Windows / Linux
 - Nodejs 16+
 - Google chrome

## Cara Install

```bash
npm install --save mutasi-scraper
```

atau

```bash
npm install https://github.com/roywikan/mutasi-scraper
```


## Penggunaan

```javascript
const {ScrapBCA} = require('mutasi-scraper');
```

Fungsi untuk Scraping bank dipisah dari setiap bank , kalian bisa cek apa saja bank yang work untuk di scrap 
disini [Index File](https://github.com/fdciabdul/mutasi-scraper/blob/main/index.js)

## Test

```bash
npm run example
```
## List 
| Bank Name | Status |
| --- | --- | 
|BCA| ✅|
|BNI|✅|
|Gojek|Soon|
|Mandiri Cash Management|❌|
|BRI|❌|

 <details>

  <summary> Example</summary>

## BCA

```javascript

const { ScrapBCA } = require("mutasi-scraper");


(async () => {
    
    const user = 'USERNAME00'; //BCA USERNAME
    const pass = '123456'; //BCA PIN
    
    
    const tglawal = "01";  // TANGGAL AWAL : 01-09 ATAU 11-31, tanpa spasi
    const blnawal = "7";   // BULAN AWAL : 1-9 ATAU 10-12, tanpa spasi
    const tglakhir = "20"; // TANGGAL AKHIR : 01-09 ATAU 11-31, tanpa spasi
    const blnakhir = "7";  // BULAN AKHIR : 1-9 ATAU 10-12, tanpa spasi
  
  
    const bca = new ScrapBCA(user, pass);
    const result = await bca.getStatement(tglawal,blnawal,tglakhir,blnakhir);
    console.log(result);
    
    // Explicitly terminate the script
    process.exit();
})();
```
## BNI

```javascript

const {ScrapBBNI} = require('mutasi-scraper');

const user = 'USER';
const pass = 'PASS';

const scraper = new ScrapBCA(user, pass, {
  headless: false, // true if needed
  args: [
    '--log-level=3', 
    '--no-default-browser-check',
    '--disable-infobars',
    '--disable-web-security',
    '--disable-site-isolation-trials',
  ],
 // executablePath: 'google-chrome', path google chrome  (uncomment line ini jika tidak diperlukan)  tapi direkomendasikan menggunakan google chrome 
});

  var result = await scraper.getStatement();
  console.log(result);
```

 </details>


### NOTE 

guys karna saya tidak punya akun ibanking dari beberapa bank yang error , jika kalian ingin bank lain ditambahkan atau di fix silahkan email saya :)

### Dukungan 

Saya memakan banyak waktu dan membutuhkan effort yang lumayan banyak untuk mengerjakan project ini , jadi support dari temen temen semua sangat saya butuhkan disini 
Kritik dan saran atau berupa dukungan material dari temen temen semua sangat saya hargai , terimakasih banyak

Dukung saya disini : https://imtaqin.id/dukungan-dan-donasi/

### NOTE 

guys karna saya tidak punya akun ibanking dari beberapa bank yang error , jika kalian ingin bank lain ditambahkan atau di fix silahkan email saya :)


# License

[GPL-3.0 license](https://github.com/fdciabdul/mutasi-scraper/blob/main/LICENSE)

# Code By
 Abdul Muttaqin
# CP 
cp@imtaqin.id



