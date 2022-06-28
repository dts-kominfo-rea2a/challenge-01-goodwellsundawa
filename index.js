// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";

const favColorFirstUser = new Set();
favColorFirstUser.add("Yellow");
favColorFirstUser.add("Pink");
favColorFirstUser.add("White");
favColorFirstUser.add("Purple");
firstUser.favoriteColor = [...favColorFirstUser]; //Spread syntax

firstUser.isHavePet = true;

const eduFirstUser = [];
const eduFirstUserTk1 = {};
eduFirstUserTk1.name = "SD 01";
eduFirstUserTk1.city = "Jakarta";
eduFirstUserTk1.graduate = 2016;
eduFirstUser.push(eduFirstUserTk1);
const eduFirstUserTk2 = {};
eduFirstUserTk2.name = "SMP 02";
eduFirstUserTk2.city = "Jakarta";
eduFirstUserTk2.graduate = 2019;
eduFirstUser.push(eduFirstUserTk2);
const eduFirstUserTk3 = {};
eduFirstUserTk3.name = "SMA 03";
eduFirstUserTk3.city = "Tangerang";
eduFirstUser.push(eduFirstUserTk3);
firstUser.education = eduFirstUser;

const favRestoFirstUser = new Set();
favRestoFirstUser.add("Bento");
favRestoFirstUser.add("Sushi");
favRestoFirstUser.add("Pancake");
favRestoFirstUser.add("Eggy");
favRestoFirstUser.add("Tempura");
favRestoFirstUser.add("Bento");
favRestoFirstUser.add("Eggy");
favRestoFirstUser.add("Padang");
favRestoFirstUser.add("Tteok");
favRestoFirstUser.add("Sushi");
favRestoFirstUser.add("Sushi");
firstUser.favoriteRestaurant = [...favRestoFirstUser]; //Spread syntax

secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";

const favColorSecondUser = new Set();
favColorSecondUser.add("Blue");
favColorSecondUser.add("Black");
favColorSecondUser.add("Grey");
secondUser.favoriteColor = [...favColorSecondUser]; //Spread syntax

secondUser.isHavePet = false;

const eduSecondUser = [];
const eduSecondUserTk1 = {};
eduSecondUserTk1.name = "SD 02";
eduSecondUserTk1.city = "Jakarta";
eduSecondUserTk1.graduate = 2010;
eduSecondUser.push(eduSecondUserTk1);
const eduSecondUserTk2 = {};
eduSecondUserTk2.name = "SMP 03";
eduSecondUserTk2.city = "Bogor";
eduSecondUserTk2.graduate = 2013;
eduSecondUser.push(eduSecondUserTk2);
const eduSecondUserTk3 = {};
eduSecondUserTk3.name = "SMA 01";
eduSecondUserTk3.city = "Surabaya";
eduSecondUserTk3.graduate = 2016;
eduSecondUser.push(eduSecondUserTk3);
const eduSecondUserTk4 = {};
eduSecondUserTk4.name = "Universitas Maju";
eduSecondUserTk4.city = "Tangerang";
eduSecondUser.push(eduSecondUserTk4);
secondUser.education = eduSecondUser;

const favRestoSecondUser = new Set();
favRestoSecondUser.add("Tempura");
favRestoSecondUser.add("Bento");
favRestoSecondUser.add("Sushi");
favRestoSecondUser.add("Pancake");
favRestoSecondUser.add("Padang");
favRestoSecondUser.add("Katsu");
favRestoSecondUser.add("Geprek");
favRestoSecondUser.add("Pancake");
favRestoSecondUser.add("Eggy");
secondUser.favoriteRestaurant = [...favRestoSecondUser]; //Spread syntax

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
