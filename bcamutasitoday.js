const readline = require("readline");
const { ScrapBCA } = require("mutasi-scraper");

(async () => {
  const user = "YOURNAME0027"; // BCA USERNAME
  const pass = "299625"; // BCA PIN

  let tglawal = "20"; // TANGGAL AWAL : 01-09 ATAU 11-31, tanpa spasi
  let blnawal = "7"; // BULAN AWAL : 1-9 ATAU 10-12, tanpa spasi
  let tglakhir = "31"; // TANGGAL AKHIR : 01-09 ATAU 11-31, tanpa spasi
  let blnakhir = "7"; // BULAN AKHIR : 1-9 ATAU 10-12, tanpa spasi

  // Get current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;


  tglawal = currentDay-1;
  blnawal = currentMonth;
  tglakhir = currentDay;
  blnakhir = currentMonth;

  console.log("Tanggal awal:", tglawal);
  console.log("Bulan awal:", blnawal);
  console.log("Tanggal akhir:", tglakhir);
  console.log("Bulan akhir:", blnakhir);

  const bca = new ScrapBCA(user, pass);
  const result = await bca.getStatement(tglawal, blnawal, tglakhir, blnakhir);
  console.log(result);

  // Explicitly terminate the script
  process.exit();
})();
