'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "024cffa8d216cd60fdd180294269fbe1",
".git/config": "22af4684a9a1b9afbe83bf4d11c771ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9f89d0396dac907d4d98f66452610781",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2b6c0a301a858b428b75704e380fee08",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ac1fce3cef22d0d08dce50ec8baf7a1",
".git/logs/refs/heads/main": "5ab6fc82122afea3ac55aaf0f70730d6",
".git/logs/refs/remotes/origin/main": "29f8ca0cdbf7f89914824de463a97f02",
".git/objects/02/154275e091df6ecaf343edc9614ebed54c8c37": "f37bb408215bc1af8707ddae160f6210",
".git/objects/03/5ea1c23d477a65ce4fc5fe93e35a775f23e692": "22134a10badab30884609ff54a41574a",
".git/objects/03/6dfe06c532ee3cd201be6b8d93781084d513db": "d7c46fbf0e6777f665441858ef881cb4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/84b5cab0455183b101f308aff3403663e2b8d5": "61c8d83bb7af0dcfa52107caa61dafcd",
".git/objects/0a/319d06f6a616ea3b72ac3a4eddcdf9aabbc6df": "5a07333fb0094c03438ab16d369d3eeb",
".git/objects/0a/c9d1176d15752b8ddca39df3e82e6d6b303890": "cb967d61ab8a0c64535a082060ac0d59",
".git/objects/0a/fedefc8b282b6e171846dcd4fd82cb5a9a7582": "9703078fac441273c660e715b5560ee8",
".git/objects/0c/7de040771baf2148fa1982446cca9b0ffb1ccb": "b61e4e2a14222b02c9aea1ce902de1d3",
".git/objects/0c/8ff546942011d652caa7f180f325c8a67f9e69": "7056971948053ffe2f0406db69cfefd0",
".git/objects/10/091685a02683f9593d4344a7087b581a1265f2": "b0e115d0c44996c33543a92709de8a43",
".git/objects/11/19a41b7603ff3061814baf5b4f9acdfec6aef4": "9b2ededf88a58862acef35573bae91fc",
".git/objects/11/88bdde9bc96b3091c25e1205b817d0fd038822": "3a2422e67907870fa03b10268e8cfc76",
".git/objects/11/8fbac3f36c748a420ac31716f9237275f0b2db": "3a6622bdb34731876b6aa5b6f10570f1",
".git/objects/11/c51b2acca19141d261f31c8c798965ca6cd475": "e712edc3ff1c93126cb2ff22b6ae09d2",
".git/objects/12/24acd48f54baec3d4e770a59665cedb39120b2": "db500bc978157dcdaa5a49c7f80bc51c",
".git/objects/13/584434e9acd123aca543c5e028a28c89b5da11": "a5814b0154a6ddd318ff5beec57427e1",
".git/objects/13/e0425e40cbcca129e877536878331237bc2218": "ed52af32ca6f6015d13bd4f390e4eab3",
".git/objects/13/f399a3932f46b368c5e2a35270053751c6b01e": "a96d7f7f3eb46f81baf78e80bfc75eda",
".git/objects/14/113ea65d54320708cb1b05b9711c1f5c84f8bc": "8201f2e7295041ddf3ff299cdb9ae017",
".git/objects/14/91f77292f03ade7e8ff573bed38a74afc6e2f9": "11d433a36698c2a447a5bd45d0bc7ac5",
".git/objects/15/1af162eec3ecb51915411e37d6698b909e7310": "7cd709bcbc6921f0fa49a3dc9dde2cc1",
".git/objects/16/7ddc88afef394219fd654e2a3ca52b5fa5e103": "0d89759d667f5625f2d94408c1117a71",
".git/objects/16/cf968b4fd19cba85e9da5dcb1ab604cb27a046": "6921f66d1803922f0fd1d85a4a4153de",
".git/objects/17/c95d01438638f80e32330530a580ce73ac73ed": "81ce37521d33dcfd8e6a5a48b4bb227f",
".git/objects/19/3010450420e1f6680a68990b44af3b153cde88": "1749ab8393ab23d38c0f782dc5a33b45",
".git/objects/1a/96522915a6a75de1228eea9fd4cbbe0eb7cb35": "2c0073b19665c014dd2e91c5db7ee4d8",
".git/objects/1a/9bd23d71f6b7479b2c3d95b55828869afba883": "f1f873ae54aa2134340c29f1f20fd327",
".git/objects/1b/05b4e1ec6c20c2eb1779dff32723c2157a4152": "99646c89974d85a723048f8be10960d6",
".git/objects/1b/80959a450d2b7944ccfbbbb8008e61287fe2cb": "47adb0cdc0a4216e161fad00a105a3f7",
".git/objects/1d/54a7a6cd85f98ee73454cb6b16983e7bda57d7": "2ae4de00e0ca1cbc4a69d4ab54aefe17",
".git/objects/1d/6780b4c52a56ed8339bd771a7f709019f5c12d": "52f7bceb8333b6056efac24d0d16bf8e",
".git/objects/1d/bf10621537ef9305e430b45fcec11e90821f23": "e8089631e3951c11b39dd6706d1c12a0",
".git/objects/1e/b319f0d791be9443b36087697d8c4eb65a9cce": "9a7356b06fcdf8b2c4f261419a126e30",
".git/objects/1f/499b4579bd64dd7508415ac070412e77d0764c": "46d49216c2c23863f8ec9ba0f3fff97a",
".git/objects/20/bc14c566011a4c52438262eb06d7b14fb81d59": "15788e966a6e67fac275dc3e95523820",
".git/objects/21/25fb9e106ed17aee6fa9f5786a870d676e698a": "abf996e40feade3365da880310e26078",
".git/objects/21/af0ffd0ea83004487eefcf8eaa3c0e16d7cebc": "473f7ad90b87a126245e25092e6a3f23",
".git/objects/22/6e1f73f6c85071f01b9166167dadd3d38670bc": "7b3c94f7f0f2747cc754d38f4d177454",
".git/objects/23/629551f1afcea09ddad74aa477852ebc701086": "0e84d787dcae48d785d564c568e9a8ba",
".git/objects/25/8356d6bfbaa082b4fea31923f0b114449d61f6": "c56370bc39f27acc86d032dfc4937ddc",
".git/objects/26/16026187782fa54ec19207fc8595b0ae8cd3c9": "5d12d19dcc3c3520dcfe1e4200280fce",
".git/objects/26/2de21dec924ec8a51c4a30bb436281c95ff255": "22402c3f5c5f6ccd7dc76463483a96db",
".git/objects/26/42bb76dfa317ee084cbc4f166117bb6fea90f1": "daed71785615d58b7868178cd915b42b",
".git/objects/26/62e794f5d232082e0d8fb6577e021f0946fb38": "6fc25f947f9ddddf99b2ad7948f636ef",
".git/objects/26/d824add29819ecbcfa87f67edac15c59ec9741": "89dcc29179c7cbbfc1001a9b2a47a78c",
".git/objects/26/db5a89964aaac58283a17f0dddbded31fe299f": "7c3c8a9b8533223fe22bd897f797512c",
".git/objects/27/88b37953b5d0fdcae3b9d094b7a4affe5221c9": "e27379c466aa0eb4ac42380c494a1bc3",
".git/objects/29/3d48c61ca2f9752206c801f119f1ebf5280864": "13e5aecf5b23db440862d801ad45a585",
".git/objects/2b/075ef44d37325a97b9451c3de18c812c1c6728": "20934926477dc34a6b836e9f4144ff73",
".git/objects/2b/e32554563e36748b4949717a2a41d00eb4e221": "e03eb30b9bebb226b6ba5cc182e23cad",
".git/objects/2c/273817841e624e9f27cf278d53b210fbf6ca01": "4c41780855a8928adc9ed467018c5d50",
".git/objects/30/6a00c61f798762854abaaac132cae701254c73": "377a54391d7cef9008a2b932e77f26aa",
".git/objects/30/785ad8ad9ff3ae73b5c9bb2de3e8e1c359ae13": "d4088b6833fe964441e8059e6807d30c",
".git/objects/31/9d661d83a3933206d5cc4cfba5d6f600428da5": "fcdf6ab62b41dd52f6a9c285c7d63f0d",
".git/objects/32/0d216eabc8baa579cd46d47823ceaba5bd7818": "90308846f5b537e6e3751b0a3927626c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/1c1bef1e5cbecc163388502e46dd63d2da3740": "f26ac104ca2ffdccecf2b71101cc2e0f",
".git/objects/34/8418657e21da491dcf3b90fc8814108b9191cd": "34620dd4ffd5514063e19f86915d4e7e",
".git/objects/35/127ccbcb4ec4b34af212f61632cd19f5257eee": "ea08424e537428abf03e981bcbcf43ea",
".git/objects/36/252e7c11e5f1ad6884b38f324aa372da0b3d5a": "b60f3830d02c19381973746ee9a01d21",
".git/objects/37/af4dde392d68f4c42d2c18060ce29fe7c92d22": "a69bfcf3201a0db57de9a88447001438",
".git/objects/37/d5946ee8b9afd5a97d2bfe6a4fd761d585ba8e": "9f951732cc27c74cea510a87449622c8",
".git/objects/38/e49c27da0322a99782497544fc0b2208a1f6d6": "21fd9e38c565b68683beb83f1282e06c",
".git/objects/3e/11f5594f34eee02993b5ffff860ebb06f25382": "35f23f1770adbec4cf53bbfc15c63721",
".git/objects/3f/de414fea36dfb6d7a877dee57e03be7c7224ef": "33191aa484bab4eddd6856675fee489c",
".git/objects/40/295f7ae22c5193008eb1d7af95c4a0af7d18a3": "a2521e9faca3406c18d26184e6276c27",
".git/objects/40/ffd743ee126d7a963eafef25edffd51a788bd3": "bfc1207cfac2e09c26c3b4e2891e9efd",
".git/objects/43/9b45ad270c210a74e3f9535543eb4d547a2e58": "ad20700898eb64a5b8490a7eed765108",
".git/objects/44/1d6dbe5c612dbe6847b2e282cbdbb3c3ae8b47": "84f0b5859431744e6120e992a7d6cc74",
".git/objects/44/7b1b235771e2e2e78dddda5c4c6b29d1eea55f": "5ac0adbaa315ba8600ba15133387e1cd",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/a9e849fc018e079099e8e1b8cdec01f1e1c755": "71ef99c18dbefdd9839cff3513afdf77",
".git/objects/4b/3026f1814bdb910af9a59c61ac63f4d1bcff97": "ed69e511dcca1f06540b522110a476cf",
".git/objects/4f/a0ade298f3953ea4b9ac9b79cf7d57eb752215": "3078aba1669c6d38f812092bcf702feb",
".git/objects/50/90e9c4cc33eaca946e527290705732b8aca815": "bb1e5d2d3a988ce17b7090baee415816",
".git/objects/50/d7276377ac9360c598fa8271b1afe6c46406cd": "55a6a2013fbe18cbcbacf6e0bf4ccbb0",
".git/objects/52/f103330830f0992ab8508f655234f7a81f1518": "48d345e0d8edafbb5e6b6202d5e95c71",
".git/objects/53/549c12c070767689e000670f33dac7589b7c8f": "b6dd11cd9f03729c84d71f39d4747ec1",
".git/objects/53/f81a8eac4c3b3e55aaa5ca2ccee07db1d8c8e5": "21b8f79a869d6b90449fbf65ef881f9f",
".git/objects/56/46d3ec65f78dfd31acdce7fc2c7e54b8853278": "0a7921f42cdbc1b8381e437f7d4fd4db",
".git/objects/5a/f6d7aec6e722376ae411aace631fae76514943": "032030cee0c31174ea99979b5d79b70f",
".git/objects/5b/02df877c380399cc4cbd07e52f5aaeb08ea31f": "bec256b63aa6ee47db1cab07ce40c5ac",
".git/objects/5b/6650279bc2f41b5e8158e2a0c80fa32b7b2a36": "4f026a5a345e298021f841fb9a70610b",
".git/objects/5b/c25a92433b77622ca5f9b1b127122a557d42c6": "a71fb847ef823901e2d30df8debe0cec",
".git/objects/5c/2d8308772481e55d0fb04efaa17fe712eaaec5": "126711074e02028cce6628db0b62766e",
".git/objects/5d/db0a04d3a4aaa71f5aa5bddaa19a74e9b28553": "d763d750f17c2dab9e87ce1107b50623",
".git/objects/5e/76d5cc2a0264f28438c053db49e95d3f4f4391": "0aa60e436c511b3e3a87f553a4f331ea",
".git/objects/5e/f25559e9f66b3755ad5e1df3b16147fe7f7328": "7f9f5343d1d3028aafcc67696323dc28",
".git/objects/60/1d59dbb777641ced48cbf5a0eee57ff2605046": "3a78ebcf42ad72540db661fa50c8a828",
".git/objects/60/4d02edc1019c1f6c9d651066302e5a2c4a2310": "f83f25c42f5047db5008cceb59308d8c",
".git/objects/60/89b85f54919fb835a1e6607258b656ee2f913d": "93ef0a8b49aed1434379434729d7eec4",
".git/objects/60/bf64bf1690001e0e8566204e75174870dfc97c": "59d87e1e1b203b0cf6dc3f450a4ebce0",
".git/objects/61/4e61ec4997f699a06c6fcb5c0ab7700ca6b6f5": "389bb0dfa0d5efa23333ffb5475f128a",
".git/objects/61/86981193596d3bec947253b7ddecbbe60f5293": "ae526d8b6b4b66648b329928a91cdbf1",
".git/objects/65/5d886060696ddc5e669029a8a9e2e7579a0ba8": "ab76ed6089698640433c4d0b673dc65d",
".git/objects/66/a0480fd146c29145347d0c3c67767eb9da7da8": "c25b632418e59058b4d9b9fa576450f5",
".git/objects/6a/4c37972dd0d37ae4aafdf35bc74e54f041b0df": "220a2c005551632f924a5fe8eb1ac930",
".git/objects/6a/ad6e0ffa2185b0a9ac82b4f9a626c0e5af7ce3": "fdfece031f8df808d6fb48396c56f15b",
".git/objects/6b/216d3a9b1cc3a830632186ab2485d335e86231": "8d0f15231618bdd2cf2c2bf3bfd95c44",
".git/objects/6b/58e2fa169a60e6d02bb96ad47f9de47861e39c": "d8e36b556e44744eda3a1941bdec09ca",
".git/objects/6b/b1919d45f592435074ad1bb6979cc9ad6bf141": "9f5defc382c13be2b8fde898844c6e53",
".git/objects/6c/2941d671420719e9d3d7209cfbee5c59c8ef97": "b969e120a6da48ebee899b514961add8",
".git/objects/6d/1d6095aeae9488ca6e5e54556b202256fd1382": "5b8f5ef4059b5541693b50a93baa2f78",
".git/objects/6d/2ffd407b1c80d5e7ddabc16be02455f19d2439": "e5915a8d241f421e0fefa4ef2f9a7572",
".git/objects/6d/96d4b25b694106c4eef5e178ba5fa0e8a89ff2": "46982fe996d49a61abf689ada1f6c8fe",
".git/objects/6d/fd1ea61da39b82f339e66e0fc82ecbb0d188c1": "db8b0d5dcad21a0488182214d12a05fc",
".git/objects/6f/06397f683d59bfe8b8e1425eb8ce44ed564c03": "2646a5bfabea055b76ec2160dcc94b0a",
".git/objects/71/44c32bfcd377a968604074b471e97418b460f1": "e9e75aa719de36f83e8a2ca72062eb19",
".git/objects/72/df0e6f4faa458ba308035575d01ea960d42eef": "cc26e5d47f521c8a48d14d1c82c1fe7d",
".git/objects/73/8a8119c3eb7b0ca04eeedd73ce73c5652677d1": "432fb3553f6b5508d351a51667ac8db1",
".git/objects/75/6ce6a07ddf803a0bb8762e7f089bcbe89116c5": "fcfda2f015b35601182dbeb390a5b73b",
".git/objects/77/48af1f28cc4e1ca9c3d881cdd538293171beb1": "ff61a98e0ddd2c601370886bd5329c1e",
".git/objects/77/a86c52a2383ec48be5beb104d58e0bc611affc": "a28adcddbf4cfe2c234dc8fc3d9777bb",
".git/objects/77/bf0c3444c998fb441676ca840c33b470148a4a": "63a3c37d1ab0ba38675dee7782506c6c",
".git/objects/78/de2549a9d12c9e47720fdf3f3b400a7f6d79d7": "4be35d05a17fe72e36901b2d6ed4d68f",
".git/objects/79/47a5738cd06833d0680bbfe2b0e1283de04d23": "ff875cbb4c44fb33e679b3b135d8069d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/141d5d1b7a71c858f23b6820a704b83e33e72f": "f29bf23ad75654790aaca0e408a1deb5",
".git/objects/7b/c3198991bf4aebaea2b43d517fa314101a1a38": "99eef85639a3ecbf702e0c3a63d9c313",
".git/objects/7d/6827f043055282315a2aa981aa305ca47caaf2": "62037b3560217669b32b1f7276c950a0",
".git/objects/7f/3794f18da0fcc7938fd0d1a2ca62b7a625b373": "2f1dc1875f54d681e804f1d1a6753efb",
".git/objects/80/434e9ad0eaa723d6674caa3e2a338c87df2420": "e37fb72b4906e32228ae25dab0820122",
".git/objects/82/5757be0d4092fc09585728f4588da78c21f386": "77bfba4eb3ee19f5275d01b92ecac74e",
".git/objects/83/8f342699ec96e65a4bb5a7e8289c659f78b366": "e3251e24cce978ee1173cef4a7d09f84",
".git/objects/84/86e7562dc7af55f162d2d3cc8784d9bd9425a1": "69c1301fe4ff795437f0fa203ca36d10",
".git/objects/84/af8e6c0a083eab64d4069ac9a28c3f3d2ac39e": "81df280b0c4f946f8b523e7d6fd72337",
".git/objects/85/7b6421ce9475330e3084fa32acd0377e0f4e32": "a67388b83a2b372673ea69f42252fa4d",
".git/objects/85/a72041cd98db5c02aa5467b66bd83008124fa9": "176d2a9e94ded99f6a11a0f0c2fd425c",
".git/objects/86/055e9cd167f59f91e6e87abe9bed3cb90ae9e0": "dd6ab0f057eba9a71b77d1a740880872",
".git/objects/87/e18e2cf412f3cedde3ff5b424e90e37cd6a7fd": "c6b4dc711f81308f0afa79447a83c0bf",
".git/objects/87/efd3364951420aeaddc623e06684683531796c": "f4c140d224383c0c0cf07b11b53cab2b",
".git/objects/88/1314df872ff82f721f4d5594d2043491c51148": "110b220d084452d488608bdb40743b60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f623f42ce2e349276382cc26d16d93dc406a46": "3b0afbd0ffdb73cb05ca6a612a504269",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/20078d5ecd8ceb7fe4a34bb0e9b97b7c65eda5": "920b7829eddbf57c4c065ad61aad7b94",
".git/objects/8b/c7ac5947004adf1f5b5e810d9b10be43404318": "8ddd9083a6946967654a1d79474f7941",
".git/objects/8b/c8d957aa9b39b42242bcbf93a6f64bfe5d3fd2": "0129d29591b3963f364ce7713685b1c5",
".git/objects/8c/260d554109fcd30b019426521e57ba863ce9dc": "aa483b5d5e50ee148ff156c6bfa457fc",
".git/objects/8c/4b27e9633e07b0963376998f940bee4509fd13": "af37916735b468640854a07bb9d665fd",
".git/objects/8c/dbec051dfd4c4534e3a3207e72b1d02041ebde": "8709dd6de3e282122e20e0b4c9433d97",
".git/objects/8f/e86ac746be9be39b5949d21a2d3db15fa4b0ff": "c840c01742cf6db1e393c03d612a9238",
".git/objects/95/18fb1b8c3fdab7ad8221f3056fdda92d8e5d4d": "5ab0f80952dec0406f7dcdfe13850eef",
".git/objects/95/21043e48f56e2eb259be422468628d6ad4850c": "cb4c203d9d8e0a2bb0e3fed2a2f345d4",
".git/objects/95/ee9cf7f33b092eabc3a5b5a3f83740ba28b6d1": "53b7473bc02d0898b4272a0beefc9b63",
".git/objects/97/8a530d608f9de1e14b555dd21933ddc62c00f0": "b6b919027f3debe42846fd4c604244c2",
".git/objects/9a/01c9cdadb8725f886765d530fb488af7046f67": "618f3c7f7ffbc5236bba51366147bc84",
".git/objects/9a/47984ebdd24b784c85712e8cb42a52f2aaf8fb": "3b2b076d5ab820819047c0352c2a9d1a",
".git/objects/9b/de6424d572a9a79fd903e1076705f46ec8351c": "a596b76b813f05043ab486c2f713c8b7",
".git/objects/9c/eab4cef120aa7aa5cd432067c8b63168a917a3": "056a6a1c13171f054dc8232c49f2edb9",
".git/objects/9d/61c00879c0f041856747d64472172bb3d03488": "361e818d21376d8e245d4b823a60f39e",
".git/objects/9d/c41c1eb159530a8b77fccd2319e7c6336db6d9": "30a1b9c232fc61cdbbff4a2f0f4783d8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/bbe3c53cb858713f3e6f10df1a8e53a71e290b": "60f7e310804140c2cfcf98044490d376",
".git/objects/a2/2d609fadeb732afceec262ee5d8ca536d09053": "66efbb09e6515bad951805d7b922c778",
".git/objects/a2/75259ab4a7f40eeaf48e6b5de3f6dcfe4db5a0": "74bae19f1b87723b01e3c70c5fdf7d53",
".git/objects/a5/6f90b02bf12165868256a1c5ce0547bd5b8590": "f7218e0d423aba3196e3d6e4f6ad63ad",
".git/objects/a5/bdb3912fbf93af92caf1bf7c3e7dd577b356e3": "775f8afa8b3013cdcd4ca9a2837b84b2",
".git/objects/a6/e5799afc970638f8b11d25b91618d08117072f": "584bbb0b190e571964a5106dceba18b4",
".git/objects/a7/2142c3f6cbdd60f87db051e6619d31bd314be1": "b97d181f581713db2e22bacfb9acd1d4",
".git/objects/a7/8a08ec4b18c53557e1ff5bdb09242a714690fd": "0035f9320254af41ced8a6114a08781a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/c62050dca83c5492dc6c92bddf0056c01ec205": "72f70b0798bfdd9c61277afbb1767a8f",
".git/objects/a9/516ff311e3b098ba09be6d448fa9621e67c83c": "ac460432b01d8c93690d1b896282c53e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/adcf0b8a3a2514b34a9f113e030e54046222f6": "075c6945601430e43a2a95c1bd10caaf",
".git/objects/ac/4899fda6944867e90788805b0eb8677c4ac113": "e4093675c42eb18da40615c74abdd9ec",
".git/objects/ae/903f5d0ab70ff730970bf3e9532468b86e4737": "f877f6bd2e6402b495cf3a546f9a7993",
".git/objects/af/59dd1679fca920dcd4cd720c6315add108ca11": "9d7314991cd6d92b0a172ca9a32c7fb8",
".git/objects/af/8803bf44536b139a7739f8edf92884e4f323ab": "7b7894877aa54521d737de700890a389",
".git/objects/b1/d5ce4e448a245dd097c071a8aa501809ae2a20": "7fa0be091d1671c56d6a6e6ffe8df2ed",
".git/objects/b1/d8c17c1622fcb9b495cf5a198c9701a7876706": "81515a847d74cd0cb5db9b1431fc769a",
".git/objects/b2/fb9216683efeeb78689ced9ae2d2410b97569e": "92c08332f5be3453cb23f8e0f1f6477a",
".git/objects/b5/1f5ad51deda9cf6f1efcc11151fd24245f147a": "7f3e98637814be610c69d2dddba81cc0",
".git/objects/b6/6bd9550f09c07d370e6d9b08b86f29adf8710f": "6ac9ac0f934af2acae86f1a33aaef8c4",
".git/objects/b6/70e14bd33d59a7861600ce05d446f7404b63d0": "edd5df6fea05e83933ca5aa0e377b5a8",
".git/objects/b6/f883ba593fb1a9c30873efbe7ab2bca260768f": "a49a09cce0cdf78177165d6d00a084f5",
".git/objects/b7/0a7c46a272f76c5eb3d1c0819a79d32cce898c": "c5272dde06005b25fddf9dd4a200ec72",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7fbeb1a8da3ad6194799eba78d3e1425736dce": "24f503cc63d83cd955d2851a11260235",
".git/objects/b8/f366fb342a40e61038885a170dea74f1b3c90f": "721cebad3bfbad21c7fe97b1a118c127",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/915ecf604db92474b1a84c2158af051069cd68": "0f93427e2eb88e9c0c132b0aca40f8db",
".git/objects/bb/d48d6ae02403f8f129ddd5822b69b3f68c0256": "f7543c162baf8219dd75a9caaad245bd",
".git/objects/bc/c15e3f70fa6245f640c0072a4e800b6a828bb9": "ca91f7ddfc16595409ef8b11db6d269a",
".git/objects/bd/7d9277063727b0932d0cd641a90bb52a276267": "9a29f6e3ed89460b5df1304bb4a067fb",
".git/objects/bf/185e9b26c71d3a7b57521e8bf3a66ce5b85170": "25df5f0c1a73349b57405a6491db6ab7",
".git/objects/c0/a718ad7d2ccb2cbb41d861be119e00bbca7163": "9ff603e893554b10494ea2e946aab345",
".git/objects/c1/c165bbe1f33500547950152d3f1d7310cea3c3": "123521c3aa194fb11b582a0b4fdb9e46",
".git/objects/c2/85bae913aa48787cc7a148bfe7dabf1c6d51be": "d86411ecd5176d3702b8c2471d9d4b83",
".git/objects/c3/8a40cf10c0308d1c62a3997751f6f7f1221d1c": "18ccddc598d4436a31ceea722fc704f1",
".git/objects/c8/8f6bb8876ec74e4a57b0c18c65bf24f3e1db8e": "a4fb6eb7ecda0a476d55b9aa24fd3db0",
".git/objects/c8/ec215ebaf433dddb2b58dfd62119a3bf0fedfe": "fd24866effb025032ec669a4f044c163",
".git/objects/ca/7b61a81458daf8360edb8b9634055d9446e9f7": "f62544415090966b8ca0ce8db43b18f4",
".git/objects/cb/7715fd41fdeeccc8e6bcd6e9c48939ac7a458d": "9ee392da223683925e3eea090c216bde",
".git/objects/cc/7963ead8697bc412f58134d6ba968ceb2248d2": "47da0c17afd136694c883b768d342c43",
".git/objects/cc/94aef9bdc002934882bf85c43de0ad7b6d11ed": "8a04db969b529d81704700a2068d88de",
".git/objects/cd/f368a875d2bfd9215c86e1aff108a20a8b42be": "535812d75473a82f61d7bbf766896b75",
".git/objects/d1/c4826349d2815ee7e13d7e79fa737e5d5a285a": "11f30fa0e32ad72425d54d47267b54e4",
".git/objects/d2/00cfce39d6496a73ec52d39319a99d1be42fa7": "c8c8bc93d97a7758e1a704c976cd34fb",
".git/objects/d3/1c5c68dd1ec678635481527a06ca20b2646e1b": "3d41d70dd3d7ca5ad3b1ac288288a2be",
".git/objects/d5/66b629b8d6fe4963f101c0eec962a514c97eec": "83188f670ac6bc0d6b64b6130071b2aa",
".git/objects/d5/7a12ba526fa08e3cd609dd17360cc5797a7417": "0c726e4864b4cf0bb97318fcba9908a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/01c3a4159e277443d44e926e5cee5199234a67": "f9d56c5f3d4623f06857b09c4388d7a8",
".git/objects/d9/d7b6c228ef5f1f388392c33f563ab6f15b377c": "965282949db6d756a317679936fed4ae",
".git/objects/da/918c48c4948d40e63655f0d55efe2fb3f2f882": "4534baa558f4662210d6636dba1887ab",
".git/objects/db/557b18cff0570d2646657019c159544700b4eb": "faaae86db64c35509e38eef4adef20ab",
".git/objects/dc/e37bbfa07e7405f519810a42ed065afff3e424": "ea5ef42b4034cff58de429c5624389a0",
".git/objects/df/b6eac1e96cf2497c87573ba9cbfc02ac3b8d98": "54a743945f216cb28308a89dff9282c7",
".git/objects/df/ed4543b1831f19219d1f5d94e3264bdb15b6ad": "fe06cd89e661898765381320e346a030",
".git/objects/e1/6788e04e917cb33b900e4afbb95db9dab69661": "d37e5308a3da42a7f9e1b25e10b79e7d",
".git/objects/e2/817e93806e5f1d7479efc48542465a248be349": "84bdf0e71a6d3d29832cf7ba09e1b6ee",
".git/objects/e2/bb430eba94905f62434c14536277fa2d6e948d": "470e7f6b8737bd083d0721f8ac243990",
".git/objects/e4/178661fd6db4c1a81b28be1c33f6e47080353f": "b4a34d4745746ca72e2b49205c172a03",
".git/objects/e4/530d42528c96e81caab663d7fed887025ad253": "8210f7b045b1c496d7122441802b9254",
".git/objects/e5/0c96045a1bd538626bdffc53f6d538f629b5cb": "df296fae778537293e12fa3816d711b7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/45fc0bd13d483d33b9c82a3ddbf33c33818410": "9577ddd095b95b0affd8ead49d38fe80",
".git/objects/e7/1e9fc905fd3661fb4dfe70c748e96f93fe8202": "f0e746e79a99afadafb4bf4b651e6c6d",
".git/objects/e7/c7eca696f573da20bfbf6c1ee9f888e450dbd6": "4e3406b288e1935910b30b46c1e489b3",
".git/objects/e8/9f70cef62be55c7954dba826da9893d12c9cf0": "fffb2637e995a7ed0be6057b53ca06e3",
".git/objects/ea/b3ed5e1bc4762d381874b107b71c2024ffbab4": "0812c0b1021386953490b27c0c669be5",
".git/objects/ea/b8a955d81995748c2cb42c49888979333dbc7c": "00483e58cd2a7690843435dacd9d0b53",
".git/objects/ea/b9fa96e148d6d0e0f4e606c1e4f691c745166e": "c4cfe0602393dd4c96cbecb322846d1a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b58641ead1bee7bb39c6b840977d577577eb5a": "f975164b55c996bc7052e755afaa2e89",
".git/objects/ed/b75a60394fe9b318eacec4507cdadf114f545a": "7e6fc7071bb1e6f0bcfefae5a086261c",
".git/objects/ee/91b8480defda838accedc668bf40a65ce632b5": "82dc682df4cc7fd6da1dfa371bbe7520",
".git/objects/ee/9b0ab32f6eed6e41f8f36bf5846f1b8c6cb3aa": "cd0021008fcced4cc2ba8d803a4edf1b",
".git/objects/f0/0130ad4bd748de443ed20c85fb2e3691ea5afb": "4db50ae04676cf50faaf0f7b6a6f2a14",
".git/objects/f0/03bbacd561cbd8833e3d34f0581ad9d5ec4df1": "1922c2d8881f000c0e4a0db25a6bd016",
".git/objects/f2/697b2e11484e439a896bb90639af6b188bdb01": "1d088b4763ac65b1a781756ebd355e34",
".git/objects/f4/3c17f57505032c99dc22c27e8479d83bda6fa6": "d489197ae1767c1e32b57e9c01ec4199",
".git/objects/f4/99aa75f75c1ce2635c6e375d571bd944b6423e": "2b56e1eec130aef819b682163f8f1903",
".git/objects/f6/0011ff339d635bb7e7b67f0ffad8938be47814": "7ff4713b349dd5f1956631dfa9b0631c",
".git/objects/f6/41519469f09dc4b44b71deaff4467969bcd856": "578e6f4bb477789f1969a69c7b6f317a",
".git/objects/f9/c34d691d150af5ea2d54a7227dbf1eee103c4a": "d5f57fab87e222422f6e20a246c8227a",
".git/objects/fa/dfbdb2b9a7c59040cab99014d6296094f85a5a": "4bd1d1c55b9f3224677dff6329df5251",
".git/objects/fb/7a8f8b0842cf36810acd400971431110a4074e": "7005cbc5832e97055663708d8aa1f55e",
".git/objects/fb/d070e9ece59cb16458f4a0040005d796cca40e": "139775371c15c5ae076f20e417a83802",
".git/objects/fc/4e373436ba8b2893685b4f50715b8418573323": "3ab139d8dd48586084bb0e4320388406",
".git/objects/fd/deac2015b9773c922f709ea22ecdf5545ccc6a": "47dbede6f12f27732a6c07a717cbcef7",
".git/objects/fe/e5836c6f5c0afb41d3a773bdb43b012db8e853": "43d1d67f5d3b80dae4f747a3a9275038",
".git/ORIG_HEAD": "5486d99393af31d56012f73af4e652dd",
".git/refs/heads/main": "0c6804163be034b462a59a14ee325584",
".git/refs/remotes/origin/main": "0c6804163be034b462a59a14ee325584",
".github/FUNDING.yml": "de78548d5c8317dea42b07b2429aaffc",
"app-ads.txt": "ecefae8fea8e595524c22c7a28bc2566",
"assets/AssetManifest.json": "4e7ad1c47af8847c21e52c09e27e176d",
"assets/assets/bitcoin.png": "24546075431816b8ab5a5b0fde093e9e",
"assets/assets/ethereum.png": "e37e8eae3fc42945b7fd904d18ac54f2",
"assets/assets/github.png": "1607a3a71b55547fb4da1ce188c1bc1b",
"assets/assets/header_banner.png": "474395feb2616d61352e1680a48a76f3",
"assets/assets/instagram.png": "f7f3a532edac0e4bed85358c4f61e7a0",
"assets/assets/litecoin.png": "afde79b0f20237956b68b08bd09ed5b9",
"assets/assets/logo_orange_512.png": "106f399b391ff8578eceb65eeb25ecfa",
"assets/assets/logo_white_500.png": "835778cf4df1da37af6f676551f35a35",
"assets/assets/msp_logo.png": "988f21d022705c78975b363dec1d8682",
"assets/assets/twitter.png": "0f4000dcf7f613cb514a595fb970303e",
"assets/assets/us_congress_logo.png": "a119085bf551a17be3cbe8698f342309",
"assets/assets/wanted_logo.png": "b1cfd21477a40aba9ee450b3101772ab",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "acaf5aa03db3c7ab35441c36b50917d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "58ba91914c5b67f607751a0909a8190a",
"favicon-16x16.png": "2dad8024588b148c56332c439f170e47",
"favicon-32x32.png": "a93792c78906e4155a476e3c4819d3c5",
"favicon.ico": "d6732449512bfc8c6b944cd45d742bca",
"icons/android-chrome-192x192.png": "d1d307053ef2337b5eb9eacd35e91ff2",
"icons/android-chrome-512x512.png": "174fd11c574ec789437981145431e35e",
"icons/apple-touch-icon.png": "db297e25e121fcbc3764b992e997b8eb",
"icons/favicon-16x16.png": "c265ebd8874a8b215bedc734438a48a1",
"icons/favicon-32x32.png": "91861163a9566966b4ae5bd581d86728",
"icons/favicon.ico": "3c7b68e3d877557179d0dd043fe8f299",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "ea88bd5acbf2305d59ad02535bfeb78f",
"/": "ea88bd5acbf2305d59ad02535bfeb78f",
"main.dart.js": "2531dfa201dfa237efedb433db2092bb",
"manifest.json": "bc3edaebd04c9d0413abe21b9f0c15f0",
"README.md": "573485c83b534058c16077ef718b75cb",
"version.json": "7d122104eff3ae5aef90898788b6bb49"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
