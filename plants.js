const PLANTS = [
  {
    "id": 1,
    "name": "沿阶草",
    "nameRaw": "沿阶草",
    "family": "天门冬科",
    "genus": "沿阶草属",
    "latin": "Ophiopogon bodinieri",
    "lifeForm": "草本",
    "features": "多年生常绿草本；叶丛生，狭线形，基部常成鞘；花葶从叶丛中抽出，总状花序，花白色至淡紫色；果熟时蓝黑色，根常有纺锤形膨大。",
    "medicinal": "常见药材为同属麦冬；沿阶草本种未见《中国药典》作为常用药材收载，民间有以块根清热养阴等用法，教学中宜与麦冬区分。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "APG IV更新：旧分类系统（恩格勒/FRPS）归入百合科Liliaceae",
    "images": [
      "images/001_沿阶草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 2,
    "name": "栀子",
    "nameRaw": "栀子",
    "family": "茜草科",
    "genus": "栀子属",
    "latin": "Gardenia jasminoides",
    "lifeForm": "灌木",
    "features": "常绿灌木；叶对生或三叶轮生，革质，全缘，有托叶；花单生枝顶或叶腋，白色、浓香；果橙黄色，卵形至椭圆形，具5-9条纵棱，宿存萼冠明显。",
    "medicinal": "果实“栀子”为常用中药，清热泻火、除烦、利湿、凉血解毒；用于热病心烦、黄疸尿赤、血热出血等。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/002_栀子.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 3,
    "name": "秋枫",
    "nameRaw": "秋枫",
    "family": "叶下珠科",
    "genus": "秋枫属",
    "latin": "Bischofia javanica",
    "lifeForm": "乔木",
    "features": "常绿或半落叶乔木；三出复叶，小叶卵形至椭圆形，边缘有锯齿；雌雄异株，花小成圆锥花序；浆果状核果球形，熟时褐色至黑色。",
    "medicinal": "根、树皮、叶在民间药用，有祛风除湿、活血消肿等记载；未见《中国药典》作为常用药材收载。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "APG IV更新：旧分类系统归入大戟科Euphorbiaceae；APG IV将Bischofia移入叶下珠科Phyllanthaceae",
    "images": [
      "images/003_秋枫.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 4,
    "name": "晃伞枫",
    "nameRaw": "晃伞枫",
    "family": "五加科",
    "genus": "幌伞枫属",
    "latin": "Heteropanax fragrans",
    "lifeForm": "乔木",
    "features": "常绿乔木；掌状复叶或二回羽状复叶，小叶全缘，叶柄基部膨大；大型圆锥花序顶生，花小；核果近球形。校园中常见树冠开展、叶片集中枝端。",
    "medicinal": "根、树皮等有民间药用记载，多作祛风除湿、活血止痛；未见《中国药典》常用药材收载。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "属名原误为\"晃伞枫属\"（同时为大戟科，已更正）",
    "images": [
      "images/004_晃伞枫.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 5,
    "name": "小飞扬",
    "nameRaw": "小飞扬（地锦）",
    "family": "大戟科",
    "genus": "大戟属",
    "latin": "Euphorbia thymifolia",
    "lifeForm": "草本",
    "features": "一年生匍匐小草本；茎细，常带红色，折断有白色乳汁；叶对生，小而近椭圆形，常不对称；杯状聚伞花序腋生；蒴果三棱状。",
    "medicinal": "全草民间称地锦草类，常用于清热解毒、利湿止痢、止血；使用时需区别同属相近种。",
    "medCategory": "清热解毒",
    "toxic": true,
    "note": "",
    "images": [
      "images/005_小飞扬.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 6,
    "name": "大飞扬",
    "nameRaw": "大飞扬（飞扬草）",
    "family": "大戟科",
    "genus": "大戟属",
    "latin": "Euphorbia hirta",
    "lifeForm": "草本",
    "features": "一年生草本；全株有白色乳汁和粗毛，茎常斜升或铺散；叶对生，椭圆形至长圆形，边缘细锯齿；腋生密集头状杯状花序，蒴果三棱。",
    "medicinal": "全草“飞扬草”在民间和地方标准中药用，清热解毒、利湿止痒、通乳；非药典常用大宗品种。",
    "medCategory": "清热解毒",
    "toxic": true,
    "note": "",
    "images": [
      "images/006_大飞扬.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 7,
    "name": "红背桂",
    "nameRaw": "红背桂",
    "family": "大戟科",
    "genus": "海漆属",
    "latin": "Excoecaria cochinchinensis",
    "lifeForm": "灌木",
    "features": "常绿灌木；叶对生或近对生，叶面绿色，叶背紫红色，是最醒目的识别点；枝叶折断有乳汁；花小，穗状花序腋生。",
    "medicinal": "有毒植物，乳汁刺激性强；民间有外用消肿止痛等记载，未见《中国药典》常用药材收载，实习中应强调不可随意内服。",
    "medCategory": "观赏/其他",
    "toxic": true,
    "note": "",
    "images": [
      "images/007_红背桂.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 8,
    "name": "白背叶",
    "nameRaw": "白背叶",
    "family": "大戟科",
    "genus": "野桐属",
    "latin": "Mallotus apelta",
    "lifeForm": "灌木",
    "features": "灌木或小乔木；叶互生，宽卵形，常3浅裂，叶背密被灰白色星状毛而显白；花单性，圆锥花序；蒴果具软刺或毛。",
    "medicinal": "根、叶“白背叶”民间药用，常作清热利湿、祛风止痛、止血；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/008_白背叶.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 9,
    "name": "血桐",
    "nameRaw": "血桐",
    "family": "大戟科",
    "genus": "血桐属",
    "latin": "Macaranga tanarius",
    "lifeForm": "乔木",
    "features": "小乔木；叶大，近圆形或卵圆形，盾状着生，叶背粉白色；叶柄长，托叶早落；花序圆锥状；蒴果小，常具腺点。",
    "medicinal": "叶、根有民间药用记载，多作清热解毒、收敛止血；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/009_血桐.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 10,
    "name": "海南红豆",
    "nameRaw": "海南红豆",
    "family": "豆科",
    "genus": "红豆属",
    "latin": "Ormosia pinnata",
    "lifeForm": "乔木",
    "features": "常绿乔木；奇数羽状复叶，小叶多枚，革质；圆锥花序，蝶形花白色至淡紫色；荚果木质，种子红色有光泽。",
    "medicinal": "种子有毒性风险，主要作观赏和工艺用；未见《中国药典》常用药材收载，不宜按“红豆”类食药混用。",
    "medCategory": "观赏/其他",
    "toxic": true,
    "note": "",
    "images": [
      "images/010_海南红豆.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 11,
    "name": "朱缨花",
    "nameRaw": "朱缨花",
    "family": "豆科",
    "genus": "红缨花属",
    "latin": "Calliandra haematocephala",
    "lifeForm": "灌木",
    "features": "常绿灌木；二回羽状复叶，小叶细小；花序头状，红色雄蕊极长，形成绒球状花；荚果条形，成熟后弹裂。",
    "medicinal": "主要为观赏植物；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/011_朱缨花.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 12,
    "name": "鸡冠刺桐",
    "nameRaw": "鸡冠刺桐",
    "family": "豆科",
    "genus": "鸡冠刺桐属",
    "latin": "Erythrina crista-galli",
    "lifeForm": "灌木",
    "features": "落叶灌木或小乔木；枝有刺，三出复叶；总状花序，花深红色，旗瓣宽大似鸡冠；荚果念珠状。",
    "medicinal": "主要为观赏树；同属刺桐类有民间药用，但本种未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/012_鸡冠刺桐.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 13,
    "name": "三点金",
    "nameRaw": "三点金",
    "family": "豆科",
    "genus": "假地豆属",
    "latin": "Desmodium triflorum",
    "lifeForm": "草本",
    "features": "多年生匍匐草本；三出复叶，小叶倒卵形，顶端常微凹；花小，紫红色，1-3朵腋生；荚果短，常2-5节，节荚有钩毛。",
    "medicinal": "全草民间药用，常作清热利湿、消肿解毒、止痛；未见《中国药典》常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/013_三点金.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 14,
    "name": "野花生",
    "nameRaw": "野花生",
    "family": "豆科",
    "genus": "落花生属",
    "latin": "Arachis duranensis",
    "lifeForm": "草本",
    "features": "匍匐或斜升草本；偶数羽状复叶，通常4小叶；蝶形花黄色，花后子房柄向下入土；荚果在地下发育。校园地被常见者多为蔓花生类。",
    "medicinal": "主要作观赏地被或牧草；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/014_野花生.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 15,
    "name": "羊蹄甲",
    "nameRaw": "羊蹄甲",
    "family": "豆科",
    "genus": "羊蹄甲属",
    "latin": "Bauhinia variegata",
    "lifeForm": "乔木",
    "features": "落叶乔木；叶近圆形，顶端深裂成羊蹄状，基部心形；花大，粉红、紫红或白色，花瓣5；荚果扁平。",
    "medicinal": "树皮、花等有民间药用记载，常作清热解毒、止痛；未见《中国药典》常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/015_羊蹄甲.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 16,
    "name": "黄槐",
    "nameRaw": "黄槐",
    "family": "豆科",
    "genus": "决明属",
    "latin": "Senna surattensis",
    "lifeForm": "灌木",
    "features": "常绿灌木或小乔木；偶数羽状复叶，小叶多对；花鲜黄色，腋生或顶生总状花序；荚果扁平，成熟褐色。",
    "medicinal": "主要为观赏植物；同属番泻叶等为药材，但黄槐本种未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "属名原误为\"槐属\"；槐属对应Sophora，黄槐属Senna即决明属",
    "images": [
      "images/016_黄槐.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 17,
    "name": "猪屎豆",
    "nameRaw": "猪屎豆",
    "family": "豆科",
    "genus": "猪屎豆属",
    "latin": "Crotalaria pallida",
    "lifeForm": "亚灌木",
    "features": "草本或亚灌木；三出复叶，小叶倒卵形至椭圆形；总状花序顶生，花黄色常具褐色纹；荚果膨胀，成熟后内含种子摇动有声。",
    "medicinal": "全草民间药用，常作清热利湿、解毒消肿；本属多种含吡咯里西啶生物碱，应用需谨慎。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/017_猪屎豆.jpg"
    ],
    "lifeForms": [
      "亚灌木",
      "草本"
    ]
  },
  {
    "id": 18,
    "name": "杜鹃花",
    "nameRaw": "杜鹃花",
    "family": "杜鹃花科",
    "genus": "杜鹃花属",
    "latin": "Rhododendron simsii",
    "lifeForm": "灌木",
    "features": "常绿或半常绿灌木；叶互生，多集生枝端，叶背有毛；花2-6朵簇生枝顶，漏斗状，红、粉或白色；蒴果长卵形。",
    "medicinal": "花、根等有民间药用记载，多作活血止痛、祛风湿；部分杜鹃含毒性成分，未见药典常用收载。",
    "medCategory": "活血化瘀",
    "toxic": true,
    "note": "",
    "images": [
      "images/018_杜鹃花.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 19,
    "name": "杜英",
    "nameRaw": "杜英",
    "family": "杜英科",
    "genus": "杜英属",
    "latin": "Elaeocarpus decipiens",
    "lifeForm": "乔木",
    "features": "常绿乔木；叶互生，革质，边缘有细锯齿，老叶常转红；总状花序腋生，花白色，花瓣流苏状裂；核果椭圆形。",
    "medicinal": "主要作行道树和观赏树；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/019_杜英.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 20,
    "name": "凤仙花",
    "nameRaw": "凤仙花",
    "family": "凤仙花科",
    "genus": "凤仙花属",
    "latin": "Impatiens balsamina",
    "lifeForm": "草本",
    "features": "一年生肉质草本；茎粗壮多汁；叶互生，披针形，边缘锯齿；花单生或簇生叶腋，有距，颜色多样；蒴果成熟触碰即弹裂。",
    "medicinal": "种子“急性子”、全草“透骨草”、花“凤仙花”均有药用记载，活血通经、祛风止痛；孕妇慎用。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "",
    "images": [
      "images/020_凤仙花.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 21,
    "name": "小叶榄仁",
    "nameRaw": "小叶榄仁",
    "family": "使君子科",
    "genus": "榄仁树属",
    "latin": "Terminalia neotaliala",
    "lifeForm": "乔木",
    "features": "落叶乔木；枝条明显轮生、层状开展；叶小，倒卵形，常簇生枝端，旱季落叶；花小；核果椭圆形。",
    "medicinal": "主要为园林观赏和行道树；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/021_小叶榄仁.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 22,
    "name": "使君子",
    "nameRaw": "使君子",
    "family": "使君子科",
    "genus": "风车子属",
    "latin": "Combretum indicum (L.) DeFilipps",
    "lifeForm": "藤本",
    "features": "攀援灌木；叶对生，椭圆形；穗状花序下垂，花初白后转红，有香气，花萼管细长；果有5棱。",
    "medicinal": "果实“使君子”为常用驱虫药，杀虫消积，主要用于蛔虫、蛲虫及小儿疳积。",
    "medCategory": "杀虫消积",
    "toxic": false,
    "note": "拉丁名更新：旧名Quisqualis indica；APG IV将使君子属Quisqualis并入风车子属Combretum",
    "images": [
      "images/022_使君子.jpg"
    ],
    "lifeForms": [
      "藤本",
      "灌木"
    ]
  },
  {
    "id": 23,
    "name": "海桐",
    "nameRaw": "海桐",
    "family": "海桐科",
    "genus": "海桐属",
    "latin": "Pittosporum tobira",
    "lifeForm": "灌木",
    "features": "常绿灌木；叶革质，倒卵形，多聚生枝顶，边缘反卷；伞形花序顶生，花白后变黄且芳香；蒴果球形，熟裂露红色黏质种子。",
    "medicinal": "根、叶有民间药用记载，常作祛风活络、消肿止痛；未见药典常用收载。",
    "medCategory": "祛风除湿",
    "toxic": false,
    "note": "",
    "images": [
      "images/023_海桐.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 24,
    "name": "竹",
    "nameRaw": "竹",
    "family": "禾本科",
    "genus": "竹亚科",
    "latin": "Bambusoideae",
    "lifeForm": "竹类",
    "features": "多年生木质化禾草；秆有明显节和节间，多中空；叶片披针形，叶鞘包秆；新笋从地下茎萌出。识别到种需看秆箨、分枝和叶耳等细节。",
    "medicinal": "竹叶、竹茹、竹沥等为常用药材来源，清热除烦、化痰止呕；不同药材来源部位不同。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/024_竹.jpg"
    ],
    "lifeForms": [
      "竹类"
    ]
  },
  {
    "id": 25,
    "name": "老鼠拉冬瓜",
    "nameRaw": "老鼠拉冬瓜",
    "family": "葫芦科",
    "genus": "马瓟儿属",
    "latin": "Melothria heterophylla",
    "lifeForm": "藤本",
    "features": "攀援草质藤本；茎细有卷须；叶卵形至心形，常浅裂；花小，黄色，雌雄同株；果小，卵形至椭圆形，熟时红色。",
    "medicinal": "全草民间药用，常作清热解毒、利湿消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/025_老鼠拉冬瓜.jpg"
    ],
    "lifeForms": [
      "藤本"
    ]
  },
  {
    "id": 26,
    "name": "狗牙花",
    "nameRaw": "狗牙花",
    "family": "夹竹桃科",
    "genus": "狗牙花属",
    "latin": "Tabernaemontana divaricata",
    "lifeForm": "灌木",
    "features": "常绿灌木；枝叶折断有白色乳汁；叶对生，长椭圆形，侧脉多而平行；花白色，高脚碟状，重瓣品种似旋瓣；果成对。",
    "medicinal": "根、叶、花有民间药用记载；夹竹桃科植物多含生物碱，未见药典常用收载，勿随意内服。",
    "medCategory": "观赏/其他",
    "toxic": true,
    "note": "",
    "images": [
      "images/026_狗牙花.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 27,
    "name": "鸡蛋花",
    "nameRaw": "鸡蛋花",
    "family": "夹竹桃科",
    "genus": "鸡蛋花属",
    "latin": "Plumeria rubra",
    "lifeForm": "乔木",
    "features": "落叶小乔木；枝粗厚，折断有乳汁；叶大，聚生枝端；聚伞花序顶生，花冠筒状，裂片5，白黄或红色，芳香；蓇葖果成对。",
    "medicinal": "花“鸡蛋花”在岭南常用，清热利湿、解暑、润肺止咳；常用于湿热泄泻、痢疾等。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/027_鸡蛋花.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 28,
    "name": "夹竹桃",
    "nameRaw": "夹竹桃",
    "family": "夹竹桃科",
    "genus": "夹竹桃属",
    "latin": "Nerium oleander",
    "lifeForm": "灌木",
    "features": "常绿灌木；叶常3枚轮生，狭披针形，革质；聚伞花序顶生，花粉红、红或白色；蓇葖果长条形；全株有乳汁。",
    "medicinal": "全株有强心苷，毒性强；民间外用或制剂研究有强心等作用，但不宜自行药用，教学中应标注有毒。",
    "medCategory": "观赏/其他",
    "toxic": true,
    "note": "",
    "images": [
      "images/028_夹竹桃.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 29,
    "name": "盆架子",
    "nameRaw": "盆架子（糖胶树）",
    "family": "夹竹桃科",
    "genus": "鸡骨常山属",
    "latin": "Alstonia scholaris",
    "lifeForm": "乔木",
    "features": "常绿乔木；枝叶折断有白色乳汁；叶4-8枚轮生，革质，侧脉密而平行；花白绿至黄白色，有香气；蓇葖果细长成对。",
    "medicinal": "树皮、叶在民间药用，清热止咳、截疟、消肿；夹竹桃科植物需注意毒性和剂量。",
    "medCategory": "清热解毒",
    "toxic": true,
    "note": "",
    "images": [
      "images/029_盆架子.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 30,
    "name": "红花檵木",
    "nameRaw": "红花檵木",
    "family": "金缕梅科",
    "genus": "檵木属",
    "latin": "Loropetalum chinense var. rubrum",
    "lifeForm": "灌木",
    "features": "常绿灌木；嫩枝和叶常紫红色；叶互生，卵形或椭圆形，稍革质；花4瓣，瓣条带状、紫红色，簇生短枝端；蒴果木质。",
    "medicinal": "原种檵木的根、叶、花民间药用，收敛止血、清热解毒；红花栽培变型多作观赏。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/030_红花檵木.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 31,
    "name": "枫香",
    "nameRaw": "枫香",
    "family": "蕈树科",
    "genus": "枫香树属",
    "latin": "Liquidambar formosana",
    "lifeForm": "乔木",
    "features": "落叶乔木；叶互生，掌状3裂，边缘锯齿，揉碎有香气；果序球形，成熟木质有刺；树皮灰褐色。秋季叶色转红黄。",
    "medicinal": "树脂“枫香脂”药用，活血止痛、解毒生肌、凉血止血；根、叶亦有民间应用。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "",
    "images": [
      "images/031_枫香.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 32,
    "name": "美丽异木棉",
    "nameRaw": "美丽异木棉",
    "family": "锦葵科",
    "genus": "吉贝属",
    "latin": "Ceiba speciosa",
    "lifeForm": "乔木",
    "features": "落叶乔木；树干绿色至灰绿色，常密生粗大圆锥刺；掌状复叶，小叶5-7；秋冬开大型粉红花，花瓣反卷；蒴果内有棉絮状纤维。",
    "medicinal": "主要为观赏树；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/032_美丽异木棉.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 33,
    "name": "朱槿",
    "nameRaw": "朱槿",
    "family": "锦葵科",
    "genus": "槿属",
    "latin": "Hibiscus rosa-sinensis",
    "lifeForm": "灌木",
    "features": "常绿灌木；叶互生，卵形，边缘粗齿；花大，单生叶腋，花柱长伸出，柱头5裂；蒴果少见。",
    "medicinal": "花、叶、根民间药用，清热解毒、凉血、利尿；未见《中国药典》常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/033_朱槿.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 34,
    "name": "木棉",
    "nameRaw": "木棉",
    "family": "锦葵科",
    "genus": "木棉属",
    "latin": "Bombax ceiba",
    "lifeForm": "乔木",
    "features": "落叶大乔木；树干常有圆锥刺；掌状复叶，小叶5-7；先花后叶，花大红色或橙红色；蒴果成熟裂开，内有棉絮。",
    "medicinal": "花“木棉花”常用，清热利湿、解暑；树皮、根亦有民间祛风除湿等应用。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/034_木棉.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 35,
    "name": "一点红",
    "nameRaw": "一点红",
    "family": "菊科",
    "genus": "一点红属",
    "latin": "Emilia sonchifolia",
    "lifeForm": "草本",
    "features": "一年生草本；茎直立，叶形变化大，下部叶常琴状羽裂，上部叶抱茎；头状花序小，筒状花紫红色或粉红色；瘦果有冠毛。",
    "medicinal": "全草民间药用，清热解毒、凉血消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/035_一点红.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 36,
    "name": "黄鹌菜",
    "nameRaw": "黄鹌菜",
    "family": "菊科",
    "genus": "黄鹌菜属",
    "latin": "Youngia japonica",
    "lifeForm": "草本",
    "features": "一年生或二年生草本；基生叶莲座状，倒披针形至羽裂；花茎细长分枝；头状花序小，全部舌状花黄色；瘦果有白色冠毛。",
    "medicinal": "全草民间药用，清热解毒、利尿消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/036_黄鹌菜.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 37,
    "name": "黄花蟛蜞菊",
    "nameRaw": "黄花蟛蜞菊",
    "family": "菊科",
    "genus": "蟛蜞菊属",
    "latin": "Sphagneticola trilobata",
    "lifeForm": "草本",
    "features": "多年生匍匐草本；茎节易生根；叶对生，三裂或浅三裂，厚纸质；头状花序单生枝端，舌状花鲜黄色。常成片覆盖。",
    "medicinal": "全草民间药用，清热解毒、凉血散瘀；同时为常见入侵性地被植物，应注意生态风险。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/037_黄花蟛蜞菊.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 38,
    "name": "鬼针草",
    "nameRaw": "鬼针草",
    "family": "菊科",
    "genus": "鬼针草属",
    "latin": "Bidens pilosa",
    "lifeForm": "草本",
    "features": "一年生草本；叶对生，常三出或羽状分裂；头状花序顶生，舌状花白色或缺如，管状花黄色；瘦果黑色，顶端2-4芒刺，易粘衣物。",
    "medicinal": "全草民间药用，清热解毒、散瘀消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/038_鬼针草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 39,
    "name": "醴肠",
    "nameRaw": "醴肠",
    "family": "菊科",
    "genus": "醴肠属",
    "latin": "Eclipta prostrata",
    "lifeForm": "草本",
    "features": "一年生草本；茎匍匐或斜升，叶对生，披针形，边缘细齿；头状花序腋生或顶生，白色小花；揉搓常有深色汁液。",
    "medicinal": "全草“墨旱莲”为常用中药，滋补肝肾、凉血止血，用于须发早白、眩晕耳鸣、阴虚血热出血等。",
    "medCategory": "止血收敛",
    "toxic": false,
    "note": "",
    "images": [
      "images/039_醴肠.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 40,
    "name": "鼠曲草",
    "nameRaw": "鼠曲草",
    "family": "菊科",
    "genus": "鼠曲草属",
    "latin": "Gnaphalium affine",
    "lifeForm": "草本",
    "features": "一年生或二年生草本；全株密被白色绵毛；叶互生，匙形至倒披针形；头状花序黄色，多数簇生枝端。",
    "medicinal": "全草“鼠曲草”民间药食两用，止咳祛痰、祛风除湿；未见药典常用收载。",
    "medCategory": "祛风除湿",
    "toxic": false,
    "note": "",
    "images": [
      "images/040_鼠曲草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 41,
    "name": "夜香牛",
    "nameRaw": "夜香牛",
    "family": "菊科",
    "genus": "夜香牛属",
    "latin": "Vernonia cinerea",
    "lifeForm": "草本",
    "features": "一年生草本；茎直立细瘦；叶互生，卵形至披针形；头状花序小，多数排成疏圆锥状，花淡紫色；瘦果具冠毛。",
    "medicinal": "全草民间药用，清热解毒、消肿止痛；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/041_夜香牛.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 42,
    "name": "桂叶山牵牛",
    "nameRaw": "桂叶山牵牛",
    "family": "爵床科",
    "genus": "山牵牛属",
    "latin": "Thunbergia laurifolia",
    "lifeForm": "藤本",
    "features": "常绿攀援藤本；叶对生，椭圆形至卵状披针形，近革质；花大，蓝紫色漏斗状，喉部淡黄；蒴果具喙。",
    "medicinal": "主要为观赏藤本；东南亚民间有解毒等用法，未见《中国药典》常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/042_桂叶山牵牛.jpg"
    ],
    "lifeForms": [
      "藤本"
    ]
  },
  {
    "id": 43,
    "name": "蓝花草",
    "nameRaw": "蓝花草",
    "family": "爵床科",
    "genus": "蓝花草属",
    "latin": "Ruellia simplex",
    "lifeForm": "草本",
    "features": "多年生草本；茎直立，节明显；叶对生，狭披针形；花单生或少数腋生，蓝紫色漏斗状，花冠5裂；蒴果长条形。",
    "medicinal": "主要为观赏植物；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/043_蓝花草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 44,
    "name": "非洲楝",
    "nameRaw": "非洲楝（桃花心木）",
    "family": "楝科",
    "genus": "非洲楝属",
    "latin": "Khaya senegalensis",
    "lifeForm": "乔木",
    "features": "常绿乔木；偶数羽状复叶，小叶对生或近对生，全缘；圆锥花序腋生，花小白色；蒴果木质近球形，成熟开裂，种子有翅。",
    "medicinal": "树皮在原产地传统药用；中国常作行道树，未见《中国药典》常用药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "属名原误为\"桃花心木属\"；桃花心木属为Swietenia，非洲楝属为Khaya",
    "images": [
      "images/044_非洲楝.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 45,
    "name": "米仔兰",
    "nameRaw": "米仔兰",
    "family": "楝科",
    "genus": "米仔兰属",
    "latin": "Aglaia odorata",
    "lifeForm": "灌木",
    "features": "常绿灌木或小乔木；奇数羽状复叶，小叶小而有光泽；圆锥花序腋生，花小如米粒、黄色、浓香；浆果卵形。",
    "medicinal": "花、枝叶民间药用，行气解郁、化痰止咳；未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/045_米仔兰.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 46,
    "name": "火炭母",
    "nameRaw": "火炭母",
    "family": "蓼科",
    "genus": "蓼属",
    "latin": "Persicaria chinensis (L.) H. Gross",
    "lifeForm": "草本",
    "features": "多年生草本或半灌木；茎常红色，有膨大的节；叶互生，卵形至披针形，托叶鞘膜质；花小，白色或淡红色，头状或圆锥状花序；瘦果三棱。",
    "medicinal": "全草“火炭母”常用草药，清热利湿、凉血解毒，常用于痢疾、湿热黄疸、皮肤湿疹等。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "拉丁名更新：旧名Polygonum chinense；APG IV接受名移入蓼属Persicaria；\"火炭母属\"为非标准中文属名",
    "images": [
      "images/046_火炭母.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 47,
    "name": "金边龙舌兰",
    "nameRaw": "金边龙舌兰",
    "family": "天门冬科",
    "genus": "龙舌兰属",
    "latin": "Agave americana var. marginata",
    "lifeForm": "草本",
    "features": "多年生大型肉质草本；叶基生莲座状，剑形，边缘有刺齿，叶缘黄色或乳黄色；花葶高大，圆锥花序，开花后母株常枯死。",
    "medicinal": "主要为观赏植物；民间有叶汁外用等记载，但汁液刺激性强，未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": true,
    "note": "APG IV更新：旧分类系统归入龙舌兰科Agavaceae；APG IV将龙舌兰科并入天门冬科Asparagaceae",
    "images": [
      "images/047_金边龙舌兰.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 48,
    "name": "露兜树",
    "nameRaw": "露兜树",
    "family": "露兜树科",
    "genus": "露兜树属",
    "latin": "Pandanus tectorius",
    "lifeForm": "乔木",
    "features": "常绿小乔木；具明显支柱根；叶长剑形，螺旋状排列，边缘和中脉常有刺；雌雄异株，聚合果大，成熟橙黄，似菠萝。",
    "medicinal": "根、果、叶有民间药用记载，常作清热利湿、解毒；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/048_露兜树.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 49,
    "name": "罗汉松",
    "nameRaw": "罗汉松",
    "family": "罗汉松科",
    "genus": "罗汉松属",
    "latin": "Podocarpus macrophyllus",
    "lifeForm": "裸子植物",
    "features": "常绿乔木；叶条状披针形，革质，螺旋状排列，主脉明显；雌雄异株，种子裸露，着生于肉质膨大的红紫色种托上。",
    "medicinal": "种托可观赏但种子有毒性风险；根、叶民间有药用记载，未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": true,
    "note": "",
    "images": [
      "images/049_罗汉松.jpg"
    ],
    "lifeForms": [
      "裸子植物"
    ]
  },
  {
    "id": 50,
    "name": "旅人蕉",
    "nameRaw": "旅人蕉",
    "family": "鹤望兰科",
    "genus": "旅人蕉属",
    "latin": "Ravenala madagascariensis",
    "lifeForm": "草本",
    "features": "大型多年生草本状植物；叶柄长，叶片似芭蕉，排列成整齐扇面；花序腋生，舟形苞片；蒴果木质，种子具蓝色假种皮。",
    "medicinal": "主要为观赏植物；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/050_旅人蕉.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 51,
    "name": "假连翘",
    "nameRaw": "假连翘",
    "family": "马鞭草科",
    "genus": "假连翘属",
    "latin": "Duranta erecta",
    "lifeForm": "灌木",
    "features": "常绿灌木；枝常有刺；叶对生或轮生，卵形至椭圆形；总状花序下垂，花蓝紫色或白色；核果串珠状，成熟金黄色。",
    "medicinal": "主要为观赏绿篱；果实有毒性风险，未见《中国药典》常用药材收载。",
    "medCategory": "观赏/其他",
    "toxic": true,
    "note": "",
    "images": [
      "images/051_假连翘.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 52,
    "name": "灰莉",
    "nameRaw": "灰莉",
    "family": "龙胆科",
    "genus": "灰莉属",
    "latin": "Fagraea ceilanica",
    "lifeForm": "灌木",
    "features": "常绿灌木或小乔木；叶对生，厚革质，有光泽；花单生或数朵簇生枝端，白色至淡黄、芳香，花冠漏斗状；浆果球形。",
    "medicinal": "主要为观赏植物；根、叶有民间药用记载，未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "APG IV更新：旧分类系统归入马钱科Loganiaceae；APG IV将Fagraea属移入龙胆科Gentianaceae",
    "images": [
      "images/052_灰莉.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 53,
    "name": "白兰",
    "nameRaw": "白兰",
    "family": "木兰科",
    "genus": "木兰属",
    "latin": "Magnolia × alba (DC.) Figlar",
    "lifeForm": "乔木",
    "features": "常绿乔木；叶互生，椭圆形至长椭圆形，托叶痕环绕枝条；花单生叶腋，白色或淡黄白色，极香，花被片多枚；聚合果少见。",
    "medicinal": "花“白兰花”民间药用，行气化湿、止咳；未见药典常用收载，常作芳香植物。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "拉丁名更新：旧名Michelia alba；APG IV将含笑属Michelia并入木兰属Magnolia",
    "images": [
      "images/053_白兰.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 54,
    "name": "桂花",
    "nameRaw": "桂花",
    "family": "木犀科",
    "genus": "木犀属",
    "latin": "Osmanthus fragrans",
    "lifeForm": "灌木",
    "features": "常绿灌木或小乔木；叶对生，革质，椭圆形，边缘全缘或具细齿；花小，簇生叶腋，黄白至橙黄，浓香；核果椭圆形。",
    "medicinal": "花民间药用和食用，温肺化饮、散寒止痛、化痰止咳；未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/054_桂花.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 55,
    "name": "瓶尔小草",
    "nameRaw": "瓶尔小草",
    "family": "瓶尔小草科",
    "genus": "瓶尔小草属",
    "latin": "Ophioglossum vulgatum",
    "lifeForm": "蕨类",
    "features": "小型蕨类；通常一片营养叶和一枚孢子叶同出，营养叶卵形或椭圆形，全缘；孢子叶直立成细穗状，孢子囊两列排列。",
    "medicinal": "全草民间药用，清热解毒、消肿止痛；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/055_瓶尔小草.jpg"
    ],
    "lifeForms": [
      "蕨类"
    ]
  },
  {
    "id": 56,
    "name": "人面子",
    "nameRaw": "人面子",
    "family": "漆树科",
    "genus": "人面子属",
    "latin": "Dracontomelon duperreanum",
    "lifeForm": "乔木",
    "features": "常绿乔木；奇数羽状复叶，小叶对生或近对生；圆锥花序，花小白色；核果近球形，果核有类似人面纹样的孔纹。",
    "medicinal": "果、根、叶有民间药食用记载，常作健胃、解毒；未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/056_人面子.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 57,
    "name": "芒果树",
    "nameRaw": "芒果树",
    "family": "漆树科",
    "genus": "芒果属",
    "latin": "Mangifera indica",
    "lifeForm": "乔木",
    "features": "常绿大乔木；叶互生，革质，幼叶常紫红色；圆锥花序顶生，花小黄绿；核果大，肾形或椭圆形，成熟黄色或红黄色。",
    "medicinal": "果核、叶、树皮等民间药用，理气健胃、止咳、止泻；未见《中国药典》常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/057_芒果树.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 58,
    "name": "大叶紫薇",
    "nameRaw": "大叶紫薇",
    "family": "千屈菜科",
    "genus": "紫薇属",
    "latin": "Lagerstroemia speciosa",
    "lifeForm": "乔木",
    "features": "落叶乔木；叶对生或近对生，大而厚，长椭圆形；圆锥花序顶生，花紫红色，花瓣皱褶，有长爪；蒴果近球形。",
    "medicinal": "叶在东南亚传统药用；中国主要作观赏树，未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/058_大叶紫薇.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 59,
    "name": "鸡屎藤",
    "nameRaw": "鸡屎藤",
    "family": "茜草科",
    "genus": "鸡屎藤属",
    "latin": "Paederia foetida",
    "lifeForm": "藤本",
    "features": "攀援藤本；叶对生，卵形至披针形，揉碎有明显臭味；托叶在叶柄间；聚伞花序腋生或顶生，花冠淡紫白色；果小球形。",
    "medicinal": "全草“鸡屎藤”民间常用，祛风利湿、消食化积、止痛解毒；常用于风湿痹痛、食积腹痛等。",
    "medCategory": "祛风除湿",
    "toxic": false,
    "note": "",
    "images": [
      "images/059_鸡屎藤.jpg"
    ],
    "lifeForms": [
      "藤本"
    ]
  },
  {
    "id": 60,
    "name": "耳草",
    "nameRaw": "耳草",
    "family": "茜草科",
    "genus": "耳草属",
    "latin": "Hedyotis corymbosa",
    "lifeForm": "草本",
    "features": "一年生细弱草本；茎四棱，叶对生，线形至狭披针形，托叶膜质；花小白色，常成腋生伞房状聚伞花序；蒴果近球形。",
    "medicinal": "全草民间药用，清热解毒、利湿通淋；与白花蛇舌草等近缘种需区分。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/060_耳草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 61,
    "name": "金纽扣",
    "nameRaw": "金纽扣",
    "family": "菊科",
    "genus": "金纽扣属",
    "latin": "Acmella paniculata",
    "lifeForm": "草本",
    "features": "一年生草本；叶对生，卵形，边缘锯齿；头状花序黄色，圆锥形或卵球形，似小纽扣；咀嚼花序有麻辣感。",
    "medicinal": "全草或花序民间药用，散风止痛、解毒消肿；常用于牙痛等，未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/061_金纽扣.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 62,
    "name": "白花蛇舌草",
    "nameRaw": "白花蛇舌草",
    "family": "茜草科",
    "genus": "蛇舌草属",
    "latin": "Scleromitrion diffusum",
    "lifeForm": "草本",
    "features": "一年生细弱草本；茎近四棱，叶对生，线形，托叶有刺毛状裂片；花单生或成对腋生，白色，花冠4裂；蒴果球形。",
    "medicinal": "全草“白花蛇舌草”为常用草药，清热解毒、利湿通淋；常用于咽喉肿痛、痈肿、湿热淋证等。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/062_白花蛇舌草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 63,
    "name": "蛇莓",
    "nameRaw": "蛇莓",
    "family": "蔷薇科",
    "genus": "委陵菜属",
    "latin": "Potentilla indica (Andrews) Th.Wolf",
    "lifeForm": "草本",
    "features": "多年生匍匐草本；三出复叶，小叶菱状卵形，边缘粗齿；花黄色，单生叶腋；聚合果红色，海绵质，表面小瘦果明显。",
    "medicinal": "全草“蛇莓”民间药用，清热解毒、凉血消肿；外用治疮毒、蛇虫咬伤等。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "拉丁名更新：旧名Duchesnea indica；APG IV将蛇莓属Duchesnea并入委陵菜属Potentilla",
    "images": [
      "images/063_蛇莓.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 64,
    "name": "龙葵",
    "nameRaw": "龙葵",
    "family": "茄科",
    "genus": "龙葵属",
    "latin": "Solanum nigrum",
    "lifeForm": "草本",
    "features": "一年生草本；叶互生，卵形，边缘波状或粗齿；伞形状聚伞花序，花白色，花药黄色；浆果球形，熟黑色。未成熟果有毒性风险。",
    "medicinal": "全草“龙葵”民间药用，清热解毒、活血消肿；需注意生品毒性和用量。",
    "medCategory": "清热解毒",
    "toxic": true,
    "note": "",
    "images": [
      "images/064_龙葵.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 65,
    "name": "积雪草",
    "nameRaw": "积雪草",
    "family": "伞形科",
    "genus": "积雪草属",
    "latin": "Centella asiatica",
    "lifeForm": "草本",
    "features": "别名崩大碗。多年生匍匐草本；茎节生根；叶圆肾形或近圆形，边缘钝齿，叶柄盾状或基生；小伞形花序腋生；双悬果扁圆。",
    "medicinal": "全草“积雪草”为常用药材，清热利湿、解毒消肿；外用和提取物常用于创伤修复相关制剂。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/065_积雪草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 66,
    "name": "垂叶榕",
    "nameRaw": "垂叶榕 / 尾叶榕",
    "family": "桑科",
    "genus": "榕属",
    "latin": "Ficus benjamina",
    "lifeForm": "乔木",
    "features": "常绿乔木；枝条下垂，小枝柔软；叶互生，卵状椭圆形，顶端长渐尖成尾状，革质有光泽；隐头果小，成对腋生。",
    "medicinal": "主要为观赏树；同属榕树类有气根、叶民间药用，本种未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/066_垂叶榕.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 67,
    "name": "黄金榕",
    "nameRaw": "黄金榕",
    "family": "桑科",
    "genus": "榕属",
    "latin": "Ficus microcarpa",
    "lifeForm": "乔木",
    "features": "常绿乔木或灌木状栽培；叶互生，椭圆形，革质，全缘，黄金榕栽培品新叶金黄；隐头果小，成对腋生。",
    "medicinal": "为榕树栽培品种，主要观赏；榕树根、叶民间药用，但黄金榕未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/067_黄金榕.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 68,
    "name": "大叶榕",
    "nameRaw": "大叶榕",
    "family": "桑科",
    "genus": "榕属",
    "latin": "Ficus virens",
    "lifeForm": "乔木",
    "features": "落叶或半落叶乔木；叶大，互生，椭圆形至卵形，侧脉明显；隐头果成对腋生，熟时黄红至紫黑；春季新叶常淡红。",
    "medicinal": "根、叶、气根民间药用，祛风除湿、活血消肿；未见药典常用收载。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "",
    "images": [
      "images/068_大叶榕.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 69,
    "name": "印度榕",
    "nameRaw": "印度榕",
    "family": "桑科",
    "genus": "榕属",
    "latin": "Ficus elastica",
    "lifeForm": "乔木",
    "features": "常绿乔木；叶大而厚革质，椭圆形，有光泽；顶芽被红色托叶包裹，脱落留环痕；折断有白色乳汁；隐头果少见。",
    "medicinal": "主要为观赏植物；乳汁有刺激性，未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/069_印度榕.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 70,
    "name": "水蜈蚣",
    "nameRaw": "水蜈蚣",
    "family": "莎草科",
    "genus": "水蜈蚣属",
    "latin": "Kyllinga brevifolia",
    "lifeForm": "草本",
    "features": "多年生草本；根状茎匍匐；秆细而三棱；叶线形多基生；头状花序单个顶生，近球形，白绿至淡绿色，下有3枚叶状苞片。",
    "medicinal": "全草民间药用，清热利湿、解毒消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/070_水蜈蚣.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 71,
    "name": "马唐",
    "nameRaw": "马唐",
    "family": "禾本科",
    "genus": "马唐属",
    "latin": "Digitaria sanguinalis",
    "lifeForm": "草本",
    "features": "一年生禾草；秆基部匍匐后上升，节生根；叶鞘有毛；指状总状花序2-10枚从顶端放射伸出，小穗成对排列。",
    "medicinal": "主要为杂草或牧草；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "科名原误为\"莎草科\"",
    "images": [
      "images/071_马唐.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 72,
    "name": "地毯草",
    "nameRaw": "地毯草",
    "family": "禾本科",
    "genus": "地毯草属",
    "latin": "Axonopus compressus",
    "lifeForm": "草本",
    "features": "多年生匍匐禾草；茎节生根形成草坪；叶片较宽，先端钝；总状花序2-3枚指状排列，小穗贴生穗轴一侧。",
    "medicinal": "主要为草坪地被；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "科名原误为\"莎草科\"",
    "images": [
      "images/072_地毯草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 73,
    "name": "莎草",
    "nameRaw": "莎草",
    "family": "莎草科",
    "genus": "莎草属",
    "latin": "Cyperus rotundus",
    "lifeForm": "草本",
    "features": "多年生草本；秆三棱形，叶基生线形；地下有串珠状块茎；复伞形花序顶生，穗状小穗紫褐色；苞片叶状。",
    "medicinal": "根茎“香附”为常用中药，疏肝解郁、理气宽中、调经止痛；表中若仅写“莎草”需与香附来源对应确认。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/073_莎草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 74,
    "name": "山茶",
    "nameRaw": "山茶",
    "family": "山茶科",
    "genus": "山茶属",
    "latin": "Camellia japonica",
    "lifeForm": "灌木",
    "features": "常绿灌木或小乔木；叶互生，革质，有光泽，边缘细锯齿；花大，红、粉或白色，单生枝端；蒴果球形，种子大。",
    "medicinal": "花民间药用，凉血止血、散瘀消肿；茶油等另有用途，未见药典常用收载。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "",
    "images": [
      "images/074_山茶.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 75,
    "name": "铺地石松",
    "nameRaw": "铺地石松",
    "family": "石松科",
    "genus": "石松属",
    "latin": "Lycopodium clavatum",
    "lifeForm": "蕨类",
    "features": "多年生石松类；主茎匍匐，分枝直立；小叶针形，螺旋状密生；孢子囊穗通常生于细长柄顶端，常2-3枚。",
    "medicinal": "全草“伸筋草”为常用中药来源之一，祛风除湿、舒筋活络；需核对具体种源。",
    "medCategory": "祛风除湿",
    "toxic": false,
    "note": "",
    "images": [
      "images/075_铺地石松.jpg"
    ],
    "lifeForms": [
      "蕨类"
    ]
  },
  {
    "id": 76,
    "name": "苏铁",
    "nameRaw": "苏铁",
    "family": "苏铁科",
    "genus": "苏铁属",
    "latin": "Cycas revoluta",
    "lifeForm": "裸子植物",
    "features": "常绿棕榈状裸子植物；茎粗短不分枝；叶羽状，簇生茎顶，小叶硬革质，边缘反卷；雌雄异株，雄球花柱状，雌孢子叶羽状。",
    "medicinal": "叶、花、种子民间药用，但种子含毒性成分；未见药典常用收载，勿随意食用或内服。",
    "medCategory": "观赏/其他",
    "toxic": true,
    "note": "",
    "images": [
      "images/076_苏铁.jpg"
    ],
    "lifeForms": [
      "裸子植物"
    ]
  },
  {
    "id": 77,
    "name": "红果仔",
    "nameRaw": "红果仔",
    "family": "桃金娘科",
    "genus": "番樱桃属",
    "latin": "Eugenia uniflora",
    "lifeForm": "灌木",
    "features": "灌木或小乔木；叶对生，革质有光泽，嫩叶常红色；花白色，雄蕊多数；浆果具明显纵棱，熟时红至暗紫色。",
    "medicinal": "果可食；叶、果在民间有收敛止泻等用法，未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/077_红果仔.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 78,
    "name": "海南蒲桃",
    "nameRaw": "海南蒲桃",
    "family": "桃金娘科",
    "genus": "蒲桃属",
    "latin": "Syzygium hainanense",
    "lifeForm": "乔木",
    "features": "常绿乔木；叶对生，革质，侧脉密，叶内有油点；圆锥花序，花白色，雄蕊多数；浆果近球形。",
    "medicinal": "主要为乡土树种；同属部分蒲桃类民间药用，本种未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/078_海南蒲桃.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 79,
    "name": "红千层",
    "nameRaw": "红千层",
    "family": "桃金娘科",
    "genus": "白千层属",
    "latin": "Melaleuca citrina (Curtis) Dum.Cours.",
    "lifeForm": "乔木",
    "features": "常绿灌木或小乔木；叶互生，狭披针形，有芳香油点；穗状花序圆柱形，红色雄蕊密生成瓶刷状；蒴果木质，贴生枝上。",
    "medicinal": "主要为观赏植物；叶有芳香油，民间少量外用记载，未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "APG IV更新：属名Callistemon已并入白千层属Melaleuca；拉丁名由Callistemon citrinus更新为Melaleuca citrina；科仍为桃金娘科",
    "images": [
      "images/079_红千层.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 80,
    "name": "芒萁",
    "nameRaw": "芒萁",
    "family": "里白科",
    "genus": "芒萁属",
    "latin": "Dicranopteris pedata",
    "lifeForm": "蕨类",
    "features": "大型蕨类；根状茎长而横走；叶柄二叉分枝，羽片常成对叉状展开；孢子囊群沿小脉着生，无真正盖膜；常成片生长。",
    "medicinal": "全草民间药用，清热利湿、止血；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "科名原误为\"乌毛蕨科\"；芒萁属归里白科Gleicheniaceae",
    "images": [
      "images/080_芒萁.jpg"
    ],
    "lifeForms": [
      "蕨类"
    ]
  },
  {
    "id": 81,
    "name": "天胡荽",
    "nameRaw": "天胡荽，别名，野圆荽",
    "family": "五加科",
    "genus": "天胡荽属",
    "latin": "Hydrocotyle sibthorpioides",
    "lifeForm": "草本",
    "features": "多年生匍匐草本；茎细，节上生根；叶圆肾形，边缘浅裂或圆齿，叶柄着生叶片基部缺口处；伞形花序小，花绿白色。",
    "medicinal": "全草民间药用，清热利湿、化痰止咳、解毒消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/081_天胡荽.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 82,
    "name": "铜钱草",
    "nameRaw": "铜钱草（镜面草）",
    "family": "五加科",
    "genus": "天胡荽属",
    "latin": "Hydrocotyle vulgaris",
    "lifeForm": "草本",
    "features": "多年生湿生草本；匍匐茎节生根；叶圆形至盾状圆形，叶柄近中央着生，似铜钱；伞形花序小。",
    "medicinal": "常作观赏水生植物；中药“铜钱草”名称常指不同植物，需核对来源，未宜笼统作药典药材。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/082_铜钱草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 83,
    "name": "南天竹",
    "nameRaw": "南天竹",
    "family": "小檗科",
    "genus": "南天竹属",
    "latin": "Nandina domestica",
    "lifeForm": "灌木",
    "features": "常绿灌木；茎少分枝；叶2-3回羽状复叶，小叶披针形，秋冬变红；圆锥花序顶生，花白色；浆果鲜红色，成串。",
    "medicinal": "根、茎、果民间药用，清热除湿、止咳；全株含生物碱，果实不宜误食，未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": true,
    "note": "",
    "images": [
      "images/083_南天竹.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 84,
    "name": "母草",
    "nameRaw": "母草",
    "family": "母草科",
    "genus": "母草属",
    "latin": "Lindernia crustacea",
    "lifeForm": "草本",
    "features": "一年生小草本；茎匍匐或斜升，常带紫色；叶对生，卵形至椭圆形，边缘锯齿；花小，淡紫或白色，二唇形；蒴果长圆形。",
    "medicinal": "全草民间药用，清热利湿、解毒消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "APG IV更新：旧分类系统归入玄参科Scrophulariaceae；APG IV独立为母草科Linderniaceae",
    "images": [
      "images/084_母草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 85,
    "name": "五爪金龙",
    "nameRaw": "五爪金龙",
    "family": "旋花科",
    "genus": "五爪金龙属",
    "latin": "Ipomoea cairica",
    "lifeForm": "藤本",
    "features": "多年生攀援藤本；叶互生，掌状5-7深裂，裂片披针形；花漏斗状，淡紫至粉紫色；蒴果球形。",
    "medicinal": "全草民间药用，清热解毒、祛风止痛；同时为常见入侵藤本，需注意生态风险。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/085_五爪金龙.jpg"
    ],
    "lifeForms": [
      "藤本"
    ]
  },
  {
    "id": 86,
    "name": "雾水葛",
    "nameRaw": "雾水葛",
    "family": "荨麻科",
    "genus": "雾水葛属",
    "latin": "Pouzolzia zeylanica",
    "lifeForm": "草本",
    "features": "多年生草本或亚灌木；茎纤细，常匍匐或斜升；叶对生或近对生，卵形，三出脉明显；花小，腋生簇集，雌雄同株。",
    "medicinal": "全草民间药用，清热解毒、消肿排脓、利水通淋；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/086_雾水葛.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 87,
    "name": "透明草",
    "nameRaw": "透明草",
    "family": "荨麻科",
    "genus": "冷水花属",
    "latin": "Pilea microphylla",
    "lifeForm": "草本",
    "features": "一年生或多年生小草本；茎多分枝，肉质透明感；叶对生但大小不等，极小，倒卵形；花细小，簇生叶腋。",
    "medicinal": "全草民间药用，清热利尿、解毒消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/087_透明草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 88,
    "name": "紫背万年青",
    "nameRaw": "紫背万年青",
    "family": "鸭跖草科",
    "genus": "紫露草属",
    "latin": "Tradescantia spathacea",
    "lifeForm": "草本",
    "features": "多年生草本；叶密集成莲座状，剑形，正面绿色，背面紫色；花小白色，包藏于紫色舟形苞片内。",
    "medicinal": "全草民间药用，清热解毒、凉血止血；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/088_紫背万年青.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 89,
    "name": "吊竹梅",
    "nameRaw": "吊竹梅",
    "family": "鸭跖草科",
    "genus": "紫露草属",
    "latin": "Tradescantia zebrina",
    "lifeForm": "草本",
    "features": "多年生匍匐草本；茎节生根；叶互生，椭圆形，表面有银白色纵条纹，背面紫红；花小，粉紫色。",
    "medicinal": "全草民间药用，清热解毒、利尿消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "APG IV更新：吊竹梅属Zebrina已并入紫露草属Tradescantia；拉丁名Tradescantia zebrina不变",
    "images": [
      "images/089_吊竹梅.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 90,
    "name": "地菍",
    "nameRaw": "地菍",
    "family": "野牡丹科",
    "genus": "地菍属",
    "latin": "Melastoma dodecandrum",
    "lifeForm": "灌木",
    "features": "匍匐小灌木；茎平卧，节上常生根；叶对生，卵形，3-5条基出脉明显；花紫红色，5瓣；浆果状蒴果成熟紫黑色，可染手。",
    "medicinal": "全草或根民间药用，活血止血、清热解毒、消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/090_地菍.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 91,
    "name": "野牡丹",
    "nameRaw": "野牡丹",
    "family": "野牡丹科",
    "genus": "野牡丹属",
    "latin": "Melastoma candidum",
    "lifeForm": "灌木",
    "features": "灌木；枝和叶被粗毛；叶对生，椭圆形，3-5条基出脉醒目；花大，紫红色，雄蕊弯曲；蒴果坛状，熟裂露紫黑色果肉。",
    "medicinal": "根、叶民间药用，清热利湿、活血止血、解毒；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/091_野牡丹.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 92,
    "name": "九里香",
    "nameRaw": "九里香",
    "family": "芸香科",
    "genus": "九里香属",
    "latin": "Murraya exotica",
    "lifeForm": "灌木",
    "features": "常绿灌木或小乔木；奇数羽状复叶，小叶3-9，革质，有芳香；花白色，浓香，聚伞花序顶生或腋生；浆果红色。",
    "medicinal": "根、叶“九里香”民间药用，行气止痛、活血散瘀、祛风除湿；未见药典常用收载。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "",
    "images": [
      "images/092_九里香.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 93,
    "name": "戟叶堇菜",
    "nameRaw": "戟叶堇菜",
    "family": "堇菜科",
    "genus": "堇菜属",
    "latin": "Viola betonicifolia Sm.",
    "lifeForm": "草本",
    "features": "多年生草本；叶基生，叶片披针形至线状披针形，基部明显戟形或箭形，边缘浅波状或具圆齿；花单生，花梗细，花瓣5，紫色，下方一瓣有距；蒴果三瓣裂，开裂为3片船形果瓣，是与通泉草等区别的关键特征。",
    "medicinal": "全草民间药用，清热解毒、凉血消肿；与紫花地丁用途相近；未见《中国药典》常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "原误填为犁头尖（天南星科）；实为校园草坪常见堇菜科植物",
    "images": [
      "images/093_戟叶堇菜.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 94,
    "name": "樟树",
    "nameRaw": "樟树",
    "family": "樟科",
    "genus": "樟属",
    "latin": "Cinnamomum camphora",
    "lifeForm": "乔木",
    "features": "常绿乔木；叶互生，卵形至椭圆形，离基三出脉明显，揉碎有樟脑香；圆锥花序，花黄绿色；核果球形，熟黑色。",
    "medicinal": "枝、叶、根、木材可提樟脑、樟油；樟木、樟脑有通窍、辟秽、温散等传统用途，外用较多，内服需慎。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/094_樟树.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 95,
    "name": "基及树",
    "nameRaw": "基及树 / 福建茶",
    "family": "紫草科",
    "genus": "基及树属",
    "latin": "Carmona retusa",
    "lifeForm": "灌木",
    "features": "常绿灌木；叶小，互生或簇生，倒卵形，表面粗糙有小白点，边缘上部有齿；花小白色，5裂；核果红至橙色。",
    "medicinal": "主要为观赏盆景；叶、根民间有清热解毒等用法，未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/095_基及树.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 96,
    "name": "三角梅",
    "nameRaw": "三角梅",
    "family": "紫茉莉科",
    "genus": "叶子花属",
    "latin": "Bougainvillea glabra",
    "lifeForm": "藤本",
    "features": "攀援灌木；枝有刺；叶互生，卵形，全缘；真正的花小、黄白色，三朵一组，被3片大型紫红、红、白或橙色苞片包围。",
    "medicinal": "主要为观赏植物；花、叶民间有调经、化湿等记载，未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/096_三角梅.jpg"
    ],
    "lifeForms": [
      "藤本",
      "灌木"
    ]
  },
  {
    "id": 97,
    "name": "风铃木",
    "nameRaw": "风铃木",
    "family": "紫葳科",
    "genus": "风铃木属",
    "latin": "Handroanthus chrysanthus",
    "lifeForm": "乔木",
    "features": "落叶乔木；掌状复叶，对生，小叶5枚左右；先花后叶或花叶同期，花金黄色漏斗形，成簇开放；蒴果细长条形。",
    "medicinal": "主要为观赏行道树；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/097_风铃木.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 98,
    "name": "大王椰",
    "nameRaw": "大王椰",
    "family": "棕榈科",
    "genus": "大王椰属",
    "latin": "Roystonea regia",
    "lifeForm": "棕榈",
    "features": "高大棕榈；单干直立，灰白色，具明显环纹；冠shaft绿色光滑；羽状复叶大；花序生于冠shaft下，果近球形，紫黑色。",
    "medicinal": "主要为观赏棕榈；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/098_大王椰.jpg"
    ],
    "lifeForms": [
      "棕榈"
    ]
  },
  {
    "id": 99,
    "name": "狐尾椰",
    "nameRaw": "狐尾椰",
    "family": "棕榈科",
    "genus": "狐尾椰属",
    "latin": "Wodyetia bifurcata",
    "lifeForm": "棕榈",
    "features": "单干棕榈；羽状叶小羽片多向排列，叶冠蓬松似狐尾；花序生于叶鞘下；果椭圆形，成熟橙红色。",
    "medicinal": "主要为观赏棕榈；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/099_狐尾椰.jpg"
    ],
    "lifeForms": [
      "棕榈"
    ]
  },
  {
    "id": 100,
    "name": "银海枣",
    "nameRaw": "银海枣",
    "family": "棕榈科",
    "genus": "银海枣属",
    "latin": "Phoenix sylvestris",
    "lifeForm": "棕榈",
    "features": "单干棕榈；叶羽状，灰绿至银绿色，小叶硬而尖，叶柄基部有刺；花序腋生；果椭圆形，成熟橙黄至褐色。",
    "medicinal": "主要为观赏棕榈；果可食性有限，未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/100_银海枣.jpg"
    ],
    "lifeForms": [
      "棕榈"
    ]
  },
  {
    "id": 101,
    "name": "软叶针葵",
    "nameRaw": "软叶针葵",
    "family": "棕榈科",
    "genus": "软叶针葵属",
    "latin": "Phoenix roebelenii",
    "lifeForm": "棕榈",
    "features": "小型棕榈；茎细，常丛生或单生；羽状叶柔软下垂，小叶狭线形；叶柄基部有刺；果小，熟黑色。",
    "medicinal": "主要为观赏棕榈；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/101_软叶针葵.jpg"
    ],
    "lifeForms": [
      "棕榈"
    ]
  },
  {
    "id": 102,
    "name": "棕榈",
    "nameRaw": "棕榈",
    "family": "棕榈科",
    "genus": "棕榈属",
    "latin": "Trachycarpus fortunei",
    "lifeForm": "棕榈",
    "features": "常绿棕榈状乔木；干被褐色纤维包裹；叶掌状深裂，裂片硬；肉穗花序腋生；果肾形，蓝黑色。",
    "medicinal": "叶鞘纤维“棕榈炭”为常用止血药，收涩止血；用于吐血、衄血、便血、崩漏等。",
    "medCategory": "止血收敛",
    "toxic": false,
    "note": "",
    "images": [
      "images/102_棕榈.jpg"
    ],
    "lifeForms": [
      "棕榈"
    ]
  },
  {
    "id": 103,
    "name": "蒲葵",
    "nameRaw": "蒲葵",
    "family": "棕榈科",
    "genus": "蒲葵属",
    "latin": "Livistona chinensis",
    "lifeForm": "棕榈",
    "features": "常绿棕榈；叶掌状，裂片先端下垂，叶柄边缘有刺；花序大型，腋生；果椭圆形，熟时蓝黑色。",
    "medicinal": "种子“蒲葵子”民间药用，软坚散结等；未见《中国药典》常用收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/103_蒲葵.jpg"
    ],
    "lifeForms": [
      "棕榈"
    ]
  },
  {
    "id": 104,
    "name": "三药槟榔",
    "nameRaw": "三药槟榔",
    "family": "棕榈科",
    "genus": "槟榔属",
    "latin": "Areca triandra",
    "lifeForm": "棕榈",
    "features": "丛生小型棕榈；茎细，有环纹；羽状叶，冠shaft明显；花序生于叶鞘下；果椭圆形，成熟橙红色，常成串。",
    "medicinal": "同属槟榔的成熟种子为药典药材“槟榔”，杀虫消积、行气利水；三药槟榔本种不宜直接等同药用槟榔。",
    "medCategory": "杀虫消积",
    "toxic": false,
    "note": "",
    "images": [
      "images/104_三药槟榔.jpg"
    ],
    "lifeForms": [
      "棕榈"
    ]
  },
  {
    "id": 105,
    "name": "酢浆草",
    "nameRaw": "酢浆草",
    "family": "酢浆草科",
    "genus": "酢浆草属",
    "latin": "Oxalis corniculata",
    "lifeForm": "草本",
    "features": "多年生或一年生小草本；茎匍匐，节上生根；三出复叶，小叶倒心形，夜间闭合；花黄色；蒴果细长，成熟弹裂。",
    "medicinal": "全草“酢浆草”民间药用，清热利湿、凉血散瘀、解毒消肿；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/105_酢浆草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 106,
    "name": "肾蕨",
    "nameRaw": "肾蕨",
    "family": "肾蕨科",
    "genus": "肾蕨属",
    "latin": "Nephrolepis auriculata",
    "lifeForm": "蕨类",
    "features": "多年生常绿蕨类；根状茎短而直立，常有细长匍匐枝并生圆肾形贮水块茎；叶簇生，一回羽状复叶，羽片多数、狭长，边缘浅波状；孢子囊群圆形，生于羽片背面近边缘处。",
    "medicinal": "全草和块茎民间药用，常作清热利湿、止咳、消肿；未见《中国药典》常用药材收载，实习中以识别其簇生羽状叶和肾形块茎为主。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/106_肾蕨.jpg"
    ],
    "lifeForms": [
      "蕨类"
    ]
  },
  {
    "id": 107,
    "name": "海金沙",
    "nameRaw": "海金沙",
    "family": "海金沙科",
    "genus": "海金沙属",
    "latin": "Lygodium japonicum",
    "lifeForm": "蕨类",
    "features": "多年生攀援蕨类；叶轴细长蔓生，可缠绕攀援，羽片掌状或羽状分裂；能育裂片边缘着生小穗状孢子囊，成熟孢子粉黄褐色。与多数地生蕨类不同，整体像细藤。",
    "medicinal": "成熟孢子“海金沙”为常用中药，清利湿热、通淋止痛，常用于热淋、石淋、血淋等；采药部位是孢子粉，不是整株藤叶。",
    "medCategory": "利湿通淋",
    "toxic": false,
    "note": "",
    "images": [
      "images/107_海金沙.jpg"
    ],
    "lifeForms": [
      "蕨类"
    ]
  },
  {
    "id": 108,
    "name": "两耳草",
    "nameRaw": "两耳草",
    "family": "禾本科",
    "genus": "雀稗属",
    "latin": "Paspalum conjugatum Berg.",
    "lifeForm": "草本",
    "features": "多年生匍匐禾草；具长达1米匍匐茎；叶片披针状线形，质薄；总状花序通常2枚纤细开展，小穗边缘具长丝状柔毛，形如两耳，是最醒目识别点。",
    "medicinal": "全草民间药用，清热利湿；常见入侵草坪杂草，未见《中国药典》常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/108_两耳草.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 109,
    "name": "乌蔹莓",
    "nameRaw": "乌蔹莓",
    "family": "葡萄科",
    "genus": "乌蔹莓属",
    "latin": "Causonis japonica (Thunb.) Raf.",
    "lifeForm": "藤本",
    "features": "草质藤本；卷须2–3叉，与叶对生；鸟足状5小叶，小叶卵形，边缘锯齿；聚伞花序腋生，花小黄绿；浆果小，熟时黑色。",
    "medicinal": "全草民间药用，解毒消肿、活血散瘀、利尿止血；用于咽喉肿痛、痈肿、跌打损伤等，未见药典常用收载。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "",
    "images": [
      "images/109_乌蔹莓.jpg"
    ],
    "lifeForms": [
      "藤本"
    ]
  },
  {
    "id": 110,
    "name": "桃金娘",
    "nameRaw": "桃金娘",
    "family": "桃金娘科",
    "genus": "桃金娘属",
    "latin": "Rhodomyrtus tomentosa (Ait.) Hassk.",
    "lifeForm": "灌木",
    "features": "常绿灌木；叶对生，椭圆形，基出三脉明显，背面密被柔毛；花单生，紫红色，雄蕊多数；浆果卵形，熟时紫黑色，甜可食。",
    "medicinal": "根、叶、果药用；根祛风活络、收敛止泻；果补血安神；常用于肠胃炎、风湿关节炎等；未见药典常用大宗收载。",
    "medCategory": "祛风除湿",
    "toxic": false,
    "note": "",
    "images": [
      "images/110_桃金娘.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 111,
    "name": "波罗蜜",
    "nameRaw": "波罗蜜",
    "family": "桑科",
    "genus": "波罗蜜属",
    "latin": "Artocarpus heterophyllus Lam.",
    "lifeForm": "乔木",
    "features": "常绿乔木；叶互生，椭圆形，革质有光泽；树干和老枝直接着生巨大复合果，果面有瘤状突起，果肉黄色甜香；各部含白色乳汁。",
    "medicinal": "果肉止渴、通乳、补中益气；树液和叶消肿解毒；未见《中国药典》常用收载。",
    "medCategory": "补益",
    "toxic": true,
    "note": "",
    "images": [
      "images/111_波罗蜜.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  },
  {
    "id": 112,
    "name": "琴叶榕",
    "nameRaw": "琴叶榕",
    "family": "桑科",
    "genus": "榕属",
    "latin": "Ficus pandurata Hance",
    "lifeForm": "灌木",
    "features": "灌木或小乔木；叶厚纸质，提琴形或倒卵形，中部明显缢缩，先端急尖，背面叶脉有疏毛；隐头果小，椭圆形，熟时红色；常见于林缘路边。",
    "medicinal": "根、叶民间药用，祛风除湿、活血消肿、通乳；用于风湿痹痛、跌打损伤等；未见药典常用收载。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "",
    "images": [
      "images/112_琴叶榕.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 113,
    "name": "琴叶珊瑚",
    "nameRaw": "琴叶珊瑚",
    "family": "大戟科",
    "genus": "麻风树属",
    "latin": "Jatropha integerrima Jacq.",
    "lifeForm": "灌木",
    "features": "常绿灌木；植株含乳汁有毒；叶互生，倒阔披针形，叶基两侧各有2–3枚锐刺；聚伞花序顶生，花冠红色，花期几乎全年；蒴果成熟黑褐色。",
    "medicinal": "全株有毒，乳汁刺激性强；民间少量外用消肿，不宜内服；教学中应强调毒性，未见药典常用收载。",
    "medCategory": "观赏/其他",
    "toxic": true,
    "note": "",
    "images": [
      "images/113_琴叶珊瑚.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 114,
    "name": "紫薇",
    "nameRaw": "紫薇",
    "family": "千屈菜科",
    "genus": "紫薇属",
    "latin": "Lagerstroemia indica L.",
    "lifeForm": "灌木",
    "features": "落叶灌木或小乔木；树皮易脱落，树干光滑（别名\"痒痒树\"）；叶互生或对生，椭圆形；花紫红至白色，花瓣边缘皱褶有爪。注意与大叶紫薇（L. speciosa）区别：本种叶较小、落叶性明显。",
    "medicinal": "根、叶、花民间药用，活血止血、解毒消肿；未见药典常用收载。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "",
    "images": [
      "images/114_紫薇.jpg"
    ],
    "lifeForms": [
      "灌木",
      "乔木"
    ]
  },
  {
    "id": 115,
    "name": "萼距花",
    "nameRaw": "萼距花",
    "family": "千屈菜科",
    "genus": "萼距花属",
    "latin": "Cuphea hyssopifolia Kunth",
    "lifeForm": "灌木",
    "features": "小灌木或亚灌木；茎多分枝，细弱；叶对生，线状披针形；花单生叶腋，花萼筒有距，花冠6瓣，紫至淡紫色，花期极长；常见于校园花坛镶边。",
    "medicinal": "主要为观赏植物；未见权威常用中药材收载。",
    "medCategory": "观赏/其他",
    "toxic": false,
    "note": "",
    "images": [
      "images/115_萼距花.jpg"
    ],
    "lifeForms": [
      "灌木"
    ]
  },
  {
    "id": 116,
    "name": "链荚豆",
    "nameRaw": "链荚豆",
    "family": "豆科",
    "genus": "链荚豆属",
    "latin": "Alysicarpus vaginalis (L.) DC.",
    "lifeForm": "草本",
    "features": "多年生匍匐草本；茎平卧；单小叶，卵状长圆形，叶脉明显；总状花序腋生，蝶形花小，粉红至紫红色；荚果细长，节间缢缩呈念珠形。",
    "medicinal": "全草民间药用，清热解毒、利湿；亦可作饲草；未见药典常用收载。",
    "medCategory": "清热解毒",
    "toxic": false,
    "note": "",
    "images": [
      "images/116_链荚豆.jpg"
    ],
    "lifeForms": [
      "草本"
    ]
  },
  {
    "id": 117,
    "name": "高山榕",
    "nameRaw": "高山榕",
    "family": "桑科",
    "genus": "榕属",
    "latin": "Ficus altissima Blume",
    "lifeForm": "乔木",
    "features": "高大常绿乔木；叶厚革质，椭圆形，侧脉7–10对，叶面深绿有光泽；隐头果成对腋生，熟时黄红色；气根少见。与大叶榕（F. virens）区别：叶质更厚，落叶性不明显。",
    "medicinal": "根、叶、气根民间药用，祛风除湿、活血消肿；未见药典常用收载。",
    "medCategory": "活血化瘀",
    "toxic": false,
    "note": "",
    "images": [
      "images/117_高山榕.jpg"
    ],
    "lifeForms": [
      "乔木"
    ]
  }
];
