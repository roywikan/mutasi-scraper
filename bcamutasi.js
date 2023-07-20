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