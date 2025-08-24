'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4189096d68ff6ed05b87dc826b49f538",
"version.json": "9277d48b19626a8ae332feba7cf8f3e0",
"index.html": "13f445a99b3e4e72f2f99b3288a0e14e",
"/": "13f445a99b3e4e72f2f99b3288a0e14e",
"main.dart.js": "2a3356685d3d65886200382c4b23542b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"cors.json": "434eb804728f2a72969effd13fc48333",
"manifest.json": "866792a9cb1f40e5973e6b99de1cf373",
".git/config": "bc7703818ea8dc652fe9d88c017dd7e1",
".git/objects/66/e0dae796062e9018188aa4107ef4b6e06785d3": "5e59545ff374cd7bd3405fd302c3aeac",
".git/objects/3e/8fc2e496e5a6fd703e7215e1fc33aa417f9c19": "59ecf31e1ed5b12471756a1b058867f9",
".git/objects/d6/be46ff59e76400c8d40d483ea4eeaddc741213": "1fff8f8e9dc9c6cf44b172a704aa37eb",
".git/objects/74/fda98620af481502c9b5d5d039841217f786a7": "5495b626471458b8b337d0d075c4095c",
".git/objects/65/8777ff2e20870d4c28ae1c84eec95b51f05753": "c48080e69bc96f5a0f2b2613c7245264",
".git/objects/a6/b53701cb51a3a6843f4f36b3a1673119976cd1": "67091f6dc09ad57fee0381e6db2683a8",
".git/objects/f0/2d4253487cc4dfb39fc3c3735e5de3c3593d7e": "edb1f65e2090515febfcf17eee4ec20b",
".git/objects/fa/f8913b6c5d11453750ba71f4f934e84768b672": "43dce9823e887856e54cfae304f1d55f",
".git/objects/46/0a5e3b83b7d5533b2a5e6a2dd8e447cbb2a61f": "aef5ca40b68be5b35762c2bb9e9d781b",
".git/objects/1b/3b36e0cafaf3df4d8d62597c188ea8f8ce989d": "20742466021de91f89986327cdc7e5f1",
".git/objects/24/6758f1d7987faa43b956f192492441228e6e8b": "1d70c41330a6f79e08f3efca2fcc7bf5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "442595d49f8a9d9a73602c26d85fa5ac",
".git/logs/refs/heads/main": "442595d49f8a9d9a73602c26d85fa5ac",
".git/logs/refs/remotes/origin/main": "3c8c0698744d4636e1d0cc890d6ebec1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "68d6ab0f5fdfcbfe5e85108cb2cf095f",
".git/refs/remotes/origin/main": "68d6ab0f5fdfcbfe5e85108cb2cf095f",
".git/index": "455e869e6db0993269d1a19097d353a3",
".git/COMMIT_EDITMSG": "abd7aa2efbfe5bc6f561b064845dbd81",
"assets/AssetManifest.json": "d20c1ea8aba46146026d706cbcd3696b",
"assets/NOTICES": "75d9e9730bc3349ac5dd3619826e009c",
"assets/FontManifest.json": "93d415da086bcd93d1d51e2b2be522d0",
"assets/AssetManifest.bin.json": "f6d946c114ebd2f852850b7b36e1ce57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9406ffee461dd7621e8559b2b669e2b7",
"assets/fonts/LarkenDEMO-Regular.otf": "6b0f13dbbdf14087751dea11be607865",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "92f54c2f35259d8bea1987caf87f0ae0",
"assets/assets/background2.png": "7a018afce23119d52a21b3034ce38956",
"assets/assets/fruit/bnafshp.png": "6fdb0d799d96ec90e41035a9bba02d93",
"assets/assets/fruit/Frotia%2520Cup-Protien.png": "42adb63fbdb8116748245e0598388bd0",
"assets/assets/fruit/Marjab.png": "57af78fa3fab4f4e8bbf0a92631c219d",
"assets/assets/fruit/lavendar%2520plate.png": "5631d21ca7c5199f0ffb30b91f70b39f",
"assets/assets/fruit/Fruit%2520Salad.png": "2dff337b1f69ac1dd85ac52dff99f95d",
"assets/assets/fruit/lavendarp.png": "a439034c220bf1f62f581ecd495f81ef",
"assets/assets/fruit/lavendar.png": "66a29ab6a9817b2a408345f0f7e3cdca",
"assets/assets/fruit/Yasamine.png": "9624f8dae13ad2946a5c3b4fe67c7777",
"assets/assets/fruit/gullabakh%2520plate.png": "ff51746257ea38d9df6913d469097fb9",
"assets/assets/fruit/marjanp.png": "6b360d842b3ae2726d1c7326f1adaf8b",
"assets/assets/fruit/yasaminP.png": "29a570558245dbbd2b0dcf3947e68231",
"assets/assets/fruit/mekhak%2520plate.png": "b7bb131f89d255f38f4f669aab93cde0",
"assets/assets/fruit/nergizp.png": "f9e2b5cc11fcdbc3c40a4e95ea930a22",
"assets/assets/fruit/Special%2520Fruit%2520Salad.png": "b8e060a57321ffa83654f1698c85cf75",
"assets/assets/fruit/vip%2520plate.png": "d48dcc4993534ef9135386951883aeb5",
"assets/assets/fruit/Gullabakh.png": "7c33c15c481029f94637708c9d7830b0",
"assets/assets/fruit/seasonalp.png": "a4b4292d3f66a3d5c16c05b1c8683cbf",
"assets/assets/fruit/test.png": "fdbbc78b4c0e36cf3aac328682e52cc4",
"assets/assets/fruit/Mekhak.png": "91bd89ae0ef27a86475973f83730a4cd",
"assets/assets/fruit/Frotia%2520VIP%2520plate.png": "5aab2463afa47dafc34de67542ed9c05",
"assets/assets/fruit/Gardenia.png": "ab03f9f4f95d0639a6749474398273bf",
"assets/assets/fruit/mekhakp.png": "75fbb6a34464311ca9dd7bf5b3cda172",
"assets/assets/fruit/nergiz%2520plate.png": "cf988b1c9c01c8d1a3078568d601f7f7",
"assets/assets/fruit/tulpp.png": "df3858f6a4881f7ce9c949c5a4a93a84",
"assets/assets/fruit/Nergiz.png": "e9f64a4436688c98be29abbb6ba68ab1",
"assets/assets/fruit/tulip.png": "0321d3e09d29e427ae08af4face693c7",
"assets/assets/fruit/Seasonal%2520Fruit%2520Plate.png": "8f77397b4514c28f78724d5dfd7408ba",
"assets/assets/fruit/gardenia%2520plate.png": "d6f8fe7a8cde23f14c1a97d31e9ffead",
"assets/assets/fruit/Armenian%2520Cucumber.png": "563550c4136d5eac65242890201efde2",
"assets/assets/fruit/vip.png": "9e92364e0202930c8b71d0f60fc0a038",
"assets/assets/fruit/yasamin%2520plate.png": "5dd21204d93ea8d7899745d91485a23e",
"assets/assets/fruit/Single%2520Fruit%2520Cup.png": "f79dab2ed6205b3599796e646fec68a8",
"assets/assets/fruit/Greengages.png": "f59f1180a763ce1d22d7bf137b420382",
"assets/assets/fruit/Seasonal%2520Fruit%2520Salad.png": "f088d6ae41628a22211ba8bc126fca51",
"assets/assets/fruit/gardeniap.png": "f7dd18789f9117cf8cfe49f39730bd58",
"assets/assets/fruit/Fruit%2520Cup.png": "9da57ac24b39a71eafd2e3daa81ef833",
"assets/assets/fruit/marjan.png": "5679d777cee89f8c56c369d457c67352",
"assets/assets/fruit/Bnafsh.png": "5a68d8be83e1e17c7b5a27f958cb839c",
"assets/assets/fruit/gullabakhp.png": "e1d39bbb62b8999a846a8adfc5d19b59",
"assets/assets/background1.png": "cdd013eb7cbbd90718146896d261160a",
"assets/assets/images/frotias.png": "40a730a776892d724b74ccb904d9eba3",
"assets/assets/images/kurdish/%25DA%25A4%25D8%25A7%25D9%2586%25DA%25A9%25D9%2588%25DA%25A4%25DB%2595%25D8%25B1.jpg": "21037c058321ec337bcb759e83b95f7e",
"assets/assets/images/kurdish/%25D8%25A8%25D8%25A7%25D9%2584%25DB%258C.jpg": "59ed4d9d9bef81e3bb12bf6a05486de2",
"assets/assets/images/kurdish/48.png": "8e629eb0636aca43c0d20479e0a00dc8",
"assets/assets/images/kurdish/%25D8%25B3%25DB%258E%25D9%2584%25DA%25A9%25DB%258E.jpg": "4631458468873ee403280c5ab8d33863",
"assets/assets/images/kurdish/%25D8%25B1%25DB%258C%25D9%2588%2520%25D8%25AF%25DB%258C%2520%25D8%25AC%25D8%25A7%25D9%2586%25DB%258C%25D8%25B1%25D9%2588.jpg": "d73407933c1104186020743ac6a25069",
"assets/assets/images/kurdish/%25D8%25A8%25DB%2595%25D8%25B1%25D9%2584%25DB%258C%25D9%2586.jpg": "dd13bedc0a8cd8823480f3dc2a7c0acc",
"assets/assets/images/kurdish/%25D9%2587%25D8%25A7%25DA%25A4%25D8%25A7%25D9%2586%25D8%25A7.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/kurdish/%25D9%2587%25D8%25A7%25D9%2588%25D8%25A7%25DB%258C.jpg": "999bec9461cf714ce1849f2bacd36df8",
"assets/assets/images/kurdish/9.png": "a2bd5c77a6c08df7128832bc1e3ddbc7",
"assets/assets/images/kurdish/15.png": "1a7b6eac5e59febd3a90d70a679b20b1",
"assets/assets/images/kurdish/%25D8%25A8%25DB%2586%25D9%2584%25D9%2588.jpg": "5f7eb219a8aaae3e76e835c318fc713c",
"assets/assets/images/kurdish/%25D9%2586%25DB%258C%25D8%25B3.jpg": "965b816593da6ccf5fe174fc913ecaf2",
"assets/assets/images/kurdish/12.png": "628c2c0e45e94014993348481fe5902a",
"assets/assets/images/kurdish/%25D9%2581%25DB%2586%25DA%25A9%25DB%258E%25D8%25AA.jpg": "79ad4e9fb4bb02f5333abfdb1cef9e56",
"assets/assets/images/kurdish/39.png": "b691b11589b04ff366c96f9d8d5238cb",
"assets/assets/images/kurdish/21.png": "912da94f7e96f5f110db588008936633",
"assets/assets/images/kurdish/%25D8%25A6%25D8%25A7%25D8%25B4%25DA%25AF%25DB%2595.jpg": "b412ae5020b5cc21cb6348f98cd062a5",
"assets/assets/images/kurdish/%25D8%25A6%25DB%258C%25D8%25A8%25DB%258C%25D8%25B2%25D8%25A7.jpg": "c192cfb41e95bdd2cd480fba0199c339",
"assets/assets/images/kurdish/%25D8%25B3%25DB%258C%25D8%25AF%25D9%2586%25DB%258C.jpg": "1dd3776ee346259c04f14d71c0995895",
"assets/assets/images/kurdish/36.png": "40b2da9d4354f59478dcad08880aca1f",
"assets/assets/images/kurdish/%25D9%25BE%25DB%2586%25D8%25B1%25D8%25AA%25D9%25BE%25D9%2581%25DB%258C%25D9%2586%25D9%2588.jpg": "0722db2612402b1b7b9f096b87f2e429",
"assets/assets/images/kurdish/27.png": "34ff2df142dc226fac70f454f40c390a",
"assets/assets/images/kurdish/33.png": "aef22de28310e4f2325227ef9257d6ed",
"assets/assets/images/kurdish/%25D8%25AA%25D9%2588%25D9%2584%25D9%2588%25D9%2585.jpg": "beb5b39f3a51c14f6c6b960e723378cd",
"assets/assets/images/kurdish/%25D9%2585%25D8%25A7%25DB%258C%25D8%25A7%25D9%2585%25DB%258C.jpg": "a29ed40e1a3c70bd0e215e304725c1f4",
"assets/assets/images/kurdish/18.png": "cf6e3a9d35f935a451062e92a038f730",
"assets/assets/images/kurdish/30.png": "b52fb9f369f30e7965de08c8ae90547f",
"assets/assets/images/kurdish/24.png": "159120275b7bc5c84403dd3b3a568d74",
"assets/assets/images/kurdish/42.png": "4f0a65dd636590e822a9908f67659c8c",
"assets/assets/images/kurdish/%25D9%2586%25D8%25A7%25D9%25BE%25D9%2588%25D9%2584%25DB%258C.jpg": "1e593512f79d2b02ceb02256f6dcb101",
"assets/assets/images/kurdish/%25D9%2587%25DB%2595%25D9%2588%25D8%25B1%25D8%25A7%25D9%2585%25D8%25A7%25D9%2586.jpg": "4c86e7951dab5a2729fe525214385bf2",
"assets/assets/images/kurdish/%25D9%2584%25D9%2588%25D8%25B3%25DB%258E%25D8%25B1%25D9%2586.jpg": "dfe4be6101ff224078cbfee0511626a6",
"assets/assets/images/kurdish/54.png": "260800d142d0bc698ff0393996c43253",
"assets/assets/images/kurdish/6.png": "685e41ea505234367abd2f8700fc9413",
"assets/assets/images/kurdish/%25DA%25A4%25D8%25A7%25D9%2584%25DB%258E%25D9%2586%25D8%25B3%25DB%258C%25D8%25A7.jpg": "86f102eb98b673d45208a6eadee0d1bc",
"assets/assets/images/kurdish/%25D9%2581%25D9%2584%25D9%2588%25D8%25B1%25D8%25A7%25D9%2586%25D8%25B3.jpg": "6b02d5f976ecea6556d3756a0549d10f",
"assets/assets/images/kurdish/3.png": "00c09e025e9aca9900d0c3924f98f478",
"assets/assets/images/kurdish/51.png": "c21a9ef880ff7b550ff34f7cadca5a80",
"assets/assets/images/kurdish/45.png": "37f0447aef174dc569aa08080844a41b",
"assets/assets/images/kurdish/%25D9%2585%25D8%25A7%25D8%25B1%25D8%25A8%25DB%258E%25D9%2584%25D8%25A7.jpg": "1d9b62a286c61ccf52006c4b4539baec",
"assets/assets/images/kurdish/%25D9%2581%25D8%25B1%25DB%2586%25D8%25AA%25DB%258C%25D8%25A7.jpg": "d97e2069121a24a0756abc6d208ec004",
"assets/assets/images/kurdish/%25D8%25AA%25DB%2586%25DA%25A9%25DB%258C%25D9%2588.jpg": "054e9a94603bf1df3958e13c456a8c62",
"assets/assets/images/logo-icon-green.png": "befe4ba425d31d45986631d71b7cb89f",
"assets/assets/images/8.png": "e312f567f3a3c07c4a6b09d3dcc1b026",
"assets/assets/images/9.png": "b91c336b8e505af2aa6f49105935a605",
"assets/assets/images/14.png": "f376f7032626743d8917ee89a9ae4a93",
"assets/assets/images/15.png": "d6a9f10deeca6400e355d19a28e935c2",
"assets/assets/images/12.png": "674f27362da41ffaf5d95eddca6be60f",
"assets/assets/images/13.png": "f376f7032626743d8917ee89a9ae4a93",
"assets/assets/images/11.png": "8ae2e3a52c45936c4de701ca8d258a54",
"assets/assets/images/10.png": "8ae2e3a52c45936c4de701ca8d258a54",
"assets/assets/images/logo-white.png": "f29988395c6da5da584c889446752c2f",
"assets/assets/images/locationn.png": "3defa390a3fc63ff1e5ed5ffbf48f759",
"assets/assets/images/english/hawraman.jpg": "8026ffd20c4fbf6846e7ac3fc729b03e",
"assets/assets/images/english/napoli.jpg": "e166fc17fdf0956243c16c1d436ecec3",
"assets/assets/images/english/bali.jpg": "e836eb0b01ecf7a172c62720a9d5338c",
"assets/assets/images/english/ibiza.jpg": "73e60002664ee2dab03b4063b46ed2a7",
"assets/assets/images/english/ashga.jpg": "0391469788d7973c09cf49b49aff50ae",
"assets/assets/images/english/bolu.jpg": "4f028a3b932ded660327d9ead52ea73d",
"assets/assets/images/english/miamu.jpg": "60c977254e2de0a19a5d39094d241535",
"assets/assets/images/english/9.png": "c3b25ff0f01a6d0699cc7c730ebc1432",
"assets/assets/images/english/berlin.jpg": "46e49860abdc3929a41cb57f928a1b1d",
"assets/assets/images/english/29.png": "d045d571d936670f79e2b1352348fca7",
"assets/assets/images/english/15.png": "4bb4648090b6f3a3a471898984eed57f",
"assets/assets/images/english/17.png": "0adfadceb85923e05e580a8eef337ded",
"assets/assets/images/english/selki.jpg": "4c226ab33a8a3fe871b5f45ad64c0544",
"assets/assets/images/english/13.png": "3b9a39043976b4f9195f9bcf98080210",
"assets/assets/images/english/11.png": "234455a447ebcbc03e241b5cd9504ca7",
"assets/assets/images/english/portofino.jpg": "db302dcc6f14470f04893fbaa3049d07",
"assets/assets/images/english/35.png": "1df0ed04c3a35c50dc5691b99afb020e",
"assets/assets/images/english/21.png": "c563481700c146302c698c3dece5571d",
"assets/assets/images/english/florence.jpg": "689bac912acdfeb26376d6e30b02f0b1",
"assets/assets/images/english/sydney.jpg": "4f2ad4e5d337c77498590c40b8c16da5",
"assets/assets/images/english/tokyo.jpg": "050486c3e3393fec8894bb13e61cf48c",
"assets/assets/images/english/rio%2520de%2520janeito.jpg": "c4d3172019aa2f148d9c87e50a37c348",
"assets/assets/images/english/23.png": "b2d70d64a36817a4335cfdf5943ac7be",
"assets/assets/images/english/phucket.jpg": "86a382ff6b73a2d4f8922eea76ca7d7c",
"assets/assets/images/english/27.png": "349f21a36e4f1d0116b822a2ecfb93d0",
"assets/assets/images/english/33.png": "781689079a9b221720a5684dcfdeffee",
"assets/assets/images/english/frotia.jpg": "d4d3b1a84c80cf67937ef88fcc5f175d",
"assets/assets/images/english/valencia.jpg": "092fc5a98f1bae72ac11929a02010399",
"assets/assets/images/english/vancouver.jpg": "f7b4fcfd3ef5682ce127dd461922d239",
"assets/assets/images/english/25.png": "7580fc784bb0abfeee3e178792649ee5",
"assets/assets/images/english/31.png": "fa5d98a1f4ee6ebe4d10cb2f8b53faae",
"assets/assets/images/english/19.png": "bd83363e58bd3d653ba0d8a9fed47fcd",
"assets/assets/images/english/nice.jpg": "bff9f2c827060c5cf6ae64f47f0b40bf",
"assets/assets/images/english/5.png": "f949262272dc27384359794d83f17b07",
"assets/assets/images/english/havana.jpg": "e7d07b82cd6414dbb4aa56f0207cf1c5",
"assets/assets/images/english/7.png": "426873f345763778f52fcf4e8b263da1",
"assets/assets/images/english/tulum.jpg": "202d4f0859c33c88e6e00a22d2b2a8ff",
"assets/assets/images/english/marbella.jpg": "ae45bfc82d8dc13abbaee911de427654",
"assets/assets/images/english/lucerne.jpg": "c32af0b7097d355148f73fb8115a97cc",
"assets/assets/images/english/hawaii.jpg": "000bcc33d77c56609a32cfb827ef6385",
"assets/assets/images/english/3.png": "7096bf72f794b35c779d03d6a861e909",
"assets/assets/images/english/1.png": "4038fca8d7ffdf7c7cfa7dfbde6687d4",
"assets/assets/images/whatsappb.png": "35323afcb9d6c0f3949a0b44619b85db",
"assets/assets/images/pp.png": "fabf0a702994e3dd496333599d72eae6",
"assets/assets/images/insta.png": "c46bdfb1ca884717dc835bae3f29bf2c",
"assets/assets/images/phone.png": "c95f3c48c8d34e969d350805f0c768c8",
"assets/assets/images/plates/kurdish/4.png": "23a6dc902c2a0eef1dae29b4b9e0a3ba",
"assets/assets/images/plates/kurdish/5.png": "217f316b0f70d4c10211ad13cbe29706",
"assets/assets/images/plates/kurdish/7.png": "6fda4679cc534da00fcaff59e34cb0ae",
"assets/assets/images/plates/kurdish/6.png": "0162fbfa4872945c9cc351bba7316ed1",
"assets/assets/images/plates/kurdish/2.png": "30e5d1c9430f27c5068270f79b7f00e5",
"assets/assets/images/plates/kurdish/3.png": "fc590381f4d2d3f6999493a71a3256c7",
"assets/assets/images/plates/kurdish/1.png": "2ddd6b3f414db3205a0d0b978d7ecdd6",
"assets/assets/images/plates/imgs/77.png": "69e46e2a2530238cf704ae128c0a729c",
"assets/assets/images/plates/imgs/11.png": "0c03ca9a911e2990f2cd40f0c00d009b",
"assets/assets/images/plates/imgs/33.png": "9ecc9bf24ccd1dfe1c187e3550afb813",
"assets/assets/images/plates/imgs/4.png": "8f0a284b0082b4fb7c69cb5e259b2dbd",
"assets/assets/images/plates/imgs/5.png": "9c49f532c1f6c5ae32908315387e0dc2",
"assets/assets/images/plates/imgs/7.png": "ba3431cbd8acfa95bb2668d0016c1d6a",
"assets/assets/images/plates/imgs/6.png": "584d1df2cd1aef16ef525bec8ba5bbdc",
"assets/assets/images/plates/imgs/2.png": "41c09e81fc76c5b4c28a18cb66798675",
"assets/assets/images/plates/imgs/3.png": "6243753f64e25c80d130841dd14bc808",
"assets/assets/images/plates/imgs/1.png": "9d03f65c41c43c2adaf95a63c873a1e5",
"assets/assets/images/plates/english/4.png": "b69d15c79c228ffb7e2cf8607f4ac23d",
"assets/assets/images/plates/english/5.png": "dd28e65de63614fa4a35b43a1fbebad5",
"assets/assets/images/plates/english/7.png": "37df5f55722ef7b2ebd1f620939de002",
"assets/assets/images/plates/english/6.png": "05ac576f05a882ddaf9fc551532a2208",
"assets/assets/images/plates/english/2.png": "65eae1648153329ba09d64e363ea774a",
"assets/assets/images/plates/english/3.png": "c2baebe2ce2476efafe1b241ef2f1084",
"assets/assets/images/plates/english/1.png": "f88404e1d9c11ba042ed9f989347041e",
"assets/assets/images/plates/4.png": "0030e7cc7e62aae457532a5fed6a82c1",
"assets/assets/images/plates/5.png": "55c9bf30f1663ca590d0423c65a0367f",
"assets/assets/images/plates/7.png": "15a61d666e49f7ccffc7af334db3ac61",
"assets/assets/images/plates/arabic/4.png": "eaef8201f0953efc41b111613dd6ba04",
"assets/assets/images/plates/arabic/5.png": "3e7f7d65c5098ee4d66eee4ba741f3cb",
"assets/assets/images/plates/arabic/7.png": "505257a36977183ee7efa20bd2706cd7",
"assets/assets/images/plates/arabic/6.png": "ce3841aebb684e492c894288bfcf3368",
"assets/assets/images/plates/arabic/2.png": "3c468fde4e28d535e2acfb9ad6fb6bca",
"assets/assets/images/plates/arabic/3.png": "f04d20fa02168ca84f95800390c01e9e",
"assets/assets/images/plates/arabic/1.png": "331f100eb188cf74b6d94ccc513ecf14",
"assets/assets/images/plates/6.png": "d11f29fb28a5b2930d53ddebc19f9265",
"assets/assets/images/plates/2.png": "838812e78f7eeaf9254ae0187dec40e8",
"assets/assets/images/plates/3.png": "aec55b6d46d35b54e23b03f9611298c9",
"assets/assets/images/plates/1.png": "53b5eb74b59772ac89f7b79a3135a73e",
"assets/assets/images/4.png": "6fa18cf756063adcda08f3dd28c9efbf",
"assets/assets/images/mainLogo.png": "084c1bcfd9bf5c4d5278dc839843acbb",
"assets/assets/images/5.png": "a2205d2ceeb2b35c0289de966d592657",
"assets/assets/images/logo.jpeg": "b5cb2c017942da8f4da4f4031061ffe4",
"assets/assets/images/7.png": "a2205d2ceeb2b35c0289de966d592657",
"assets/assets/images/arabic/%25D8%25A8%25D8%25A7%25D9%2584%25DB%258C.jpg": "5e25b45654e1e1ff29e1b35a960082b2",
"assets/assets/images/arabic/%25D8%25B3%25D9%2588%25DA%25A9%25DB%258C%25D9%2588.jpg": "0d8a1d28268e79804a693828bfe3fec2",
"assets/assets/images/arabic/%25D9%2585%25D8%25A7%25D8%25B1%25D8%25A8%25DB%258C%25D8%25A7.jpg": "c1e548f36ad3f612d1ca22459a1029db",
"assets/assets/images/arabic/%25D8%25B1%25DB%258C%25D9%2588%2520%25D8%25AF%25DB%258C%2520%25D8%25AC%25D8%25A7%25D9%2586%25DB%258C%25D8%25B1%25D9%2588.jpg": "ab24486b401f98ffb374fecbaed8b1a5",
"assets/assets/images/arabic/%25D8%25A8%25D8%25B1%25D9%2584%25DB%258C%25D9%2586.jpg": "f29cf767e3eaa13118f0d6bbcda12065",
"assets/assets/images/arabic/8.png": "743d6ad4c85e1bc38563935dfe0ce708",
"assets/assets/images/arabic/%25D9%2581%25D8%25B1%25D9%2588%25D8%25AA%25DB%258C%25D8%25A7.jpg": "924fbfd2db271cb1781ac2d5172dde28",
"assets/assets/images/arabic/%25D9%2587%25D8%25A7%25D9%2588%25D8%25A7%25DB%258C.jpg": "ca34b259f3d8d68bd0733ee3ba74bc79",
"assets/assets/images/arabic/%25DB%258C%25D8%25B4%25D8%25AC%25D8%25A7.jpg": "c741c30662591cadf98db7b38ddea5a2",
"assets/assets/images/arabic/14.png": "b111bb2a96521427a5a2d9eef2e47d10",
"assets/assets/images/arabic/%25D8%25B3%25DB%258C%25D9%2584%25DA%25A9%25DB%258C.jpg": "7f8f45f4e7814384f8d3fa68cc4085a8",
"assets/assets/images/arabic/29.png": "59fa39e285c9fa9c894a459896e0e55f",
"assets/assets/images/arabic/17.png": "cf8104987aa8bfb0c1fcde776b60ba40",
"assets/assets/images/arabic/%25D9%2586%25DB%258C%25D8%25B3.jpg": "6e656562a535220cfade952810639f5c",
"assets/assets/images/arabic/%25D8%25A8%25D9%2588%25D8%25B1%25D8%25AA%25DB%2595%25D9%2581%25DB%258C%25D9%2586%25D9%2588.jpg": "b001fcdd370d8887d251893c0ce072d9",
"assets/assets/images/arabic/%25D9%2587%25D8%25A7%25D9%2588%25D8%25B1%25D8%25A7%25D9%2585%25D8%25A7%25D9%2586.jpg": "80e986f819a53187491ebc0c7ac263a2",
"assets/assets/images/arabic/38.png": "eae2e024e51b034938988a142885b1de",
"assets/assets/images/arabic/35.png": "2993c6e12d03bf4fd0f1db36fb45692d",
"assets/assets/images/arabic/%25D8%25B3%25DB%258C%25D8%25AF%25D9%2586%25DB%258C.jpg": "314e3398b29be7da79de5bc008d90a64",
"assets/assets/images/arabic/%25D9%2584%25DB%2595%25D8%25B3%25DB%258C%25D8%25B1%25D9%2586.jpg": "db79450b29951e0edd7bcd14b2e2cffc",
"assets/assets/images/arabic/%25D9%2581%25D9%2588%25DA%25A9%25DB%258C%25D8%25AA.jpg": "020152f7d2d013f9c807514a646e5962",
"assets/assets/images/arabic/20.png": "b7c04bf07a18ca322bb05b0b8ceb56e4",
"assets/assets/images/arabic/%25D9%2587%25D8%25A7%25D9%2581%25D8%25A7%25D9%2586%25D8%25A7.jpg": "7fcb54131a8ee897a2df259650943b14",
"assets/assets/images/arabic/%25D9%2581%25D8%25A7%25D9%2586%25DA%25A9%25D9%2588%25D9%2581%25D8%25B1.jpg": "c87d939311c58826e4ddcc6abd774c81",
"assets/assets/images/arabic/%25D9%2585%25DB%258C%25D8%25A7%25D9%2585%25DB%258C.jpg": "ef26f4e4e03718b044d17542a08ff521",
"assets/assets/images/arabic/23.png": "7cb60c1534fe6a7003884e5402096446",
"assets/assets/images/arabic/%25D8%25AA%25D9%2588%25D9%2584%25D9%2588%25D9%2585.jpg": "4d8580835b2869c25fa94dc082467e10",
"assets/assets/images/arabic/32.png": "219e6f364f4b9c2e03fcb06b8ab942d1",
"assets/assets/images/arabic/26.png": "baf46c964288181d87945d41bc963d9a",
"assets/assets/images/arabic/%25D8%25A7%25DB%258C%25D8%25A8%25DB%258C%25D8%25B2%25D8%25A7.jpg": "28ed914fa8a53130e6181e31b6566f0d",
"assets/assets/images/arabic/5.png": "647c963dee779eb5734c435964eed71e",
"assets/assets/images/arabic/%25D8%25A8%25D9%2588%25D9%2584%25D9%2588.jpg": "8c455ea7f457ccb167de392b0cf76d39",
"assets/assets/images/arabic/%25D9%2586%25D8%25A7%25D9%25BE%25D9%2588%25D9%2584%25DB%258C.jpg": "ff921f2c801cb334786296845ca5b119",
"assets/assets/images/arabic/41.png": "5166e1621d7826127c420ea98571b902",
"assets/assets/images/arabic/%25D9%2581%25D9%2584%25D9%2588%25D8%25B1%25D9%2586%25D8%25B3%25D8%25A7.jpg": "13c0789f20c8319d5386db512c7ddb63",
"assets/assets/images/arabic/44.png": "12dd6c65a2ab0c30e31493540cb92d06",
"assets/assets/images/arabic/2.png": "ab1069b8f07d3ccf658021ad36c5b4db",
"assets/assets/images/arabic/50.png": "0a98fa6ea08e5f6461670e8b601f46f9",
"assets/assets/images/arabic/%25D9%2581%25D8%25A7%25D9%2584%25D9%2586%25D8%25B3%25D8%25AA%25D8%25A7.jpg": "1f1259362326d3533e66570bbde4378d",
"assets/assets/images/arabic/53.png": "fa71bd4f022ac65668f29623d637c49b",
"assets/assets/images/arabic/1.png": "457533a1f4b5c62814ec5222350e48c4",
"assets/assets/images/arabic/47.png": "cf1e408761e02c9e4024c741dabe6411",
"assets/assets/images/6.png": "4ca04280ed68e02bd9e52ff51e62a508",
"assets/assets/images/2.png": "0e22717a32e0fe65a283175d0d6b68dc",
"assets/assets/images/3.png": "be7102e77d7d8c4789d80a2ae53adb48",
"assets/assets/images/1.png": "d097bc5052fac44d2ffe9be25e54b1bb",
"assets/assets/images/p.png": "72b807fb1fcf51abe6f03af382be07f8",
"assets/assets/images/phonee.png": "1f426b52e2c1b372237f6ec5de9eeee1",
"assets/assets/hotdrink/espresso-single+double.jpg": "23c7cc5dc4014d5919733e2d06552ff4",
"assets/assets/hotdrink/Matcha%2520Latte.jpeg": "12ab8750a34c1339888ff37dd0bd06b6",
"assets/assets/hotdrink/steamer.jpg": "b2909453dddfdf26361f8fd2a3cc8805",
"assets/assets/hotdrink/turkish.jpg": "7c0a154ea5074808c59f6db9bc6b0eea",
"assets/assets/hotdrink/americano.jpg": "5a8e470794ac3efb282699c919d6a814",
"assets/assets/hotdrink/cappucino.jpg": "aed5a51a0c820dcbc6e42f88f4c78fa8",
"assets/assets/hotdrink/mocha.jpg": "80ee610eefbca15b447b8698ec3c5802",
"assets/assets/hotdrink/hot-chocolate.jpg": "42779de05c9fc599ee075385b323aaeb",
"assets/assets/hotdrink/caffe-latte+Spanish%2520late.jpg": "5a2cb0f00282430d0b20957a488a3d70",
"assets/assets/background.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/juice/hawraman.jpg": "b81fb4e70bcc4b236a7a0c667a88ec14",
"assets/assets/juice/napoli.jpg": "e83703574dd84db14c475f13c80bd030",
"assets/assets/juice/bali.jpg": "ecc4bb0d3ed2aeff174d0c79e67142b9",
"assets/assets/juice/ibiza.jpg": "dd43a9efc55ef5aaa282032ed0d43b05",
"assets/assets/juice/ashga.jpg": "8de54fcbbb21f7288d775752f5417c0e",
"assets/assets/juice/bolu.jpg": "4d87c481d8c0aa4c6749930e3bb481bd",
"assets/assets/juice/berlin.jpg": "feb037aa97ee87d26542fa010c049568",
"assets/assets/juice/Make%2520Your%2520Own.png": "ea58d4ab3b7c676b19ed77ee12004137",
"assets/assets/juice/Azberyy%2520Selke.png": "009be04cbfb3f0071b4d6c8b8211f8d6",
"assets/assets/juice/portofino.jpg": "0f3ca20cdbc57d2f094c72feb5b62d26",
"assets/assets/juice/florence.jpg": "73179028efa9f6e550455e296b442d03",
"assets/assets/juice/sydney.jpg": "b525ea490162a170da141ac5ef0fc31d",
"assets/assets/juice/tokyo.jpg": "30397d598c5c66858f44604a1797dc24",
"assets/assets/juice/selke.jpg": "ccdb92f1677835998d7bdd15f9a8f38b",
"assets/assets/juice/phucket.jpg": "2910ffcf36a66d5a88000d2e4578737d",
"assets/assets/juice/frotia.jpg": "28d25e82e5108d5289ecfc22fdf376f2",
"assets/assets/juice/valencia.jpg": "c4c35aa5fbde559ebdf99f0e1ecaab9b",
"assets/assets/juice/vancouver.jpg": "a99c725a0fc19d17238ce5828c9686f6",
"assets/assets/juice/nice.jpg": "37fc1ca6f2bf1dc226847d405bc64ca3",
"assets/assets/juice/Azberry%2520Havana.png": "566abf037ac22f593edf42ee986a3238",
"assets/assets/juice/havana.jpg": "0cb9f54b60e9ec2aa97119674f1bd8c3",
"assets/assets/juice/tulum.jpg": "61e7e79ff531b103bee2705343242a25",
"assets/assets/juice/miami.jpg": "1afedbfdc506bf8b89bd9789bd4d6333",
"assets/assets/juice/marbella.jpg": "8f7a41a2347564be716d4b5f51cafea5",
"assets/assets/juice/lucerne.jpg": "e351d7975aca7cc1e3b2c3aaa4dc0250",
"assets/assets/juice/hawaii.jpg": "d7087303c6567ab4785fd05873adfc78",
"assets/assets/juice/rio-de-janeiro.jpg": "85453d231d1f9ba3350307da03a9ae38",
"assets/assets/Main-color.png": "246cc4c6380f41bb20fea962b0b1aeb2",
"assets/assets/icecoffe/iced-mocha.jpg": "f1e6a7931adaae3411641d447056dd24",
"assets/assets/icecoffe/mango%2520ice%2520matcha.png": "f2af297e033cee4f8f381b97828f73fa",
"assets/assets/icecoffe/ice%2520matcha.png": "185e8721563922fa958dcefa9b175347",
"assets/assets/icecoffe/mango%2520ice%2520chocolate.png": "92dbe64ae9489b8b5fd3f74e8f811893",
"assets/assets/icecoffe/watermelon%2520ice%2520chocolate.png": "181f846af0d60e918f364349bdaf2d8e",
"assets/assets/icecoffe/iced-latte.jpg": "9dc46bc34ef822854b60d0833a814ee0",
"assets/assets/icecoffe/strawberry%2520ice%2520matcha.png": "8c2ddb4e11aa6c5352a4bde921ff1b60",
"assets/assets/icecoffe/kiwi%2520ice%2520chocolate.png": "e9879efa0de8e03784257b0b5b3d2d87",
"assets/assets/icecoffe/strawberry%2520ice%2520chocolate.png": "4b5bd7e1a94700da93c1152d101dabfa",
"assets/assets/icecoffe/americano.jpg": "abca9f885d746ff638b0e51872657029",
"assets/assets/icecoffe/iced-chocolate.jpg": "79e419ef0d00a3d531a8cd52429a9e35",
"assets/assets/icecoffe/watermelon%2520ice%2520matcha.png": "aebad3f758ef6b4e04f3ef21e3fc3260",
"assets/assets/icecoffe/iced-spanish.jpg": "1137e958a84542f80da243ff518d0496",
"assets/assets/marjan.png": "aab8ca1e812bd02fdb2fdfc89d8584f7",
"assets/assets/white.png": "02a2a3d3e9106851c5b5cf707de559d5",
"assets/assets/cake/49.JPG": "e630f55cc9f8019df53290cda9e196c8",
"assets/assets/cake/1.jpeg": "6a5c0dc9ef9d1548baf0e2d5a06b62fc",
"assets/assets/cake/WhatsApp%2520Image%25202025-08-16%2520at%25203.36.45%2520PM.png": "afbcf5f3d8b8f40a074df80255de4364",
"assets/assets/cake/60.jpeg": "84e3b74775efee835090690f19aab260",
"assets/assets/cake/34.JPG": "89c49309ea17b6dfb7b3ac007014f21c",
"assets/assets/cake/19B.JPG": "e3d5397e4fa3d747f363110dcd7987c3",
"assets/assets/cake/19A.jpg": "7b72b13e49c7e9bf659106e4e22d75d0",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
