'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7a1823f6a9c9cf1fb43c9fa4745078e4",
".git/config": "f8d7e2a185cc96ccbc9917f041996022",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "48a7739cbc212f4486d42c5b76311645",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2ea9aba56e7035ff7df3af13dbbb028",
".git/logs/refs/heads/master": "c2ea9aba56e7035ff7df3af13dbbb028",
".git/logs/refs/remotes/origin/gh-pages": "01ec1805ecfef5ad360cb1cc490997a4",
".git/objects/03/ca258cdf2e64c00ce7d1a91bc2d51ca72106ce": "684e6223c5cb662cb8829866052dd1e9",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/0faba2b40037221a25b33e441d0e376b94f4e0": "cc56bb552ac7964f5bb0a32b3b72fdd1",
".git/objects/0a/d4d954c22e31afd90f3791d85a2688623ec52e": "c5a552cab1c14c72b0da901d11d57fe2",
".git/objects/11/d02dd061b1ca886d8bb6af0473f742768efc26": "ab16c4f0462fba04f4b6801690b7fee8",
".git/objects/15/02b08989b81fb1dd6b85ed6bef7b34a0551486": "1a1673bd01e74589c79f79d9868136f7",
".git/objects/18/6f1782a7ea1002cd9eb89d1afe866f3bbf342c": "51f6bec94b98db4e8f6b69c7ee7aebe2",
".git/objects/1a/4f0dbbd53d3fdada9ca1521f27ccbf170f03f0": "38256eb6b9545595340749f9db670c70",
".git/objects/1c/14965493ea704c73f4c0cfedeb0b22bc6fc190": "c91f4f4381b7aab96694ff581a15a177",
".git/objects/1d/334476ea64ccfa19e40faaafa9b562838f71e3": "92ce71e8df408ed4638c5e6a89484736",
".git/objects/1e/ffc99d15aa051e80a32314e102ed0f30be7a70": "c9a686ba55ffabb422a6f9025c0e1d32",
".git/objects/1f/032a44cab5139f6990ab055aea445e608fa864": "4f61c09e2c5ed4d9ba6a8f2c53277ee1",
".git/objects/1f/d0c82c347224508d6ac8e9409a365f82e34057": "456b43d5fb508a29369c283d17118ad5",
".git/objects/21/2c0d7eee37e3105242c69104897ae49ed5c337": "12a924e486b28e91b56874beda4aa408",
".git/objects/23/e999141f403f9b753454ecfd4df943c13648a6": "8f7309b442b5eb20da60252740a28fa4",
".git/objects/24/670a67c75e0c0cf748015f916767f7939ae34d": "1959f496b81a4322ecc337013f4308f4",
".git/objects/25/7d6ac46d0da66f89fa0f0781d1e9c8a7b34701": "661b71915b8127f66362a715f41aeca8",
".git/objects/29/3c457d849922d99d3c90a89845ac1aa63e49e3": "b4c89113a4ea4b3797b0dea617cf2196",
".git/objects/29/7280e55e182726d508c295223b2d492c8fffb4": "6426e73396551081a63ef7bc811f7099",
".git/objects/2b/ab0db8e2af84cb67a13e57da334ca6db10a45e": "9cc9a42c97d9b1bd6b2c82cbcc7dd46d",
".git/objects/31/459b29af91e45954367e97ac61314d06b93008": "a5b95417965419c789704bacf8da5573",
".git/objects/31/7d3104ba07e8c2c0f9e6373a0d538fe3a4a54c": "69279faf3bcbe2bfb3f8b60f0b3cea30",
".git/objects/3a/8c92163c1c8276df9c04f82fc9f72c7c46d9f9": "d212c59db9cd846313018da637a99ed9",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3f/d1c281b60623629b76028f012130b30b8e5bd3": "2f034c5af77c1e24a1905291247a920f",
".git/objects/40/fd7cce870e2035ae580fb7128e2aafa89c3a93": "6abf382bd3734f23a88e1ca15b52d484",
".git/objects/45/fe940e7c732cd84afad918d11bf7f1edcabfbf": "17f06af40fd0cc2881dc5344a111af91",
".git/objects/47/157d69556c0d59a09ab56eb1a19de2ba9197c2": "0877d331aacc473bba58f74180d9bf6f",
".git/objects/47/48a78d4fa9ff776c003289e32255f9b09c540a": "bb57513ac93e450dd512ed281dc52ba8",
".git/objects/4b/59d435005c0a0799ce39ff921e8acf7da4929e": "007400de648bfc91f942bcd55a378461",
".git/objects/4c/f02d64a3940e5efb7c8901de4dc21440ba3fd7": "cb2dbbb61f3abfcd8627f76b272307f2",
".git/objects/4d/352ad888898f33d765dc5e7f01dcc39f959221": "73ea96407652fa5b59b6bd8fbc0f18cd",
".git/objects/4e/5f9408484df2e4926def2ceb46331e3d47b7ad": "1b2154891d635e6b6ff42c5f79942521",
".git/objects/4f/9a84ed415cddf67849a0bd065ab9ab8bf5fd74": "22888c947b3286a9d3865d615c53aa23",
".git/objects/4f/d38f1ab6019caf9681c35335c1e1822f877d5d": "9166280bc332d37d23349ae0ccbdb682",
".git/objects/50/f03f6b5b517d008fd0037fa31dcf8b65a75716": "3191dd12ffee3cd143e3e5fc1321a5fa",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/72f128744e0770c11d7724459ba88018fbe31f": "4e23ce679dd2da390e209506de15eb7f",
".git/objects/56/52edf3f7345e9fe54311fd30a3330bdc21d203": "842f7c8372f11a57ec915f29541c873b",
".git/objects/58/dd754f50e8339c14847cdf8442dbde52b60b6d": "9b2255da6a505acb19a08cfae6a83056",
".git/objects/5c/bce786ba3e66276c7ad2af458d3e4db82bc3bd": "54c35b3ca0b5d250c0ab4716b0db68f4",
".git/objects/5e/c3305ca5f185b33272a259962b1fe1bbd7bb21": "0c654b6909b1d49cfce770bcc4b9adc6",
".git/objects/60/ffca838eaddd2e70d72bec342d288b9cbf505e": "e5bd297f60fadeae5d7efaf2a248a90c",
".git/objects/62/f2600969ac82f73ae89c9c34779cb54c1cef7c": "2173d7c3a479cf7f0587f3eca5af52b4",
".git/objects/65/49735c210d91cbcff7085678f5109321b5f7db": "c02ac0933848558fac1a7bea232ffa95",
".git/objects/65/5359d88b8be364a7f47ed4f7153df3925bfbfc": "c411641bae7d8154feba87230a7b1cb9",
".git/objects/66/6e99980ebf41f86713d213efc2416d10aadbb8": "c0d0905950686fd98016a271c3ad48a1",
".git/objects/66/eb25ef3d268b0b8afbbbcfd09d5147690518d0": "bb4c410157b80a0fd043dbbb8a18d7cf",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/75e7335dd1871c0a6a9e7e8f0b66fc2c27facb": "c4e002f2c99aa35f0ed7e2dc41ad152d",
".git/objects/6a/484f452a04f9fea4272ec1ed671c1f3574d7d4": "2da012b485778858415935ef407b315f",
".git/objects/6b/10db8852a86a68de6e2345c4180baedf33f987": "25c522f4f6a0afff0eb37ab8f53c72b5",
".git/objects/6b/1113a8e1ad0f7048fb500054df1773a1b0bd04": "4af94b10fd362dd80b2023c02d4eb9e1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/f87a2ab0bf45b268c022a1dba399aaabb41269": "8bef038f1025be85d5d452e86953e80f",
".git/objects/6c/a8298f7fb7dd1692fe6e35476858e2b4a73f9e": "8892e9865d25d7fe920181ed93101f0d",
".git/objects/6d/eee3df24b1ea6382db8d9f1a1f5167c66551a0": "bbf6e0bf93050e264fe211b620adfe38",
".git/objects/6e/01995771f341624f0e9eb4ff5a429283121e29": "d853ab4450e16a9274416faa09a54d34",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/5c65fe3f66e22aa6fde62a668f8af5f9ce6bb1": "042519e301d001631315e3f4fb4fd596",
".git/objects/72/aa1d7264f0bd2838e10f5b2105b6c6484c78d6": "34973dbde456146bfdfc4c7a32963e98",
".git/objects/75/2775c1eb29ebf1d1a8cf52245bbffe8a1e51a5": "832dfa91de0d8b7b21a4c4b149745d1a",
".git/objects/75/b07bcb38f341845518ab2612133e4e56fc24df": "343495e7580aa1081be4e761944899c8",
".git/objects/76/3878861a8d4c63d5566e0c62f1aec6aba1cca1": "28c2796e8bf6ec7e2e685e0e50a768d0",
".git/objects/7c/09dbabb2b6e3bd34390a1b21b1e4adda19ab5a": "16f6a1e4898a6fd025d014ee26f2b658",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/37b7f01ba4b863a38f8e78c306799c587296e3": "d8d9ea290b704cddd6c5faf04559121e",
".git/objects/7d/a9c7588a388e914e49d6bf19121b3057d38ec1": "3042b7936b68a8a60a94e7070aec1f95",
".git/objects/7d/e6fb2e8335d2db7657ae6cea7e2c001d8f714d": "cf39aded28586363f88e749613583b9c",
".git/objects/80/59ec023d3decb0f989792eaae566311213675a": "a8c9b41616e520093c44cf60a3fa9371",
".git/objects/80/885b30d8bd568cf76d8a5be6890ccffe78c0d8": "83abd808ab0478662f6ee3c9e9872465",
".git/objects/82/19e5281f7fa8e69c721c80472930ddbc869ff2": "b6f7b95bf949a482291fbd7ee09fc43a",
".git/objects/82/ea9e083636c7f86d61b049417a69ae1b91603c": "4508d53a367394a0e1a2664118cfffe7",
".git/objects/82/fa9cfb1ced31c91816c8e0ea10c013090384b7": "489ade1ef046117f8abd7aa6e56eb6de",
".git/objects/83/2cd64357d607a427069c1cf641c8e4715dcb74": "ff3b2f66a5e850e82033669d8aacedd8",
".git/objects/84/aac4a15636c6bea2a10d38d00fee5d99dbb9dc": "1707eca08ef39ebd7741c8613e1ae56c",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/bcc1dba1dce148119974d02dd3949fda8a9de7": "4d4c0a9e17da5323dc5fec2110db1462",
".git/objects/87/108c60196fe2c9aa317f5e7539868b54fd6ac6": "a59dfcf8a6da679635939f563d383100",
".git/objects/8c/647c0836355ea641e3b9be1797d1fa175042d1": "13ebc94915565e7e34089f9dc497e5c8",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/86dfd232ea253094506f9077009abc23c3bbcb": "408ee44ffd6db4c4133f9c709b726d37",
".git/objects/92/362346aed484ac5cb77054c554e8c9b2ff48f3": "cd107240b6eeaf7d9cc5a753f5657b27",
".git/objects/92/8753b8a2d58d44cbf7e97561d0a5bec88374a4": "8005988b9e26e3b5e16ae25125eff0b1",
".git/objects/92/d1862d6f78680e173671e56c646f1ee3f2c30d": "26d1140c89d71286852f254211cf13a9",
".git/objects/93/6540956691c2480d8d9c80d4fe129a7675994a": "ae4a85505bfd287f12a7057d0e2fd4eb",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/dfa9d9ce0ee30914f2b22a681d1b97df6c705b": "fdd13dc4360b1c6cf216424fbbfa3557",
".git/objects/97/0f184ee13e43996c2469f5d08145f21886142b": "abee268afb783f6f82a3e7f030ef47be",
".git/objects/97/4fd9ebf44d7f8616e926339047a91f38c0bfd3": "1a3a0ad2fa3281d6291f615c0a34c8f8",
".git/objects/97/a152e726426c13fae95ca7caa61eed7f47e479": "f99660447ef7ddec88f4d4baf1a7ac04",
".git/objects/98/0105c2ea2944957db4cbbc6db55999b7f427f7": "a948383cb1dd5b14e0e0f0eeed018e54",
".git/objects/98/6efa4d9400fc9465825424fb4c89d5ee0b2dd6": "35d15851cf74f118e158bc5b8c467898",
".git/objects/99/2a6a5a48c7b7c8e359bdacd6c8c76010bab8f8": "896b1acf242e5882ec6646bd4cb2868e",
".git/objects/9b/9733e536423cfbb608ebdfd3d23aead48d22e9": "ec91f81207615e7fad9cc2dcaebb78a8",
".git/objects/9b/c7a380be2e1b455e9399a95a8c0a28980165ac": "cfed73704282a6e6b843dcf9aaaea2e3",
".git/objects/9d/67a2bf6a5091586afb603ff2091fe921f2ab2c": "87c878e6d91fbff58457a48da6baedfa",
".git/objects/9e/79bf6cf09750dd78ee865adc7f58ecdcc07c55": "6d7a800a53bbfaf227baaacad2a69de3",
".git/objects/9e/ca07bbb12ea2447b8928ad4bcb56e1e6a82bb6": "478ead2b216f4216bcf41f936351e59d",
".git/objects/a1/1b839e81114e4faed35e5cf84cfaf6c8bdae2b": "71e0736cbb80f169dfc2cd346efffeea",
".git/objects/a1/46d6989cb8ac0ba754ddbd934bb887cb4a3b2e": "6c0fc5759c0fd9be111fc780a32a410a",
".git/objects/a1/88ccaba68d49c08da683fd33f89cf4cdb2a29f": "7adb6ddc9ddc72ad4d7a847db0f9280d",
".git/objects/a1/ec296334a848786856c0a356dfda77ce25a3bc": "62832adcacb068fc5a83e0e64639ec85",
".git/objects/a1/f296262c24db52c3945189d2e01c4dd4ae50c7": "2d7fb1b8045e6b233dd565adbd787f88",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/5627a1caffb80ebbdc8a94d67d4c0df126e5a8": "0e020f8f89119fd6db4d5ee2511fade4",
".git/objects/a8/6498f39175383d07d015547ce6c63a298c2e13": "de3ec3614f3298e2573054483b721c01",
".git/objects/a8/8584e79bf5f437671d746affcc54cf9e066c06": "d911c8705624927f5350fa5d034a9bae",
".git/objects/a8/f852783b7ba0ac99984d1edcfaa6dd36f4acff": "73689d0ed10bb03d6a7149a08b17adbe",
".git/objects/ac/c68c076dbc733cb9e7a0b492ee779081801091": "4b03027c0b5b238400a52f4d36fe2bb3",
".git/objects/ad/a4becb16f9fdb08b5c55857c72623ba9870f07": "72dd75704aadae6b0ed27a1e92f3e4f3",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/9723f927c0f65b34e9c3b55bcb331be02bedbe": "9b95561f81b5b06a1e9ab0710825a9fc",
".git/objects/af/de42544c3ec7191295d9a920b4b5b521be3269": "9541f7f697b3afc425a0efdfda96be22",
".git/objects/b1/ed314bcd43fd54376d8fc81e943c5daa322f9c": "cfca3b64b37cfc57c60863b858c59eaf",
".git/objects/b5/4d01dad10a83d9eb7f26664224c564b803dd21": "30fcce465f508dd099163ae167ee923e",
".git/objects/b5/7790454c489e7d4ecf13468d24ec6efae3e3bc": "017b0eae05e018ac7e3a05cc184fb6c2",
".git/objects/b8/3de92aa59f083c84efdad177013502b41ad121": "2ed38a7ae6cb85b6793742ad31d86032",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/88f431e8dc670d0071e6681d0105c25a44f5d9": "6b1621fcce7fd66037cdef5333d191a3",
".git/objects/bd/5b3fabc801da1014cbeb8ebffa1cfaa70d05f5": "e14c5fed98c7a1b95b0023425849d13a",
".git/objects/bd/68b6bb95592b77d178ca24d5ac3d13c24d99e7": "7c861d7bf3df0f1e668e22e8c641ce1b",
".git/objects/be/1355b33130bbd8015dd83a8f85c7cba428da31": "77e4f692061e85c068e7e8a6b786e2ea",
".git/objects/be/4f3133446cb505a7778a9c7898d60af6f98ec0": "4fa4217be234d49c559934e681909535",
".git/objects/c2/3182bc2d934fd9bec637df2e44a160b1aead40": "9c02c4d7ddabcc9332edc6e4fe8bf768",
".git/objects/c3/b0b160b5f5e61c376f8c3be86932587ade5050": "01e82cd567c4b3afad4efae2f6dc32d8",
".git/objects/c4/4b43ebf16bd96061834f1631f494efdf53c71e": "471fbf51aa0056fad0f9ae55b77a86b2",
".git/objects/c4/936ce9f03b80f3b3b339c7d5c5b2a5061f5d27": "5e5c02dfe45eaceef706ade942808327",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cc/f5108f0b76096b3d32746dfee0d36f928ea692": "c6901ccdb09bf0761b2e4467e4d078a6",
".git/objects/d1/80ab17d0b2d3dccf82b85eaf9a97974821318c": "50bff4e4b3b4782a79fe121cb2298785",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/28a1dbf81628f17c642ab395f16979ab154678": "255516011bb157323d6938f8a7064a68",
".git/objects/d6/56461eddced3d4a3f0d643cd4602e9f14b949e": "ef0d1774ecfdab146350be9e972acb8c",
".git/objects/d8/75032bd154a52c14a00d18ab2e527047751402": "3f770ef852412fcfd96b78fd35dc66fa",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/7eec093e90b7207930b325ff9e4b7567cfad29": "09f218d0fcf458c3442fb6758301fbec",
".git/objects/dc/95f546bcf56008c28cb56381e4fdd27eba298f": "fb1a8ad2db1678f30ad04d31094806e7",
".git/objects/dd/3702a2e98f64e78329336acc6fcf42a3287dc0": "af389fef9e246c44d2a3b78b60a6e678",
".git/objects/df/6f0fe7b90ffb1532b8e65fed7c99c3c6f9ebdd": "cfbf838c8e71b5f1d529d0b725c3938b",
".git/objects/df/c181ddde5760ad5f5e932769464248e03d3ecf": "6e1e6a11d6c614156d59231deb92ca8a",
".git/objects/e0/dc328cf9d10d3d56cc2aafb7df276146a3c073": "1a8dd7f4398d1cff0aa12af60ebba655",
".git/objects/e2/258d2e39d31869715e62555ea81b9a53d1f19c": "508cc6fb3edae8a8c7978299603d68f9",
".git/objects/e5/a3d52cfae6221a4cbda07a8bd8384b40e73302": "d17c6550d76bc548518658ce512309d6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/fcb0a63afea6a85344812747532d47e22c94d3": "be5e07476e59e5cdfea88166df2728e5",
".git/objects/ea/3dc28f5f9c21340eb657077a8cdea635738a06": "6e6a2267c592cb8b028af2766ecfc127",
".git/objects/ea/e62f4fe09013732d508f41e25a2aeca8bcda9b": "91f710ff5de8a494b7afe2002564bb4c",
".git/objects/eb/ed34d4963e73d041d40d1a84a72ed9eb945991": "1acaa845d7b8fdef17ba2371d2a6f52a",
".git/objects/ed/21bf9239e6614f47a444453ec92fb56fbad401": "96524ef051053bbc470764df0655ff0b",
".git/objects/ee/99db85878f0965f8b740b5b0ff75614f597423": "88a4cbd3ea80ceca76b5b45a5900eec0",
".git/objects/f0/6fe5431a582c5d379e13893e34ae5317e460a8": "aec9377b4c2b1fb3ab3ced9f74c4ddf7",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/91b8611a8649e0cbf422d1d8af0c511a3453e0": "435ff3bfd5091a9f9ae0a35fc1b8d43b",
".git/objects/f9/c2bac854153c30d594a64069a8e5e222b0f163": "554100c308a18be959cc04dd85d1b2ee",
".git/objects/fa/27b1ee58ba05d0bde4090ffd6bf868250a6de3": "33ccdec3d0775ff4e8db057d54c1096c",
".git/objects/fc/128d696efa0ebade3aee61ba549f156c7d6985": "ba6ee803f69ac0985ebca663e453d2e8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/bc81499f855117ba1c704be4d2af6debdffdb9": "f53ce5840f33c39d1e76bfa70d439133",
".git/refs/heads/master": "e1ff90ea93522b129a2737cb2d6d4575",
".git/refs/remotes/origin/gh-pages": "e1ff90ea93522b129a2737cb2d6d4575",
"assets/AssetManifest.bin": "a3e16edaacaccd19d073925fa1d8698b",
"assets/AssetManifest.bin.json": "7dddb4e826a791c4e55850841903882f",
"assets/assets/images/backgroundrp.jpg": "a95d88ce10e8946dc0f3d51ccdd66419",
"assets/assets/images/backgroundrp.png": "b942afa7eb9d6d5e1f1fef2a3be41dc8",
"assets/assets/images/dashboardscreen.jpg": "70b8d55d36439ec0c62ce45a4472a4a3",
"assets/assets/images/DWR_Black_WING.png": "7eff96cb113d3695d1c55bd7eb7e5fc0",
"assets/assets/images/DWR_Emblem_Black.png": "2b7f92429d0a7a45531deef9f7441252",
"assets/assets/images/DWR_Emblem_white.png": "4f45f5d51bdf42a6503a603863530895",
"assets/assets/images/DWR_Primary_Logo.png": "ceaf8583da52c19506fe82db7cb10ec3",
"assets/assets/images/DWR_Primary_Logo_Black.png": "3c98b370f0f58d2589be9511b34015b3",
"assets/assets/images/DWR_WING.png": "7cbe5f2839c17ece50ca2a08941fb0b5",
"assets/assets/images/DW_Racing.png": "c98ece990aa890d53e64d8234eff069f",
"assets/assets/images/DW_Racing_Short_Black.png": "af60bdf0f3f026462c73541f2c6a7fe2",
"assets/assets/images/DW_Racing_Short_White.png": "c7e3f4fc2ad058e2a03cf179aaa4f9ce",
"assets/assets/images/eventsscreen.jpg": "7e00c29576c16ba1c35001828cb173b4",
"assets/assets/images/loginscreen2026.png": "f71a27852c3e7ad9c953d58e0f393985",
"assets/assets/images/test.png": "6d0424812e9c928ea016309fd9edc94b",
"assets/assets/images/test2.png": "c7abf1368ec8698c499f1c7b4156cc90",
"assets/assets/images/userpage.png": "799ac7314d04cf41463dd2df94577fac",
"assets/assets/logos/DWR_Primary_Logo_White.png": "d51a0f91396bb1cc37e5a9ec73546210",
"assets/assets/logos/DWR_Wing.png": "7cbe5f2839c17ece50ca2a08941fb0b5",
"assets/FontManifest.json": "40b12a256d61a8e4ce901924907e6fcf",
"assets/fonts/MaterialIcons-Regular.otf": "2b63e94070f1358c7879f22c45f80cd9",
"assets/NOTICES": "9dd09a24862e77aa4a3e44fcd3c2e827",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "3832d8f75ae3ed53174cb5aa7e8d68f1",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "d56ba98ca23492e072fbb35c3915f594",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "f89319d201d70361f7068e5794762888",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "a8eb30cbffa7cecbe869b43017dd8c77",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "b11ab4e15408aba3e6283c64062a6186",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "54a0d7ac1c09aa367c76a7053de9e8a3",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "84e41fc2e01716302b54aef997166d6f",
"assets/packages/shadcn_ui/fonts/Geist-Black.otf": "cf003c4f85b590cf60bec1e111ebaaf5",
"assets/packages/shadcn_ui/fonts/Geist-Bold.otf": "d3e1d3dc690224fd330969af598a9c31",
"assets/packages/shadcn_ui/fonts/Geist-Light.otf": "21f434e8c2b53240a0c459b9d119f22f",
"assets/packages/shadcn_ui/fonts/Geist-Medium.otf": "f7ceaf00b58d396cf93ff1ea43740027",
"assets/packages/shadcn_ui/fonts/Geist-Regular.otf": "4d02716b4f2f2e4d9c568c8d24e8e74d",
"assets/packages/shadcn_ui/fonts/Geist-SemiBold.otf": "2c0b1d3e7b1c71bedc2eecf78f7a1d1d",
"assets/packages/shadcn_ui/fonts/Geist-Thin.otf": "8603d0fe0def4273ebeee670eedcfb86",
"assets/packages/shadcn_ui/fonts/Geist-UltraBlack.otf": "f3591a030925294b2bb427e6a6c9b0d8",
"assets/packages/shadcn_ui/fonts/Geist-UltraLight.otf": "b64b37fbec0a925067cbf530e4962fec",
"assets/packages/shadcn_ui/fonts/GeistMono-Black.otf": "d72857791f93bbf88629ab9601ebfa14",
"assets/packages/shadcn_ui/fonts/GeistMono-Bold.otf": "fce632a1c87f36e92fb23ae5618176ce",
"assets/packages/shadcn_ui/fonts/GeistMono-Light.otf": "92c6dfb1c2854b6b0fd3f63ab5af9b7a",
"assets/packages/shadcn_ui/fonts/GeistMono-Medium.otf": "b1f17a06e50fba3f1e9695c2a8ae0783",
"assets/packages/shadcn_ui/fonts/GeistMono-Regular.otf": "42af0dfdb5e9e272e7ac28868b5b99fb",
"assets/packages/shadcn_ui/fonts/GeistMono-SemiBold.otf": "02036797116901c5db4a3a629561e588",
"assets/packages/shadcn_ui/fonts/GeistMono-Thin.otf": "cbf62a8e76578e03404b0314787d9477",
"assets/packages/shadcn_ui/fonts/GeistMono-UltraBlack.otf": "cfad4eb45ce5dff853a6c84c8a7d441b",
"assets/packages/shadcn_ui/fonts/GeistMono-UltraLight.otf": "45ea4a4ba1034f7fa081c8b7ee958734",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"CNAME": "5b7123d429cc85eb7874684cc6f5d914",
"favicon.png": "e231ac4a5e32297d70b7a9439ff193e2",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "46f1cebf634f54b9e7286b0114a789af",
"icons/Icon-192.png": "27f4bb74bb8bac013c96ad27b9ed9ea7",
"icons/Icon-512.png": "c528a4f56b6ef38b253e17226a7b65ab",
"icons/Icon-maskable-192.png": "27f4bb74bb8bac013c96ad27b9ed9ea7",
"icons/Icon-maskable-512.png": "c528a4f56b6ef38b253e17226a7b65ab",
"index.html": "0c2a126b151379ce6249f64e4ad61991",
"/": "0c2a126b151379ce6249f64e4ad61991",
"main.dart.js": "1df3d5292933ba82ac95ab08f500725f",
"manifest.json": "03f00c633543def41cf1db38c88f87f7",
"version.json": "dcc25f35dbee804994d001f896726abb"};
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
