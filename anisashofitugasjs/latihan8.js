//Soal 3
function biji(jumlah) {
    const hasil = jumlah.map((el) => {
      const arrayBaru = '';
  
      return (el += arrayBaru);
    });
    const split = hasil[3].split(',');
    hasil.pop();
    console.log(hasil, split.join(' '));
  }
  biji(['hallo', 'nama', 'saya', ['aniisa','shofi', ['kelas', ['11', ['rpl', '2']]]]]);
  
  //Soal 4
  const obj = {
    nama: 'aniisa',
    kelas: 'RPL 2',
    umur: 17,
    nikah: false,
    Hp: {
      nama: 'oppo a3s',
      spesifikasiHp: {
        chipset: 'Snapdragon 450',
        ram: '3,00 GB',
        rom: '32 GB',
        camera: '13mp',
      },
    },
  };
  console.log(obj.Hp);