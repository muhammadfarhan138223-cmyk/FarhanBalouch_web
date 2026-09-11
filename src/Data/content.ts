// ────────────────────────────────────────────────────────────
//  Central content for Farhan Balouch's personal site.
//  This is the ONLY place to edit story text, highlights, etc.
//
//  PRIVACY NOTE: All female individuals have been anonymized.
//  Names, identifying relationships, and details that could
//  expose them on a public, searchable website have been
//  removed or generalized. The emotional truth of the story
//  is preserved.
// ────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Farhan Balouch',
  origin: 'Ahmadpur East, Pakistan',
  email: 'muhammadfarhan138223@gmail.com', // placeholder — replace with real email
  domain: 'farhanbalouch.com', // placeholder — replace with real domain
};

export type SocialProfile = {
  label: string;
  url: string;
  handle: string;
};

/** Single source of truth for social links used in the navbar and home page. */
export const socials: SocialProfile[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/farhan-balouch-18a9b6434', handle: 'farhan-balouch' },
  { label: 'GitHub', url: 'https://github.com/muhammadfarhan138223-cmyk', handle: 'muhammadfarhan138223-cmyk' },
  { label: 'YouTube', url: 'https://www.youtube.com/@Farhanbalouch715', handle: '@Farhanbalouch715' },
  { label: 'Instagram', url: 'https://www.instagram.com/farhanbalouch715', handle: '@farhanbalouch715' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@farhandeals.store', handle: '@farhandeals.store' },
  { label: 'Facebook', url: 'https://www.facebook.com/share/18xn791BLy/', handle: 'Farhan Balouch' },
];

export type Highlight = {
  icon: 'compass' | 'heart' | 'rocket';
  title: string;
  body: string;
};

export const highlights: Highlight[] = [
  {
    icon: 'compass',
    title: 'Where I Started',
    body: 'A small town in southern Punjab — Ahmadpur East — where the horizon was flat, the stars were close, and a restless kid kept finding things to build, raise, and try.',
  },
  {
    icon: 'heart',
    title: 'What I Once Wanted',
    body: 'I dreamed of becoming a doctor — not for prestige, but to heal the person I loved most. When life took that away, the dream reshaped itself, but the instinct never left.',
  },
  {
    icon: 'rocket',
    title: 'Where I’m Headed',
    body: 'Today my compass points to technology, AI, SEO, and online business — building things that reach across the world from where I began. The story isn’t over; it’s only just begun.',
  },
];

export type Phase = {
  id: string;
  label: string;
  startPart: number;
  endPart: number;
};

export const phases: Phase[] = [
  { id: 'childhood', label: 'Childhood', startPart: 1, endPart: 2 },
  { id: 'school', label: 'School Years', startPart: 3, endPart: 6 },
  { id: 'loss-change', label: 'Loss & Change', startPart: 7, endPart: 13 },
  { id: 'forward', label: 'Looking Forward', startPart: 14, endPart: 15 },
];

export type StoryChapter = {
  slug: string;
  part: number;
  title: string;
  subtitle: string;
  period: string;
  phase: string;
  excerpt: string;
  paragraphs: string[];
};

export const storyChapters: StoryChapter[] = [
  {
    slug: 'part-1-ahmadpur-east',
    part: 1,
    title: 'Ahmadpur East: Where It All Began',
    subtitle: 'A small house, a restless kid, and the feeling that I had to do something',
    period: 'Childhood',
    phase: 'childhood',
    excerpt:
      'My story doesn\'t begin in a big city\'s glamorous background. It begins in an ordinary house in Ahmadpur East — where I was born, grew up, and carried a strange feeling inside: "I have to do something with my life."',
    paragraphs: [
      'Meri kahani kisi bade shehar ke glamorous background se shuru nahi hoti. Ye kahani Ahmadpur East ke ek aam se ghar se shuru hoti hai — jahan main paida hua, bada hua, aur jahan bachpan se mere andar ek ajeeb si feeling thi: "Mujhe zindagi mein kuch karna hai."',
      'Us waqt mujhe nahi pata tha ke "kuch bara karna" exactly kya hota hai. Lekin khaali bethna mujhe kabhi pasand nahi tha. Kabhi chickens palne ka shauq chadh jata, kabhi koi naya kaam seekhne ka. Chhote chhote experiments karta aur unhein poori seriousness se leta.',
      'Ek chhota sa chick agar mar jata ya billi utha leti, to mujhe genuinely dukh hota tha. Main rota bhi tha. Shayad wahi bachpan ka shauq baad mein meri personality ka hissa ban gaya: kuch banana, kuch seekhna, kuch try karna.',
    ],
  },
  {
    slug: 'part-2-school-ka-pehla-safar',
    part: 2,
    title: 'School Ka Pehla Safar',
    subtitle: 'A failed admission test, a new beginning, and a school that became a second home',
    period: 'Early school',
    phase: 'childhood',
    excerpt:
      'I stepped into the world of school around age four. A failed admission test at a new school — I couldn\'t recite the six times table — led to a fresh start in class 1. That school would become my second home.',
    paragraphs: [
      'Maine school ki duniya mein qareeban chaar saal ki umar mein qadam rakha. Pehle ek school mein nursery, prep aur phir class 1 tak padha. Phir family ne decide kiya ke mujhe us school mein hona chahiye jahan meri bari sister parhti thi.',
      'Naya school us waqt Ahmadpur East ke achay schools mein count hota tha. Lekin admission ka pehla impression? Six ka table. Test hua aur main fail. Purane school ne kaha ke agar main wahi rahun to mujhe agay ki class mein promote kar denge. Lekin Abu ne decide kiya ke ab school change hoga.',
      'To main new school mein class 1 se dobara start hua. Naya environment, naye teachers, naye bachay... Aur main ghar aa kar aksar complain karta: "Mujhe wapis purane school jana hai!"',
      'Lekin waqt ke saath wahi school mera second home ban gaya. Class 2 mein dost banne lage. Class 3 tak studies mein improvement aayi aur maine second position hasil kar li.',
      'Phir school ki building change hui, playground bada mila, aur bachpan ka woh phase shuru hua jahan school sirf parhai nahi tha — school poori duniya tha. Class 4 mein meri neatness ka bhi school ko fikr hone lagi. Ek baar ghar message gaya ke Farhan ko thora neat bheja karo.',
      'Class 5 tak parhai mein dil lag chuka tha aur maine dobara second position li. Aur phir ek din boys aur girls ki classes officially separate ho gayin. Hum bachay andar se: "Finally!"',
    ],
  },
  {
    slug: 'part-3-the-boy-who-was-afraid-of-school',
    part: 3,
    title: 'The Boy Who Was Afraid of School',
    subtitle: 'When confidence arrived, and so did something unexpected',
    period: 'Class 6–7',
    phase: 'school',
    excerpt:
      'Class 6 made me confident — friends, games, the kind of school life where break-time plans mattered more than homework. Then class 7 brought an unexpected turn: a face I couldn\'t forget.',
    paragraphs: [
      'Class 6 mein main kaafi confident ho gaya. Teachers ke saath hansi mazaaq, friends ke saath unlimited bakwaas, games, masti... School life ka woh version jahan homework se zyada important hota tha: "Aaj break mein kya karna hai?"',
      'Lekin phir class 7 mein meri life ne ek unexpected turn liya. Ek din school se cycle par ghar ja raha tha jab raaste mein ek larki nazar aayi. Main usay pehle kabhi nahi dekha tha. Us din bas ek nazar pari... Aur phir ghar ja kar bhi wahi chehra yaad aata raha.',
      'Agle din main usi jagah se guzra. Phir dobara. Phir mujhe curiosity hui ke ye hai kaun? Aur yahan se meri teenage curiosity ne detective mode activate kar diya.',
      'Dheere dheere mujhe uska ghar aur school routine maloom hone laga. Main subah school se pehle uske raaste ke aas paas rukne laga. Jo larka kabhi school jane ke liye excuses banata tha, woh ab school se aadha ghanta pehle ghar se nikalta tha.',
      'Reason? School nahi. Ek jhalak. Mere friends ne bhi notice kar liya ke jo banda normally late hota tha, ab daily time par aa raha hai. Aur phir feelings ki duniya mein mera unofficial admission ho gaya.',
    ],
  },
  {
    slug: 'part-4-pehla-crush-pehli-confusion',
    part: 4,
    title: 'Pehla Crush, Pehli Confusion',
    subtitle: 'A teenage investigation, a two-page love letter that was never delivered, and a silence that spoke volumes',
    period: 'Class 7–8',
    phase: 'school',
    excerpt:
      'Boys and girls weren\'t allowed to talk at school, so my investigation was creative. A two-page love letter stayed in my pocket for days — I never found the courage to deliver it. The response, when it finally came, was silence.',
    paragraphs: [
      'Us waqt school mein boys aur girls ke darmiyan baat karna allowed nahi tha. Isliye meri investigation bhi thori creative thi. Kabhi school records se naam ka idea, kabhi routine ka, kabhi common acquaintances se information... Teenage brain ko agar kisi cheez ki curiosity ho jaye to Google bhi sharma jaye.',
      'Lekin ek problem thi: parhai ka kya? Main usay dekhne mein itna involved ho gaya ke studies ka focus kam hone laga. Class 7 kisi tarah nikal gayi. Class 8 mein bhi situation kuch aisi hi rahi.',
      'Phir ek waqt aaya jab mujhe laga: "Ya to baat clear karo... ya move on karo." Maine ek love letter likha. Do pages. Kai din pocket mein raha. Himmat nahi hui dene ki. Aakhir woh letter bhi history ban gaya.',
      'Phir maine chhote chhote papers par ek sentence likha aur us tak pohanchane ki koshish ki. Response? Silence. Phir papers wapas bahar nazar aaye. Maine ise rejection samjha.',
      'Baad mein ek mysterious gesture hua jo aaj tak mere liye completely clear nahi hua. Aur teenage heart ne apna favourite solution nikala: "Chalo... shayad ye chapter yahin khatam."',
      'Main usay bhoolne ki koshish karta raha. Lekin kuch yaadein delete button se delete nahi hotin.',
    ],
  },
  {
    slug: 'part-5-position-mil-gayi',
    part: 5,
    title: 'Position Mil Gayi, Lekin…',
    subtitle: 'A trophy won, but the one person I wanted to see it wasn\'t there',
    period: 'Class 8',
    phase: 'school',
    excerpt:
      'I won second position again — but I wasn\'t at school that day. I was in Islamabad. The trophy came home, the result was good, but something was missing. Reality said: "Not every scene gets its audience."',
    paragraphs: [
      'Class 8 ke result mein maine phir second position hasil kar li. Lekin result day par main school mein nahi tha. Main Islamabad mein tha.',
      'Ghar se message aaya: "Aj tumhara result tha na?" Main bola: "Han." Trophy ghar aa gayi. Result acha tha. Khushi bhi hui.',
      'Lekin dil mein ek ajeeb si kami thi. Mere zehen mein ek simple si imagination thi: Agar main stage par hota... naam announce hota... trophy milti... aur woh bhi saamne hoti... to shayad uske chehre par ek chhoti si smile hi dekh leta.',
      'Reality ne bas itna kaha: "Not every scene gets its audience."',
    ],
  },
  {
    slug: 'part-6-islamabad-mountains-and-memories',
    part: 6,
    title: 'Islamabad: Mountains, Memories & a Wider World',
    subtitle: 'A night bus, cold mountains, and the first feeling that the world was bigger than my town',
    period: 'Class 8',
    phase: 'school',
    excerpt:
      'After my class 8 exams, I visited Islamabad for the first time. A night journey, then waking up to mountains everywhere. For the first time, I felt that the world was much bigger than Ahmadpur East.',
    paragraphs: [
      'Class 8 ke papers ke baad mujhe pehli baar Islamabad jane ka chance mila. Bus ka pehla proper safar. Night journey. Window ke bahar andhera. Phir subah aankh khuli... aur bahar sirf pahaar hi pahaar.',
      'Ahmadpur East ki garmi se nikla hua main Islamabad ki thandi subah mein mountains dekh raha tha. Woh scene mere liye kisi movie se kam nahi tha. Faisal Mosque pehli baar dekhi. Photos aur videos banaye. Ek vlog bhi banaya tha... jo unfortunately delete ho gaya.',
      'Islamabad mein kuch din guzare. Balcony se gali ka scene dekhta rehta. Ramzan bhi wahi guzra. Thanda weather, pahaar, badal, kabhi dhoop...',
      'Aur pehli baar mujhe mehsoos hua ke duniya Ahmadpur East se kaafi badi hai.',
    ],
  },
  {
    slug: 'part-7-ek-aur-rishta-ek-alag-kahani',
    part: 7,
    title: 'Ek Aur Rishta, Ek Alag Kahani',
    subtitle: 'A new connection, small moments that felt like a film, and a tragedy that brought reality close',
    period: 'Teenage years',
    phase: 'loss-change',
    excerpt:
      'Someone close to the family showed me care and affection. Small moments — walking together, carrying a bag, a simple goodbye — were enough for a teenage mind to build a whole film. Then a family tragedy brought reality crashing in.',
    paragraphs: [
      'Ek aur connection bana — koi jo family ke qareeb tha. School aur family gatherings ki wajah se mulaqat hoti rehti. Woh relatively shy thi, lekin mere saath care aur affection show karti thi.',
      'Phir circumstances aise bane ke school ke baad tuition ka connection bhi ho gaya. Kabhi saath ghar ki taraf jana. Kabhi bag carry karna. Kabhi door tak chhor kar aana. Kabhi ek simple sa: "Bye." Aur teenage mind ke liye bas itna hi kaafi hota hai ke poori film ban jaye.',
      'Dheere dheere kuch logon ko dono ke darmiyan feelings ka idea ho gaya. Lekin phir ek family tragedy hui. Ek chhoti loss — unexpected, sudden — ne sab ko hila diya.',
      'Uska janaza mere liye life ke un moments mein se tha jo insaan bhool nahi sakta. Main us janaze ko apne kandhon par utha raha tha aur mere zehen mein ek sher aya: "Jee rahe hain kapray badal badal kar, ek din uthaye jayenge kandhay badal badal kar."',
      'Us din bachpan ki masti ke beech zindagi ki reality bohat qareeb se nazar aayi.',
    ],
  },
  {
    slug: 'part-8-jab-family-ko-pata-chal-gaya',
    part: 8,
    title: 'Jab Family Ko Pata Chal Gaya',
    subtitle: 'Teasing, pressure, and the denial that hurt someone — and taught me something',
    period: 'Teenage years',
    phase: 'loss-change',
    excerpt:
      'The story wasn\'t just ours anymore. Teasing started, word reached my mother, and under pressure I did what teenage boys do: I denied everything. That denial hurt someone, and it taught me that understanding feelings and accepting them are two different things.',
    paragraphs: [
      'Family gatherings mein teasing shuru hui. Meri aur us connection ki story ab sirf hum dono tak nahi rahi thi. Baat meri mother tak bhi pahunch gayi.',
      'Aur phir woh classic moment aaya jahan teenage boy pressure mein aa kar: "Mujhe kuch nahi pata." Maine feelings deny kar di.',
      'Is denial ne saamne wale ko hurt kiya. Kuch waqt ke liye distance aa gaya. Baad mein dheere dheere normal communication wapas aayi.',
      'Is chapter ne mujhe ek cheez samjhayi: feelings ko samajhna aur feelings ko accept karna do alag cheezen hain.',
    ],
  },
  {
    slug: 'part-9-chhoti-jobs-bade-lessons',
    part: 9,
    title: 'Chhoti Jobs, Bade Lessons',
    subtitle: 'Working at medical stores, learning by doing, and the seeds of a dream',
    period: 'School holidays',
    phase: 'loss-change',
    excerpt:
      'My father believed I shouldn\'t sit idle. So school holidays meant working — medical stores, small jobs, learning by doing. I didn\'t know it then, but every small job was teaching me something. Medicine\'s basics took root here.',
    paragraphs: [
      'Mere bachpan ka ek aur important part tha kaam karna. Mere father ka mindset tha ke main ghar mein farigh na bethun. Isliye school holidays mein mujhe different places par kaam seekhne aur busy rehne ke opportunities milti rahin.',
      'Medical stores par bhi kaam seekha. Pehle chhoti payment mili, phir doosri jagah kuch zyada. Ek jagah sirf experience ke liye kaam karne ko kaha gaya aur payment nahi milni thi, to main do din baad chhor aaya.',
      'Ek aur jagah par kaam shuru kiya, lekin month complete hone se pehle hi chhor diya. Us waqt mujhe shayad samajh nahi aata tha ke ye sab experiences future mein kis kaam aayenge.',
      'Lekin aaj peeche dekhta hoon to lagta hai: har chhota kaam mujhe kuch na kuch sikha raha tha. Medicine ka basic knowledge bhi isi journey ka hissa bana.',
      'Baad mein jab meri Nani medicines ke naam aur unke uses poochti thin, to mujhe unhein samjhana acha lagta tha. Unki khushi mujhe khushi deti thi. Aur shayad isi wajah se medical field aur doctor banne ka dream bhi mere andar strong hota gaya.',
    ],
  },
  {
    slug: 'part-10-nani',
    part: 10,
    title: 'Nani',
    subtitle: 'The person I loved most, the dream to heal her, and the day the phone rang',
    period: 'Turning point',
    phase: 'loss-change',
    excerpt:
      'My grandmother — Nani — was the person I was emotionally closest to. I dreamed of becoming a doctor so I could treat her myself. Then one day, the phone rang, and my mother\'s cry told me everything.',
    paragraphs: [
      'Meri Nani meri life ke un logon mein se thin jin ke saath mera emotional connection bohat strong tha. Unki health aksar theek nahi rehti thi. Main kabhi unke paas baith kar medicines ke baare mein batata, kabhi unki health ko lekar sochta.',
      'Dil mein ek dream tha: "Kaash main doctor ban jaun aur apni Nani ka khud ilaaj kar sakun." Main medical field ki taraf isi dream ke saath bhi attract hua.',
      'Phir ek din unki tabiyat bohat kharab ho gayi. Doctor ghar aaya. Phir ambulance bulani pari. Family unke saath hospital ki taraf chali gayi. Hum ghar mein intezar kar rahe thay.',
      'Main namaz parhne ke liye uthne hi wala tha. Socha: "Namaz parhta hoon, dua karta hoon. InshaAllah theek ho jayengi."',
      'Aur phir... phone aaya. Meri mother ki cheekh ne sab kuch bata diya. Nani nahi rahi thin.',
      'Woh meri life ke sabse khofnaak dinon mein se ek tha. Mehmaan aaye. Janaza hua. Dafan kiya gaya. Ghar mein khamoshi thi. Aur phir waqt ne apna kaam kiya. Insaan gham ke saath jeena seekhta gaya.',
    ],
  },
  {
    slug: 'part-11-the-unexpected-message',
    part: 11,
    title: 'The Unexpected Message',
    subtitle: 'A late-night message that opened a new emotional chapter',
    period: 'After loss',
    phase: 'loss-change',
    excerpt:
      'After Nani\'s passing, another unexpected emotional turn came. A message arrived one night — not simple, carrying feelings. I was confused, deflected at first, but eventually gave an answer. A new chapter had begun.',
    paragraphs: [
      'Nani ke inteqal ke kuch waqt baad meri life mein ek aur unexpected emotional turn aaya. Kisi ne — jis ke baare mein meri mother ka zehen mein bhi kabhi mere future ke context mein zikr aaya tha — ne ek raat mujhe private message bheja.',
      'Message simple nahi tha. Usmein feelings ka izhar tha. Main confuse ho gaya. Mujhe samajh nahi aa raha tha ke jawab kya doon. Main seedha jawab dene ke bajaye baat ghumaata raha.',
      'Lekin eventually feelings ka ek jawab diya. Us raat baat hui. Phir kuch din baad dobara communication hui. Aur yahan se meri life mein ek naya emotional chapter shuru hua.',
    ],
  },
  {
    slug: 'part-12-confusion',
    part: 12,
    title: 'Confusion',
    subtitle: 'Between old memories and a new possibility, I didn\'t know my own heart',
    period: 'Emotional crossroads',
    phase: 'loss-change',
    excerpt:
      'The problem was that my past feelings were still alive somewhere. Old memories on one side, a new possibility on the other, and me in the middle. I admitted it to myself: "I don\'t know who I love."',
    paragraphs: [
      'Problem ye thi ke meri past feelings bhi kahin na kahin zinda thin. Ek taraf purani memories. Doosri taraf ek nayi possibility. Aur beech mein main.',
      'Kuch logon ko dono sides ki baaton ka idea bhi hone laga. Ek doosre se private baatein share ho jati thin. Aur main aur zyada confuse hota gaya.',
      'Maine khud accept kiya: "Mujhe khud nahi pata main kis se love karta hoon." Lekin ek cheez clear thi: mera emotional world ab pehle jaisa simple nahi raha tha.',
    ],
  },
  {
    slug: 'part-13-manzil-se-kuch-kilometer-pehle',
    part: 13,
    title: 'Manzil Se Kuch Kilometer Pehle',
    subtitle: 'The U-turn that changed everything — so close to where I wanted to be',
    period: 'Emotional turning point',
    phase: 'loss-change',
    excerpt:
      'A family event, a sentence from my mother that made my heart race, a bike ride toward the person I cared about — and then a phone call. A death in the family. "Go back." I was only kilometers away. That U-turn wasn\'t just a bike turning around.',
    paragraphs: [
      'Phir meri story ka woh scene aaya jise main aaj bhi apne emotional turning points mein count karta hoon. Ek din family ke saath ek event par jana tha. Meri mother ne kaha ke agar raat ho gayi to hum relatives ke ghar chale jayenge.',
      'Mere liye bas ye sentence kaafi tha. Main excited ho gaya. Kyun? Kyun ke shayad usay dekh sakta tha. Main mother ke saath bike par nikla. Event attend hua. Sab khatam hua.',
      'Ab meri nazar sirf aglay destination par thi. Main us ghar ki taraf jana chahta tha jahan meri feelings mera intezar kar rahi thin. Lekin exactly us waqt ek phone call aayi. Ek aur loss ki khabar.',
      'Mother ne kaha: "Wapas chalo." Maine convince karne ki koshish ki. Kaha ke abhi relatives ke ghar chalte hain, subah wapas aa jayenge. Lekin meri nahi chali.',
      'Aur phir... U-TURN. Main jis taraf apni manzil samajh kar ja raha tha, usi road par wapas mud gaya. Sabse painful part? Us ghar ki doori sirf kuch kilometers thi. Manzil saamne thi. Lekin main wahan nahi pohunch saka.',
      'Us raat mere andar kuch aur change hua. Mujhe laga ke main us person ko sirf miss nahi karta. Main uske saath future imagine karne laga hoon. Dreams. Companionship. Ek beautiful life.',
      'Aur isi liye woh U-turn mere liye sirf bike ka U-turn nahi tha. Woh meri feelings ka U-turn tha. Us din ke baad longing aur gehri ho gayi.',
    ],
  },
  {
    slug: 'part-14-the-boy-who-keeps-looking-forward',
    part: 14,
    title: 'The Boy Who Keeps Looking Forward',
    subtitle: 'Looking back and seeing the thread that connects it all',
    period: 'Reflection',
    phase: 'forward',
    excerpt:
      'Looking at my journey today, I see a strange connection. Raising chickens, winning positions, working at medical stores, falling for medicine, then turning toward technology, AI, SEO. At every stage, one thing repeated: I wanted to do something. The journey never stopped.',
    paragraphs: [
      'Aaj main apni journey ko dekhta hoon to mujhe ek strange connection nazar aata hai. Bachpan mein chickens palta tha. Phir school mein positions hasil ki. Phir medical stores par kaam seekha. Phir medicine aur healthcare mein interest bana.',
      'Phir technology, websites, AI, SEO aur online business ki taraf attraction hua. Har stage par ek hi cheez repeat hoti rahi: main kuch karna chahta tha.',
      'Kabhi mujhe pata tha ke kya karna hai. Kabhi nahi pata tha. Kabhi main successful hua. Kabhi fail. Kabhi kisi ko paane ki koshish ki. Kabhi kisi ko bhoolne ki. Kabhi kisi loss ne tod diya. Kabhi kisi naye dream ne dobara khara kar diya.',
      'Lekin journey rukki nahi.',
    ],
  },
  {
    slug: 'part-15-abhi-kahani-baqi-hai',
    part: 15,
    title: 'Abhi Kahani Baqi Hai',
    subtitle: 'The story isn\'t over — this is only the part written so far',
    period: 'Now & next',
    phase: 'forward',
    excerpt:
      'Today I\'m still young. The final chapter of my life\'s book hasn\'t been written. There\'s education, a career to build, something to create in technology and AI. And one day, I want to look back and say: that small boy from Ahmadpur East never gave up.',
    paragraphs: [
      'Aaj main abhi young hoon. Meri life ki book ka final chapter likha hi nahi gaya. Abhi education hai. Career banana hai. Technology aur AI mein kuch apna karna hai. Financially strong hona hai. Apni identity build karni hai.',
      'Aur ek din aisi zindagi create karni hai jahan peeche mud kar dekhun to keh sakun: "Haan... woh chhota sa larka jo Ahmadpur East mein kuch bara karne ke sapne dekhta tha, usne haar nahi maani."',
      'Meri kahani mein love hai. Loss hai. Family hai. School hai. Comedy hai. Confusion hai. Ambition hai. Aur bohat saare unanswered questions bhi.',
      'Lekin sabse important baat: This is not the end of the story. This is only the part that has been written so far.',
      '— Farhan',
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  status: 'placeholder' | 'coming-soon' | 'live';
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Farhan Deals',
    category: 'Online Business',
    description: 'My online store — products, deals, and the day-to-day work of running an e-commerce brand from Ahmadpur East.',
    status: 'live',
    link: 'https://farhandeals.store',
  },
  {
    title: 'Hack AI',
    category: 'AI',
    description: 'An AI web app I built and shipped specially for Ethical Hacking — an experiment in putting language models to practical, hands-on use.',
    status: 'live',
    link: 'https://hackarai.streamlit.app',
  },
  {
    title: 'Nexus AI',
    category: 'AI',
    description: 'A web application built around AI features, focused on a clean interface and a fast, useful experience.',
    status: 'live',
    link: 'https://nexus-ai-web-applica-575m.bolt.host',
  },
  {
    title: 'Movie Hub',
    category: 'Web App',
    description: 'A movie browsing and discovery app currently in the works. It will be linked here once it is live.',
    status: 'coming-soon',
  },
];

// ── JSON-LD Person schema (injected on home page) ──
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Farhan Balouch',
  url: 'https://farhanbalouch.com',
  description:
    'Originally from Ahmadpur East, Pakistan. Works in AI, SEO, and online business. His story spans a small-town childhood, a dream of medicine, loss, and a pivot to technology.',
  knowsAbout: ['Artificial Intelligence', 'SEO', 'Technology', 'Online Business', 'Web Development'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmadpur East',
    addressCountry: 'PK',
  },
};
