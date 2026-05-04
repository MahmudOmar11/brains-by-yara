/**
 * Brains by Yara — i18n system
 * Languages: Arabic (ar) [default], Hebrew (he), English (en)
 *
 * Usage: add data-i18n="key" to any element with text content.
 * For attributes (placeholder, alt, etc.) use data-i18n-attr="attr1:key1;attr2:key2".
 */

const TRANSLATIONS = {
  // ===== NAV =====
  "nav.home":        { ar: "الرئيسية",       he: "ראשי",          en: "Home" },
  "nav.lectures":    { ar: "المحاضرات",      he: "הרצאות",        en: "Lectures" },
  "nav.gallery":     { ar: "معرض الصور",     he: "גלריה",         en: "Gallery" },
  "nav.book":        { ar: "احجزوا محاضرة",  he: "הזמינו הרצאה",   en: "Book a Lecture" },
  "nav.menu":        { ar: "القائمة",         he: "תפריט",         en: "Menu" },
  "nav.back":        { ar: "العودة للرئيسية", he: "חזרה לראשי",     en: "Back to Home" },

  // ===== HERO =====
  "hero.name":       { ar: "د. يارا إغباريّة", he: "ד\"ר יארה אגבאריה", en: "Dr. Yara Agbaria" },
  "hero.bio.1":      {
    ar: "أنا باحثة في علوم الدماغ حاصلة على درجة الدكتوراه من جامعة تل أبيب. أحمل أيضًا درجة البكالوريوس في علم النفس، والبيولوجيا، وعلوم الدماغ.",
    he: "אני חוקרת מוח עם דוקטוקט במדעי המוח מאוניברסיטת תל אביב, ובעלת תואר ראשון בפסיכולוגיה, ביולוגיה ומדעי המוח.",
    en: "I'm a neuroscientist with a PhD from Tel Aviv University. I also hold a Bachelor's degree in Psychology, Biology, and Neuroscience."
  },
  "hero.bio.2":      {
    ar: "أعمل حاليًا كباحثة ومحاضرة في جامعة تل أبيب ومستشفى إيخيلوف، حيث أدرس تأثير المواد المُغيِّرة للوعي على الدماغ في الاكتئاب والألم المزمن.",
    he: "כיום אני חוקרת ומרצה באוניברסיטת תל אביב ובבית החולים איכילוב, ומתמקדת בחקר ההשפעה של חומרים משני-תודעה על המוח בדיכאון ובכאב כרוני.",
    en: "I currently work as a researcher and lecturer at Tel Aviv University and Ichilov Hospital, studying how consciousness-altering substances affect the brain in depression and chronic pain."
  },
  "hero.bio.3":      {
    ar: "إلى جانب عملي الأكاديمي، أؤمن بأهمية تبسيط العلم وجعله متاحًا للجمهور العام. لذلك أنشأت صفحة Brains by Yara على إنستغرام، حيث أشارك محتوى علميًا مبسّطًا حول الدماغ والسلوك باللغة العربية. كما أقدّم محاضرات علمية للجمهور العام، تهدف إلى نقل المعرفة الحديثة في علم الأعصاب بطريقة واضحة وممتعة.",
    he: "לצד עבודתי האקדמית, אני מאמינה בחשיבות הנגשת המדע לקהל הרחב. לכן הקמתי את עמוד האינסטגרם Brains by Yara, שבו אני משתפת תכנים מדעיים נגישים על המוח וההתנהגות בערבית. בנוסף, אני מעבירה הרצאות מדעיות לקהל הרחב במטרה להעביר את הידע העדכני במדעי המוח באופן קליל ומעניין.",
    en: "Alongside my academic work, I am committed to making science accessible to wider audiences. Through my Instagram platform, Brains by Yara, I share Arabic scientific content about the brain, behavior, and mental health. I also deliver public talks that translate neuroscience into clear, engaging, and relatable ideas for diverse audiences."

  },
  "hero.btn.lectures": { ar: "تصفّحوا المحاضرات", he: "עיינו בהרצאות",  en: "Browse Lectures" },
  "hero.btn.contact":  { ar: "تواصلوا معي",      he: "צרו איתי קשר",   en: "Get in Touch" },
  "hero.scroll":       { ar: "اكتشفوا المزيد",    he: "גלו עוד",       en: "Discover More" },

  // ===== LECTURES SECTION =====
  "lectures.title":     { ar: "محاضرات شيّقة حول الدماغ", he: "הרצאות מרתקות על המוח", en: "Engaging Lectures About the Brain" },
  "lectures.subtitle":  { ar: "مجموعة متنوعة من المحاضرات مصممة لتناسب جمهورًا واسعًا من مختلف الأعمار والخلفيات",
                          he: "מגוון רחב של הרצאות המותאמות לקהלים שונים מכל הגילים והרקעים",
                          en: "A diverse collection of lectures tailored to wide audiences of all ages and backgrounds" },
  "lectures.note":      { ar: "المحاضرات متاحة للمجموعات والأفراد — تواصلوا معنا لمناقشة التفاصيل وإرسال عرض سعر",
                          he: "ההרצאות מתאימות לקבוצות וליחידים — צרו קשר לתיאום פרטים וקבלת הצעת מחיר",
                          en: "Lectures are available for groups and individuals — get in touch to discuss details and receive a quote" },

  // ===== LECTURE 1 — Brain Rot =====
  "l1.title":    { ar: "تعفّن الدماغ",  he: "ריקבון מוחי",    en: "Brain Rot" },
  "l1.subtitle": { ar: "كيف تتدهور صحة دماغنا بدون أن نشعر؟",
                    he: "איך בריאות המוח שלנו מתדרדרת מבלי שנרגיש?",
                    en: "How our brain health quietly deteriorates" },
  "l1.desc":     { ar: "نعيش في عالمٍ يضخّ محفزات لا تنتهي؛ والتحفيز المستمر يضعف التركيز والذاكرة ويخلّ بنظام المكافأة. محاضرة عن «تعفّن الدماغ»، الملل، المرونة العصبية، شيخوخة الدماغ، والدوبامين — وخطوات عملية لإعادة التوازن.",
                    he: "אנו חיים בעולם רווי בגירויים בלתי פוסקים. הגירויים המתמידים פוגעים בריכוז ובזיכרון, ומשבשים את פעילות מערכת התגמול. בהרצאה זו נדבר על נושאים כגון: \"ריקבון מוחי\", פלסטיות עצבית, והזדקנות מוחית.",
                    en: "We live in a world that pumps endless stimuli - eroding focus, memory, and the reward system. A talk on \ brain rot,\ neuroplasticity, and brain aging; with practical steps to restore balance." },

  // ===== LECTURE 2 — Male vs Female =====
  "l2.title":    { ar: "دماغ الرجل والمرأة",  he: "המוח הגברי והנשי",  en: "The Male and Female Brain" },
  "l2.subtitle": { ar: "فروق حقيقية أم صور نمطية؟",  he: "הבדלים אמיתיים או סטריאוטיפים?",  en: "Real differences or stereotypes?" },
  "l2.desc":     { ar: "بيولوجيا أم نفس أم تربية؟ نافذة على الوصلات والهرمونات ونشاط الدماغ — ثم السؤال المحوري: فروق حقيقية أم أنماط ثقافية رسخت في وعينا؟",
                    he: "ביולוגיה, פסיכולוגיה או חינוך? הצצה לקשרים העצביים, להורמונים ולפעילות המוחית — ואחר כך השאלה המרכזית: האם ההבדלים אמיתיים או דפוסים תרבותיים שהתבססו בתודעתנו?",
                    en: "Biology, psychology, or upbringing? A window into neural connections, hormones and brain activity, while answering the core question: are these real differences, or cultural patterns embedded in our minds?" },

  // ===== LECTURE 3 — Violent Brain =====
  "l3.title":    { ar: "من الطفولة إلى الجريمة",  he: "מבט לתוך המוח האלים",  en: "From Childhood to Crime" },
  "l3.subtitle": { ar: "كيف يتشكّل الدماغ العنيف؟",  he: "איך מתעצב המוח האלים?",  en: "How a violent brain takes shape" },
  "l3.desc":     { ar: "العنف ليس مجرد «قرار» فقط: تفاعل مستمر بين البيئة والبيولوجيا. وما تقوله الأبحاث عن الفروق في بنية ونشاط الدماغ بين سياقات مختلفة.",
                    he: "אלימות איננה רק \"החלטה\" — היא אינטראקציה מתמשכת בין סביבה לביולוגיה. מה המחקר אומר על הבדלים במבנה המוח ובפעילותו אצל אנשים עם התנהגות אלימה?",
                    en: "Violence isn't just a \"decision\" — it's a continuous interaction between environment and biology. And what research says about differences in brain structure and activity across contexts." },

  // ===== LECTURE 4 — Consciousness =====
  "l4.title":    { ar: "مشكلة الوعي الكبيرة",  he: "בעיית התודעה הגדולה",  en: "The Hard Problem of Consciousness" },
  "l4.subtitle": { ar: "كيف يمكن لكتلة من الخلايا أن تنتج تجربة واعية ومتكاملة؟",
                    he: "איך גוש של תאים מייצר חוויה תודעתית שלמה?",
                    en: "How can a mass of cells produce conscious experience?" },
  "l4.desc":     { ar: "علم الأعصاب والفلسفة: من النشاط العصبي إلى التجربة الواعية — وما الذي ما زال لغزًا.",
                    he: "הפילוסופיה של מדעי המוח: מהפעילות העצבית אל החוויה המודעת — ומה עדיין נשאר בגדר חידה.",
                    en: "Neuroscience meets philosophy — from neural activity to conscious experience, and what remains a mystery." },

  // ===== LECTURE 5 — Free Will =====
  "l5.title":    { ar: "هل نحن فعلًا أحرار في اتخاذ القرارات؟",  he: "האם אנו באמת חופשיים בקבלת ההחלטות?",  en: "Do We Truly Have Free Will in Our Decisions?" },
  "l5.subtitle": { ar: "دور اللاوعي في قراراتنا",  he: "תפקיד הלא-מודע בהחלטות שלנו",  en: "The role of the unconscious in our choices" },
  "l5.desc":     { ar: "اللاوعي والعاطفة والخبرة يوجّهان الاختيارات؛ والدراسات العصبية تساعدنا على صياغة سؤال الحرية بشكل أدق.",
                    he: "הלא-מודע, רגשות, וניסיון החיים, מנחים את הבחירות שלנו; ומחקרי מוח רבים עוזרים לנסח מחדש את שאלת הרצון הופשי.",
                    en: "The unconscious, emotion, and experience guide our choices — and brain research helps us reframe the question of free will." },

  // ===== LECTURE 6 — Adolescent =====
  "l6.title":    { ar: "لغز المراهقة",  he: "חידת גיל ההתבגרות",  en: "The Adolescent Brain" },
  "l6.subtitle": { ar: "ماذا يقول علم الأعصاب عن دماغ المراهقين؟",
                    he: "מה אומר המדע על מוח המתבגר?",
                    en: "What neuroscience tells us about teenage brains" },
  "l6.desc":     { ar: "شبكات تنضج بوتيرة مختلفة: اندفاع، تجربة، أقران — وقراءة علمية تساعد الأهل والمربين على فهم المراهقة لا كـ«تمرد» فقط.",
                    he: "רשתות עצביות שמתבגרות בקצבים שונים, אימפולסיביות, ניסיון חיים, והשפעת הסביבה, הם רק חלק מהגורמים המשפיעים על מוח המתבגר. קריאה מדעית שעוזרת להורים ולמחנכים להבין את גיל ההתבגרות מעבר ל\"מרדנות\".",
                    en: "Networks maturing at different rates, impulsivity, experimentation, peer influence ; and a scientific lens that helps parents and educators see adolescence as more than rebellion." },

  // ===== LECTURE 7 — Trauma =====
  "l7.title":    { ar: "كيف تغيّر الصدمة الدماغ؟",  he: "איך הטראומה משנה את המוח?",  en: "How Trauma Changes the Brain" },
  "l7.subtitle": { ar: "العلم وراء آثار التجارب المؤلمة",
                    he: "המדע שמאחורי השפעת חוויות טראומטיות",
                    en: "The science behind the lasting effects of painful experiences" },
  "l7.desc":     { ar: "بصمات نفسية وعصبية قد تدوم؛ وشبكات الذاكرة العاطفية والخوف والتوتر تفسّر لماذا يختلف الأثر بين الاشخاص .",
                    he: "טביעות נפשיות ועצביות, מאפייני אישיות, והשפעות סביבתיות, הם רק חלק מהגורמים המשפיעים על התפתחות הטראומה.",
                    en: "Psychological and neural fingerprints that can last — and how emotional-memory, fear, and stress networks explain why trauma affects people differently." },

  // ===== LECTURE 8 — Corporate =====
  "l8.title":    { ar: "علم الأعصاب لاتخاذ القرار",  he: "מדעי המוח של קבלת החלטות",  en: "Neuroscience of Decision-Making" },
  "l8.subtitle": { ar: "كيف يتخذ الدماغ قراراته في بيئات العمل المعقدة؟",
                    he: "איך המוח מקבל החלטות בסביבות עבודה מורכבות?",
                    en: "How the brain makes decisions in complex workplaces" },
  "l8.desc":     { ar: "ضغوط وعدم يقين وانحيازات إدراكية داخل المؤسسات — مع أدوات تطبيقية وأمثلة واقعية لتحسين جودة القرار.",
                    he: " לחצים, אי-ודאות והטיות קוגניטיביות, משפיעים על קבלת ההחלטות בתוך הארגונים. בהרצאה זו נציג כלים יישומיים ודוגמאות מהשטח לשיפור איכות קבלת ההחלטות בסביבת העבודה.",
                    en: "Pressure, uncertainty and cognitive biases inside organizations affect decision making. Applied tools and real-world examples for better decision quality." },

  // ===== TAGS / BUTTONS =====
  "tag.public":     { ar: "للجمهور العام",        he: "לקהל הרחב",         en: "For the General Public" },
  "tag.corporate":  { ar: "للشركات والمؤسسات",   he: "לארגונים וחברות",   en: "For Organizations" },
  "tag.corporate.long": { ar: "محاضرة موجّهة للشركات والمؤسسات وبيئات الأعمال",
                           he: "הרצאה לארגונים, חברות וסביבות עסקיות",
                           en: "A lecture for organizations, companies and business environments" },
  "btn.book":       { ar: "احجزوا المحاضرة",     he: "הזמינו הרצאה",      en: "Book This Lecture" },
  "btn.details":    { ar: "التفاصيل",             he: "פרטים",             en: "Details" },

  // ===== GALLERY =====
  "gallery.title":   { ar: "معرض الصور", he: "גלריה", en: "Gallery" },
  "gallery.yara":    { ar: "د. يارا إغباريّة", he: "ד\"ר יארה אגבאריה", en: "Dr. Yara Agbaria" },
  "gallery.lecture": { ar: "محاضرة", he: "הרצאה", en: "Lecture" },
  "gallery.event":   { ar: "فعالية", he: "אירוע", en: "Event" },
  "gallery.workshop":{ ar: "ورشة عمل", he: "סדנה", en: "Workshop" },
  "gallery.audience":{ ar: "محاضرة أمام جمهور", he: "הרצאה מול קהל", en: "Public Lecture" },
  "gallery.community": { ar: "فعالية مجتمعية", he: "אירוע קהילתי", en: "Community Event" },

  // ===== CONTACT =====
  "contact.title":     { ar: "هل ترغبون بحجز محاضرة؟",
                          he: "מעוניינים להזמין הרצאה?",
                          en: "Want to book a lecture?" },
  "contact.subtitle":  { ar: "أرسلوا تفاصيل الفعالية أو المحاضرة المطلوبة وسأتواصل معكم في أقرب وقت لمناقشة التفاصيل وإرسال عرض سعر",
                          he: "שלחו את פרטי האירוע או ההרצאה וניצור איתכם קשר בהקדם לתיאום פרטים וקבלת הצעת מחיר",
                          en: "Send details of your event or lecture and I'll be in touch shortly to coordinate and provide a quote" },
  "form.name":         { ar: "الاسم الكامل",       he: "שם מלא",           en: "Full Name" },
  "form.email":        { ar: "البريد الإلكتروني",  he: "דוא\"ל",            en: "Email" },
  "form.phone":        { ar: "رقم الهاتف",         he: "מספר טלפון",       en: "Phone Number" },
  "form.lecture":      { ar: "اختاروا المحاضرة",   he: "בחרו הרצאה",       en: "Select a Lecture" },
  "form.other.option": { ar: "أخرى — استفسار عام", he: "אחר — פנייה כללית",  en: "Other — General Inquiry" },
  "form.other.placeholder": { ar: "أخبرونا عن موضوع المحاضرة أو الاستفسار المطلوب",
                                he: "ספרו לנו על נושא ההרצאה או הפנייה",
                                en: "Tell us about the lecture topic or your inquiry" },
  "form.details":      { ar: "أخبرونا المزيد عن الفعالية: التاريخ، عدد الحضور، المكان...",
                          he: "ספרו לנו עוד על האירוע: תאריך, מספר משתתפים, מיקום...",
                          en: "Tell us more about the event: date, audience size, location..." },
  "form.submit":       { ar: "أرسلوا طلب الحجز", he: "שלחו את הבקשה", en: "Send Booking Request" },

  // ===== FOOTER =====
  "footer.copy":   { ar: "© 2025 Brains by Yara — جميع الحقوق محفوظة",
                     he: "© 2025 Brains by Yara — כל הזכויות שמורות",
                     en: "© 2025 Brains by Yara — All rights reserved" },

  // ===== SUCCESS PAGE =====
  "success.title":   { ar: "تم إرسال طلبكم بنجاح", he: "הבקשה נשלחה בהצלחה",  en: "Request sent successfully" },
  "success.body":    { ar: "شكرًا لتواصلكم! سنتواصل معكم في أقرب وقت لمناقشة التفاصيل وإرسال عرض سعر",
                        he: "תודה שפניתם! נחזור אליכם בהקדם לתיאום פרטים ולקבלת הצעת מחיר.",
                        en: "Thank you for reaching out! We'll get back to you shortly to coordinate details and send a quote." },
  "success.back":    { ar: "العودة للصفحة الرئيسية", he: "חזרה לעמוד הראשי", en: "Back to Home" },

  // ===== LECTURE PAGE TEMPLATES =====
  "lp.audience.title":   { ar: "لمن هذه المحاضرة؟",
                            he: "למי מיועדת ההרצאה?",
                            en: "Who is this lecture for?" },
  "lp.topics.title":     { ar: "المواضيع الأساسية",
                            he: "נושאים מרכזיים",
                            en: "Main Topics" },
  "lp.cta.title":        { ar: "هل ترغبون باستضافة هذه المحاضرة؟",
                            he: "מעוניינים להזמין את ההרצאה?",
                            en: "Want to host this lecture?" },
  "lp.cta.body":         { ar: "تواصلوا معنا لمناقشة التفاصيل وإرسال عرض سعر مخصص لفعاليتكم",
                            he: "צרו איתנו קשר לתיאום פרטים וקבלת הצעת מחיר מותאמת לאירוע שלכם.",
                            en: "Get in touch to discuss details and receive a custom quote for your event." },
  "lp.cta.btn":          { ar: "احجزوا الآن", he: "הזמינו עכשיו", en: "Book Now" },

  // ===== LECTURE-SPECIFIC AUDIENCE COPY (general) =====
  "lp.audience.public":  { ar: "هذه المحاضرة موجّهة للجمهور العام من مختلف الأعمار، ولكل من يهتم بفهم نفسه ودماغه بشكل أعمق.",
                            he: "ההרצאה מיועדת לקהל הרחב מכל הגילים, ולכל מי שמתעניין להבין את עצמו ואת מוחו לעומק.",
                            en: "This lecture is for the general public of all ages — anyone curious to understand themselves and their brain more deeply." },
  "lp.audience.corporate": { ar: "هذه المحاضرة موجّهة للمدراء والقياديين، وفرق الموارد البشرية، وأي بيئة عمل تسعى لتحسين جودة قراراتها.",
                              he: "ההרצאה מיועדת למנהלים, צוותי משאבי אנוש וכל סביבת עבודה השואפת לשפר את איכות ההחלטות שלה.",
                              en: "This lecture is for managers, leaders, HR teams, and any workplace striving to improve the quality of its decisions." },

  // ===== LECTURE PAGE TEMPLATE (shared headings) =====
  "lp.back":               { ar: "العودة للمحاضرات", he: "חזרה להרצאות",   en: "Back to Lectures" },
  "lp.overview.title":     { ar: "عن هذه المحاضرة", he: "על ההרצאה",      en: "About This Lecture" },
  "lp.detail.duration":    { ar: "المدة",            he: "משך",           en: "Duration" },
  "lp.detail.duration.val":{ ar: "60-90 دقيقة",     he: "60-90 דקות",    en: "60–90 minutes" },
  "lp.detail.format":      { ar: "الصيغة",          he: "פורמט",         en: "Format" },
  "lp.detail.format.val":  { ar: "محاضرة تفاعلية",  he: "הרצאה אינטראקטיבית", en: "Interactive lecture" },
  "lp.detail.audience":    { ar: "جمهور الهدف",     he: "קהל היעד",      en: "Target Audience" },
  "lp.topics.subtitle":    { ar: "المواضيع الرئيسية التي سيتم تناولها خلال المحاضرة",
                              he: "הנושאים המרכזיים שיועברו בהרצאה",
                              en: "The main topics covered in this lecture" },
  "lp.cta.host":           { ar: "هل ترغبون بحجز هذه المحاضرة؟",
                              he: "מעוניינים להזמין את ההרצאה?",
                              en: "Want to book this lecture?" },
  "lp.cta.host.body":      { ar: "هذه المحاضرة متاحة للحجز لفعاليات، مؤتمرات، مدارس، جامعات، ومؤسسات. تواصلوا معنا لتفاصيل أكثر.",
                              he: "ההרצאה זמינה להזמנות לאירועים, כנסים, בתי ספר, אוניברסיטאות וארגונים. צרו קשר לפרטים נוספים.",
                              en: "Available for events, conferences, schools, universities and organizations. Contact us for more details." },
  "lp.cta.book":           { ar: "احجزوا المحاضرة الآن", he: "הזמינו עכשיו", en: "Book This Lecture Now" },

  // ===== LECTURE 1 — Brain Rot — full page =====
  "l1.overview.1": { ar: "نعيش في عالمٍ يضخّ محفزات لا تنتهي — إشعارات، صور، أخبار، وأصوات تختطف انتباهنا كل ثانية. لكن هذا التحفيز المستمر لا يمرّ دون ثمن: دوائر التركيز والذاكرة في الدماغ تضعف، ونظام المكافأة يختلّ، فنفقد قدرتنا على الصبر، وعلى الاستمتاع بالهدوء والتفكير العميق.",
                     he: "אנו חיים בעולם של גירויים בלתי פוסקים — התראות, תמונות, חדשות, וקולות שחוטפים את תשומת לבנו בכל רגע נתון. אבל, הגירויים המתמשכים האלה גובים מחיר: מעגלי הריכוז והזיכרון במוח נחלשים, מערכת התגמול מתערערת, ואנחנו מאבדים את היכולת להתאזר בסבלנות, ליהנות מהשקט, ולחשוב לעומק.",
                     en: "We live in a world of relentless stimulation — notifications, images, news and sounds hijacking our attention every second. But constant stimulation comes at a cost: focus and memory circuits weaken, the reward system gets dysregulated, and we lose patience and the ability to enjoy quiet, deep thought." },
  "l1.overview.2": { ar: "في هذه المحاضرة سنتحدث عن «تعفّن الدماغ» كمفهوم عصبي معاصر — كيف يختنق دماغ الإنسان من فيضان المعلومات المحيطة بنا؟ هل الملل مُفيد للدماغ؟ ما هي المرونة العصبية وكيف يمكن تحفيزها؟ كيف يمكن تأخير شيخوخة الدماغ؟ وما هو الدوبامين، وكيف يرتبط بأبسط تفاصيل حياتنا دون أن نشعر؟",
                     he: "בהרצאה נדבר על \"ריקבון מוחי\" כמושג עכשווי — איך המוח האנושי מתמודד עם שטף המידע הסובב אותנו? האם השעמום מועיל למוח? מהי פלסטיות עצבית וכיצד אפשר לעודד אותה? איך אפשר לעכב הזדקנות מוחית? ומהו הדופמין, וכיצד הוא קשור לפרטים הקטנים ביותר בחיינו?",
                     en: "We'll discuss \"brain rot\" as a contemporary neural concept — how the human brain suffocates under information overload, whether boredom benefits the brain, what neuroplasticity is and how to stimulate it, how to slow brain aging, and how dopamine connects to the smallest details of our daily lives without our awareness." },
  "l1.overview.3": { ar: "وأخيرًا، كيف يمكننا تنظيف دماغنا وإعادة توازنه بخطوات عملية وعلمية بسيطة.",
                     he: "ולבסוף, כיצד נוכל ״לנקות״ את המוח שלנו ולהחזיר לו את האיזון בצעדים מעשיים ומדעיים פשוטים.",
                     en: "And finally — practical, evidence-based steps to clean and rebalance the brain." },
  "l1.t1.h": { ar: "فيضان المعلومات وتعفّن الدماغ", he: "שטף מידע וריקבון מוחי", en: "Information Overload and Brain Rot" },
  "l1.t1.b": { ar: "كيف يؤثر التحفيز غير المنقطع على دوائر التركيز والذاكرة ونظام المكافأة، وما الذي يعنيه «تعفّن الدماغ» في العلوم المعاصرة.",
                he: "איך גירוי בלתי פוסק משפיע על מעגלי הריכוז, הזיכרון ומערכת התגמול, ומה משמעותו של \"ריקבון מוחי\" במדע המודרני.",
                en: "How constant stimulation affects focus, memory and reward circuits — and what \"brain rot\" means in contemporary science." },
  "l1.t2.h": { ar: "الدوبامين، الملل، والمرونة العصبية", he: "דופמין, שעמום ופלסטיות עצבית", en: "Dopamine, Boredom & Neuroplasticity" },
  "l1.t2.b": { ar: "دور الدوبامين في حياتنا اليومية، فوائد الملل للدماغ، وكيف تُحفَّز المرونة العصبية ويُؤخَّر شيخوخة الدماغ.",
                he: "תפקיד הדופמין בחיי היומיום, יתרונות השעמום למוח, וכיצד מעודדים פלסטיות עצבית ומעכבים הזדקנות מוחית.",
                en: "Dopamine in daily life, the brain benefits of boredom, and how to boost neuroplasticity and slow brain aging." },
  "l1.t3.h": { ar: "من الإفراط الرقمي إلى التوازن", he: "מהצפה דיגיטלית לאיזון", en: "From Digital Excess to Balance" },
  "l1.t3.b": { ar: "قراءة علمية لما يحدث عندما يختنق الدماغ من المحفزات، ولماذا نحتاج إلى هدوء وتفكير عميق.",
                he: " מה קורה כשהמוח מוצף מגירויים, ומדוע אנו זקוקים לשקט מפעם לפעם.",
                en: "A scientific look at what happens when the brain is overwhelmed — and why we need quiet and depth." },
  "l1.t4.h": { ar: "خطوات عملية لإعادة التوازن", he: "צעדים מעשיים להחזרת האיזון", en: "Practical Steps to Restore Balance" },
  "l1.t4.b": { ar: "أدوات بسيطة ومبنية على الأدلة لتنظيف الدماغ من الإفراط واستعادة التركيز والهدوء.",
                he: "כלים פשוטים ומבוססי-מדע ״לניקוי״ המוח והחזרת האיזון.",
                en: "Simple, evidence-based tools to declutter the brain and restore focus and calm." },
  "l1.audience": { ar: "للجمهور العام من مختلف الأعمار — ولمَن يريدون فهم تأثير الإفراط في المحفزات الرقمية على الدماغ، وبناء عادات أوضح للتركيز والهدوء والتفكير العميق.",
                    he: "לקהל הרחב מכל הגילים — ולכל מי שרוצה להבין את השפעת עודף הגירוי הדיגיטלי על המוח ולבנות הרגלים בריאים לריכוז, שלווה וחשיבה לעומק.",
                    en: "For the general public of all ages — and anyone wanting to understand the impact of digital overload on the brain and build healthier habits for focus, calm and deep thinking." },

  // ===== LECTURE 2 — Male/Female =====
  "l2.overview.1": { ar: "منذ آلاف السنين، حاول الإنسان أن يفهم: لماذا يفكر الرجال والنساء أحيانًا بطرق مختلفة، ولماذا قد يتصرفون بشكل مختلف؟ هل يعود ذلك إلى عوامل بيولوجية؟ أم نفسية؟ أم أن للتربية والمجتمع الدور الأكبر في تشكيل هذه الفروق؟",
                     he: "במשך אלפי שנים ניסה האדם להבין: מדוע גברים ונשים חושבים לעיתים בצורה שונה, ומדוע הם עשויים להתנהג שונה? האם זה נובע מגורמים ביולוגיים? פסיכולוגיים? או שלחינוך ולחברה יש תפקיד גדול יותר בעיצוב ההבדלים?",
                     en: "For thousands of years humans have asked: why do men and women sometimes think and act differently? Is it biology? Psychology? Or are upbringing and society the bigger factors shaping these differences?" },
  "l2.overview.2": { ar: "في هذه المحاضرة سنفتح نافذة على الدماغ: على الوصلات العصبية، والهرمونات، وأنماط النشاط الدماغي التي قد تساعدنا على فهم لماذا تظهر هذه الاختلافات أحيانًا، ولماذا تختفي في أحيان أخرى.",
                     he: "בהרצאה נפתח חלון אל המוח: אל הקשרים העצביים, ההורמונים ודפוסי הפעילות המוחית שעשויים לעזור לנו להבין מדוע הבדלים אלה מופיעים לעיתים, ומדוע הם נעלמים לעיתים אחרות.",
                     en: "We'll open a window into the brain — into neural connections, hormones and patterns of activity that may help explain why these differences appear sometimes and disappear at others." },
  "l2.overview.3": { ar: "لكن السؤال الأهم الذي سنحاول الإجابة عنه هو: هل الفوارق بين دماغ الرجل والمرأة حقيقية بالفعل، أم أنها أنماط ثقافية ترسّخت في وعينا عبر الزمن؟",
                     he: "השאלה החשובה ביותר שננסה לענות עליה: האם ההבדלים בין מוח הגבר ומוח האישה אמיתיים, או שמדובר בדפוסים תרבותיים שהשתרשו בתודעתנו לאורך הזמן?",
                     en: "But the central question: are the differences between male and female brains truly real — or cultural patterns embedded in our minds over time?" },
  "l2.t1.h": { ar: "البيولوجيا والهرمونات", he: "ביולוגיה והורמונים", en: "Biology and Hormones" },
  "l2.t1.b": { ar: "كيف تؤثر الهرمونات والوصلات العصبية على نمط التفكير والسلوك بين الجنسين.",
                he: "כיצד הורמונים וקשרים עצביים משפיעים על דפוסי החשיבה וההתנהגות.",
                en: "How hormones and neural connections shape thinking and behavior across sexes." },
  "l2.t2.h": { ar: "أنماط النشاط الدماغي", he: "דפוסי פעילות מוחית", en: "Patterns of Brain Activity" },
  "l2.t2.b": { ar: "ما الذي تكشفه صور الدماغ عن الاختلافات والتشابهات بين دماغ الرجل والمرأة.",
                he: "מה מגלים בסריקות המוחיות על ההבדל והדמיון בין מוח גברי למוח נשי.",
                en: "What brain imaging reveals about differences — and similarities — between male and female brains." },
  "l2.t3.h": { ar: "التربية والمجتمع", he: "חינוך וחברה", en: "Upbringing and Society" },
  "l2.t3.b": { ar: "كيف تساهم البيئة الاجتماعية والثقافية في تشكيل ما نظنه «اختلافات بيولوجية».",
                he: "כיצד הסביבה החברתית והתרבותית מעצבת את מה שאנו תופסים כ\"הבדלים ביולוגיים\".",
                en: "How social and cultural environments shape what we perceive as \"biological\" differences." },
  "l2.t4.h": { ar: "حقيقة أم صورة نمطية؟", he: "אמת או סטריאוטיפ?", en: "Truth or Stereotype?" },
  "l2.t4.b": { ar: "السؤال الأهم: متى تكون الفروق حقيقية، ومتى تكون مجرد افتراضات ترسّخت في وعينا؟",
                he: "השאלה החשובה: מתי ההבדלים אמיתיים, ומתי הם רק הנחות שהתבססו בתודעה?",
                en: "The key question: when are differences real — and when are they just assumptions embedded in our consciousness?" },
  "l2.audience": { ar: "للجمهور العام، ولكل من يهتم بفهم الفروق بين الجنسين من منظور علمي ومجتمعي.",
                    he: "לקהל הרחב, ולכל מי שמתעניין להבין את ההבדלים בין המינים מנקודת מבט מדעית וחברתית.",
                    en: "For the general public — anyone interested in understanding sex differences from a scientific and societal perspective." },

  // ===== LECTURE 3 — Violent Brain =====
  "l3.overview.1": { ar: "تشهد مجتمعاتنا ارتفاعًا مقلقًا في معدلات العنف والجريمة. غالبًا ما يُنظر إلى العنف على أنه مجرد قرار أخلاقي أو خيار فردي، لكن علم الأعصاب الحديث يشير إلى أن الصورة أكثر تعقيدًا. فالسلوك العنيف يتشكّل نتيجة تفاعل مستمر بين العوامل البيئية والاجتماعية وبين العوامل البيولوجية والعصبية التي تؤثر في تطور الدماغ ووظيفته.",
                     he: "החברה שלנו חווה עלייה מדאיגה בשיעורי האלימות והפשיעה. האלימות נתפסת לעיתים קרובות כהחלטה מוסרית או כבחירה אישית, אך מדעי המוח המודרניים מצביעים על תמונה מורכבת יותר. ההתנהגות האלימה מתעצבת כתוצאה מאינטראקציה מתמשכת בין גורמים סביבתיים וחברתיים לבין גורמים ביולוגיים ועצביים המשפיעים על התפתחות המוח ותפקודו.",
                     en: "Our societies face troubling rises in violence and crime. Violence is often viewed as a moral choice or individual decision — but modern neuroscience reveals a more complex picture. Violent behavior emerges from an ongoing interaction between environmental and social factors and the biological and neural factors shaping brain development and function." },
  "l3.overview.2": { ar: "في هذه المحاضرة سنحاول فهم كيف يمكن لهذه العوامل المختلفة أن تسهم في تشكيل السلوك العنيف، ولماذا قد يكون بعض الأفراد أكثر عرضة للسلوك العنيف من غيرهم. كما سنتناول ما تقوله الأبحاث العصبية حول الفروق في بنية ونشاط الدماغ بين الأشخاص ذوي السلوك العنيف وغير العنيفين، خصوصًا في المناطق المرتبطة بتنظيم الانفعالات، ضبط الاندفاع، واتخاذ القرار.",
                     he: "בהרצאה ננסה להבין כיצד גורמים שונים אלה תורמים לעיצוב התנהגות אלימה ומדוע אנשים מסוימים נוטים יותר מאחרים להתנהגות כזו. נתייחס גם לממצאי המחקרים המצביעים על הבדלים במבנה ובפעילות המוח של אנשים בעלי התנהגות אלימה, במיוחד באזורים הקשורים לוויסות רגשי, שליטה בדחפים וקבלת החלטות.",
                     en: "We'll explore how these different factors contribute to shaping violent behavior — and why some individuals are more prone to violence than others. We'll also examine what neural research says about differences in brain structure and activity between violent and non-violent individuals, especially in regions linked to emotion regulation, impulse control and decision-making." },
  "l3.t1.h": { ar: "الطفولة والبيئة", he: "ילדות וסביבה", en: "Childhood and Environment" },
  "l3.t1.b": { ar: "كيف تترك التجارب المبكرة بصمات عميقة على دماغ الطفل وتؤثر على سلوكه لاحقًا.",
                he: "כיצד חוויות מוקדמות מותירות חותם עמוק על מוח הילד ומשפיעות על התנהגותו בהמשך.",
                en: "How early experiences leave deep imprints on a child's brain and shape later behavior." },
  "l3.t2.h": { ar: "البيولوجيا العصبية للعنف", he: "הביולוגיה העצבית של אלימות", en: "Neurobiology of Violence" },
  "l3.t2.b": { ar: "ما الذي تكشفه الأبحاث عن تركيب ووظيفة الدماغ في حالات السلوك العنيف.",
                he: "מה חושף המחקר על מבנה ותפקוד המוח במצבים של התנהגות אלימה.",
                en: "What research reveals about brain structure and function in violent behavior." },
  "l3.t3.h": { ar: "تنظيم الانفعالات وضبط الاندفاع", he: "ויסות רגשי ושליטה בדחפים", en: "Emotion Regulation and Impulse Control" },
  "l3.t3.b": { ar: "دور المناطق الدماغية المسؤولة عن التحكم في المشاعر واتخاذ القرار.",
                he: "תפקיד אזורי המוח האחראים לוויסות רגשי וקבלת החלטות.",
                en: "The role of brain regions responsible for emotion regulation and decision-making." },
  "l3.t4.h": { ar: "الوقاية والتدخل المبكر", he: "מניעה והתערבות מוקדמת", en: "Prevention and Early Intervention" },
  "l3.t4.b": { ar: "كيف يمكن لفهم الدماغ أن يُسهم في تطوير برامج للوقاية من العنف.",
                he: "כיצד הבנת המוח עשויה לסייע בפיתוח תוכניות למניעת אלימות.",
                en: "How understanding the brain can help develop violence-prevention programs." },
  "l3.audience": { ar: "للمعلمين، الأهالي، والعاملين في المجالين الاجتماعي والتربوي، ولكل من يهتم بفهم جذور العنف من منظور علمي.",
                    he: "למחנכים, הורים ועובדי המגזר החברתי והחינוכי — ולכל מי שמעוניין להבין את שורשי האלימות מנקודת מבט מדעית.",
                    en: "For educators, parents, social and educational professionals — and anyone curious to understand the roots of violence from a scientific perspective." },

  // ===== LECTURE 4 — Consciousness =====
  "l4.overview.1": { ar: "يعد الوعي أحد أعقد الأسئلة التي واجهها العلم والفلسفة عبر التاريخ. فكيف يمكن لكتلة من الخلايا العصبية داخل الدماغ أن تنتج تجربة واعية متكاملة — الإحساس بالذات، والأفكار، والمشاعر، والإدراك للعالم من حولنا؟",
                     he: "שאלת התודעה היא אחת השאלות המורכבות ביותר שהעסיקו את המדע והפילוסופיה לאורך ההיסטוריה. כיצד גוש של תאי עצב במוח מסוגל לייצר חוויה תודעתית שלמה — תחושת העצמי, מחשבות מורכבות, רגשות, ותפיסת העולם מסביבנו?",
                     en: "Consciousness is one of the most complex questions science and philosophy have ever faced. How can a mass of neurons inside the brain produce a unified conscious experience — a sense of self, thoughts, emotions and perception of the world?" },
  "l4.overview.2": { ar: "في هذه المحاضرة سنستكشف ما يقوله علم الأعصاب الحديث حول أصل الوعي في الدماغ، وكيف تحاول النظريات العلمية تفسير العلاقة بين النشاط العصبي والتجربة الواعية.",
                     he: "בהרצאה נחקור מה אומרים מדעי המוח המודרניים על מקורה של התודעה, וכיצד תיאוריות מדעיות מנסות להסביר את הקשר בין פעילות עצבית לחוויה תודעתית.",
                     en: "We'll explore what modern neuroscience says about the origin of consciousness, and how scientific theories try to explain the link between neural activity and conscious experience." },
  "l4.overview.3": { ar: "الهدف من هذه المحاضرة هو فتح نافذة على أحد أكبر الأسئلة العلمية والفلسفية: كيف يمكن للنشاط الكهربائي في الدماغ أن يتحول إلى تجربة إنسانية واعية؟",
                     he: "מטרת ההרצאה היא לפתוח חלון לאחת השאלות הגדולות ביותר במדע ובפילוסופיה: כיצד חומר משפיע על רוח?",
                     en: "The goal: a window into one of the biggest questions in science and philosophy — how electrical brain activity becomes conscious human experience." },
  "l4.t1.h": { ar: "ما هو الوعي؟", he: "מהי תודעה?", en: "What Is Consciousness?" },
  "l4.t1.b": { ar: "تعريفات علمية وفلسفية للوعي ولماذا يعد هذا السؤال «المشكلة الكبيرة».",
                he: "הגדרות מדעיות ופילוסופיות של תודעה\.",
                en: "Scientific and philosophical definitions — and why this is called \"the hard problem.\"" },
  "l4.t2.h": { ar: "نظريات علم الأعصاب", he: "תיאוריות במדע המוח", en: "Neuroscience Theories" },
  "l4.t2.b": { ar: "أبرز النظريات العصبية الحديثة لتفسير الوعي والنشاط الدماغي.",
                he: " התיאוריות המוחיות המובילות בתחום.",
                en: "Leading modern neural theories explaining consciousness and brain activity." },
  "l4.t3.h": { ar: "تجارب علمية على الوعي", he: "ניסויים מדעיים בתודעה", en: "Experiments on Consciousness" },
  "l4.t3.b": { ar: "أبرز التجارب التي حاولت الاقتراب من لغز الوعي وما كشفته.",
                he: "ניסויים בולטים שניסו להתקרב לחידת התודעה ומה הם חשפו.",
                en: "Notable experiments that approached the consciousness puzzle and what they revealed." },
  "l4.t4.h": { ar: "ما زال لغزًا", he: "עדיין בגדר חידה", en: "Still a Mystery" },
  "l4.t4.b": { ar: "ما الذي ما زال العلم عاجزًا عن تفسيره عن الوعي حتى اليوم.",
                he: "מה המדע עדיין לא מצליח להסביר על התודעה עד היום.",
                en: "What science still can't explain about consciousness." },
  "l4.audience": { ar: "للمهتمين بفلسفة العقل، والباحثين، والطلاب، ولكل من يحب التفكير في الأسئلة الكبرى عن الوجود والوعي.",
                    he: "למתעניינים בפילוסופיה של הרוח, חוקרים, סטודנטים — ולכל מי שאוהב לחשוב על השאלות הגדולות של קיום ותודעה.",
                    en: "For philosophy-of-mind enthusiasts, researchers, students — and anyone who loves the big questions of existence and awareness." },

  // ===== LECTURE 5 — Free Will =====
  "l5.overview.1": { ar: "عادةً ما نعتقد أننا نتخذ قراراتنا بشكل واعٍ ومنطقي، وأننا نتحكم بالكامل في اختياراتنا اليومية. لكن الأبحاث في علم الأعصاب وعلم النفس تشير إلى أن جزءًا كبيرًا من قراراتنا يتشكّل في الدماغ قبل أن نعيه بوقت قصير.",
                     he: " אנו נוטים לחשוב שהחלטות מתקבלות במודע ובהיגיון, ושהשליטה בידינו בנוגע לבחירות היומיומיות שלנו. אך מחקרים במדעי המוח ובפסיכולוגיה מראים שחלק נכבד מההחלטות שלנו מתעצב במוח עוד לפני שהוא עולו למודעות.",
                     en: "We usually believe we make decisions consciously and rationally; fully in control of our daily choices. But research in neuroscience and psychology shows much of our decisions form in the brain before we become aware of them." },
  "l5.overview.2": { ar: "في هذه المحاضرة سنستكشف كيف يعمل الدماغ عند اتخاذ القرار، وما الدور الذي يلعبه اللاوعي، العواطف، والتجارب السابقة في توجيه اختياراتنا.",
                     he: "בהרצאה נחקור כיצד פועל המוח בעת קבלת החלטות, ומה תפקידם של הלא-מודע, רגשות, וניסיון חיים קודם בהכוונת בחירותינו.",
                     en: "We'll explore how the brain operates during decision-making, and the role of the unconscious, emotions, and past experiences in guiding our choices." },
  "l5.overview.3": { ar: "سنحاول في النهاية الإجابة عن سؤال قديم ومتجدد: هل نملك حرية حقيقية في قراراتنا، أم أن دماغنا يتخذ القرار أولًا ثم يقنعنا بأننا اخترناه؟",
                     he: "בסוף ננסה לענות על שאלה עתיקה ומתחדשת: האם אנו חופשיים בהחלטותנו?",
                     en: "Finally, we'll take on a timeless question that keeps returning: do we truly have freedom in our decisions, or does the brain decide first and then convince us we chose?" },
  "l5.t1.h": { ar: "اللاوعي والقرار", he: "הלא-מודע והחלטות", en: "The Unconscious and Decisions" },
  "l5.t1.b": { ar: "كيف يؤثر اللاوعي على اختياراتنا قبل أن ندرك ذلك.",
                he: "כיצד הלא-מודע משפיע על בחירותינו עוד לפני שאנו מודעים לכך.",
                en: "How the unconscious shapes our choices before we're aware of them." },
  "l5.t2.h": { ar: "العواطف وصنع القرار", he: "רגשות וקבלת החלטות", en: "Emotions and Decision-Making" },
  "l5.t2.b": { ar: "دور المشاعر، خاصة الخوف والرغبة، في توجيه قراراتنا اليومية.",
                he: "תפקיד הרגשות, במיוחד פחד ורצון, בהכוונת ההחלטות שלנו.",
                en: "How feelings — especially fear and desire — guide everyday decisions." },
  "l5.t3.h": { ar: "تجارب علم الأعصاب", he: "מחקרים במדעי המוח", en: "Neuroscience Experiments" },
  "l5.t3.b": { ar: "ما كشفته دراسات الدماغ عن العلاقة بين النشاط العصبي والشعور بالاختيار.",
                he: "מה חשפו מחקרי המוח על הקשר בין פעילות עצבית לתחושת הבחירה.",
                en: "What brain studies reveal about neural activity and the feeling of choice." },
  "l5.t4.h": { ar: "هل الحرية وهم؟", he: "האם החופש הוא אשליה?", en: "Is Freedom an Illusion?" },
  "l5.t4.b": { ar: "تأمل علمي وفلسفي في معنى «الإرادة الحرة» في ضوء أحدث الأبحاث.",
                he: "הרהור מדעי ופילוסופי במשמעות \"הרצון החופשי\" לאור המחקר העדכני.",
                en: "A scientific and philosophical reflection on \"free will\" in light of recent research." },
  "l5.audience": { ar: "للمهتمين بعلم النفس وعلم الأعصاب والفلسفة، ولكل من يريد فهم نفسه وقراراته بشكل أعمق.",
                    he: "למתעניינים בפסיכולוגיה, מדעי המוח ופילוסופיה — ולכל מי שרוצה להבין את עצמו ואת החלטותיו לעומק.",
                    en: "For those interested in psychology, neuroscience and philosophy — anyone seeking to understand themselves and their decisions more deeply." },

  // ===== LECTURE 6 — Adolescent =====
  "l6.overview.1": { ar: "مرحلة المراهقة ليست مجرد فترة انتقالية بين الطفولة والبلوغ، بل هي مرحلة يشهد فيها الدماغ تغيّرات عميقة وسريعة. فخلال هذه السنوات تتطور شبكات عصبية مسؤولة عن التحكم في الانفعالات، واتخاذ القرار، وتقييم المخاطر، لكنها لا تنضج كلها في الوقت نفسه.",
                     he: "גיל ההתבגרות אינו רק תקופת מעבר בין ילדות לבגרות, אלא תקופה שבה המוח עובר שינויים עמוקים ומהירים. במהלך השנים האלה מתפתחות רשתות עצביות האחראיות על ויסות רגשי, קבלת החלטות והערכת סיכונים — אך לא כולן מבשילות בקצב אחד.",
                     en: "Adolescence isn't just a transition between childhood and adulthood — it's a period of deep, rapid brain changes. Neural networks for emotion regulation, decision-making and risk assessment all develop, but not at the same pace." },
  "l6.overview.2": { ar: "في هذه المحاضرة سنحاول فهم كيف يعمل دماغ المراهق، ولماذا يميل أحيانًا إلى الاندفاع، وحب التجربة، والتأثر بالأصدقاء أكثر من البالغين.",
                     he: "בהרצאה ננסה להבין כיצד פועל מוח המתבגר, ומדוע הוא נוטה לעיתים לאימפולסיביות, חיפוש ריגושים, ומושפע יותר מחברים מאשר מבוגרים.",
                     en: "We'll explore how the adolescent brain works — and why teens lean toward impulsivity, novelty-seeking and peer influence more than adults." },
  "l6.overview.3": { ar: "سنكتشف أن كثيرًا من سلوكيات المراهقة ليست مجرد «تمرد»، بل هي جزء طبيعي من مرحلة نمو دماغية فريدة ومهمة.",
                     he: "נגלה שרבות מהתנהגויות גיל ההתבגרות אינן סתם \"מרד\" — אלא חלק טבעי משלב התפתחות מוחית ייחודי וחשוב.",
                     en: "We'll see that much of adolescent behavior isn't mere \"rebellion\" — it's a natural part of a unique, important brain-development stage." },
  "l6.t1.h": { ar: "نمو الدماغ في المراهقة", he: "התפתחות המוח בגיל ההתבגרות", en: "Brain Development in Adolescence" },
  "l6.t1.b": { ar: "ما الذي يتغيّر في الدماغ بين الطفولة والشباب.",
                he: "מה משתנה במוח בין הילדות לבגרות הצעירה.",
                en: "What changes in the brain between childhood and young adulthood." },
  "l6.t2.h": { ar: "الاندفاع وتقييم المخاطر", he: "אימפולסיביות והערכת סיכונים", en: "Impulsivity and Risk Assessment" },
  "l6.t2.b": { ar: "لماذا يبحث المراهقون عن المخاطرة وكيف تنضج مناطق ضبط القرار لاحقًا.",
                he: "מדוע מתבגרים מחפשים סיכונים ואיזה איזורים מוחיים אחראים על כך.",
                en: "Why teens seek risk and how decision-control regions mature later." },
  "l6.t3.h": { ar: "تأثير الأقران", he: "השפעת חברים", en: "Peer Influence" },
  "l6.t3.b": { ar: "كيف تشكّل العلاقات الاجتماعية النشاط الدماغي في هذه المرحلة.",
                he: "כיצד יחסים חברתיים מעצבים את הפעילות המוחית בשלב זה.",
                en: "How social relationships shape brain activity at this stage." },
  "l6.t4.h": { ar: "كيف نفهم المراهقين بشكل أفضل", he: "איך להבין מתבגרים טוב יותר", en: "Understanding Adolescents Better" },
  "l6.t4.b": { ar: "أدوات للأهل والمربين لفهم هذه المرحلة والتعامل معها بحكمة.",
                he: "כלים להורים ומחנכים להבנת השלב הזה ולהתמודדות חכמה איתו.",
                en: "Tools for parents and educators to understand and navigate this stage wisely." },
  "l6.audience": { ar: "للأهالي والمعلمين والمستشارين النفسيين، ولكل من يتعامل مع المراهقين أو يهتم بفهم هذه المرحلة.",
                    he: "להורים, מורים ויועצים — ולכל מי שעובד עם מתבגרים או רוצה להבין את השלב הזה.",
                    en: "For parents, teachers and counselors — and anyone working with teens or wanting to understand adolescence." },

  // ===== LECTURE 7 — Trauma =====
  "l7.overview.1": { ar: "تعيش مجتمعاتنا في المنطقة في ظل أحداث وتجارب قاسية قد تترك آثارًا عميقة على الأفراد والأجيال، إذ يمكن للتجارب الصادمة أن تخلّف بصمات نفسية وعصبية تستمر لفترات طويلة.",
                     he: "אנו חווים אירועים קשים שעלולים להותיר חותם עמוק על יחידים ועל דורות שלמים — שכן חוויות טראומטיות יוצרות טביעות נפשיות ועצביות שעלולות להישאר זמן רב.",
                     en: "Our communities live through harsh events that leave deep marks on individuals and generations — traumatic experiences create psychological and neural fingerprints that can last." },
  "l7.overview.2": { ar: "أظهرت أبحاث علم الأعصاب أن الصدمة لا تؤثر فقط في الحالة النفسية، بل يمكن أن تؤثر أيضًا في بنية الدماغ ووظيفته، خاصة في المناطق المرتبطة بالذاكرة، وتنظيم العواطف، والاستجابة للخطر.",
                     he: "מחקרים מראים שטראומה אינה משפיעה רק על המצב הנפשי, אלא גם על מבנה המוח ותפקודו — במיוחד באזורים הקשורים לזיכרון, ויסות רגשי, ותגובה לסכנה.",
                     en: "Neuroscience research shows trauma affects not only mental state but also brain structure and function — especially regions linked to memory, emotion regulation and threat response." },
  "l7.overview.3": { ar: "في هذه المحاضرة سنستكشف كيف يستجيب الدماغ للتجارب الصادمة، ولماذا قد تستمر آثارها لدى بعض الأشخاص أكثر من غيرهم. كما سنتعرّف على الدور الذي تلعبه شبكات الدماغ في الذاكرة العاطفية، والخوف، وتنظيم التوتر.",
                     he: "בהרצאה נחקור כיצד המוח מגיב לחוויות טראומטיות ומדוע השפעותיהן ממשיכות אצל אנשים מסוימים יותר מאצל אחרים. נכיר גם את התפקיד שממלאות רשתות מוחיות המעורבות בזיכרון הרגשי, פחד, ווויסות הדחק.",
                     en: "We'll explore how the brain responds to traumatic experiences, and why their effects persist longer in some people than others. We'll also examine the role brain networks play in emotional memory, fear and stress regulation." },
  "l7.overview.4": { ar: "الهدف من هذا الطرح هو فهم كيف تؤثر الصدمة في الدماغ، وكيف يمكن لهذا الفهم العلمي أن يساعد في تطوير طرق أفضل للدعم والتعافي.",
                     he: "המטרה של הרצאה זו היא להבין כיצד הטראומה משפיעה על המוח וכיצד הבנה מדעית זו יכולה לסייע בפיתוח דרכים טובות יותר להתמודדות ותמיכה.",
                     en: "The goal: to understand how trauma reshapes the brain — and how this scientific understanding can help develop better paths to support and recovery." },
  "l7.t1.h": { ar: "ما هي الصدمة عصبيًا؟", he: "מהי טראומה מבחינה עצבית?", en: "What Is Trauma, Neurologically?" },
  "l7.t1.b": { ar: "كيف يستجيب الدماغ للأحداث المؤلمة على المستوى البيولوجي.",
                he: "כיצד המוח מגיב לאירועים מכאיבים ברמה הביולוגית.",
                en: "How the brain responds to painful events at the biological level." },
  "l7.t2.h": { ar: "الذاكرة والصدمة", he: "זיכרון וטראומה", en: "Memory and Trauma" },
  "l7.t2.b": { ar: "لماذا تستمر الذكريات الصادمة وتعود رغم مرور الزمن.",
                he: "מדוע זיכרונות טראומטיים נשמרים וחוזרים על אף הזמן שעובר.",
                en: "Why traumatic memories persist and resurface despite time passing." },
  "l7.t3.h": { ar: "الخوف وتنظيم التوتر", he: "פחד וויסות דחק", en: "Fear and Stress Regulation" },
  "l7.t3.b": { ar: "كيف تتعطل أنظمة الخوف والتوتر بعد التجارب الصادمة.",
                he: "כיצד מערכות הפחד והדחק מתערערות לאחר חוויות טראומטיות.",
                en: "How fear and stress systems become dysregulated after trauma." },
  "l7.t4.h": { ar: "التعافي وإعادة التوازن", he: "החלמה והחזרת האיזון", en: "Recovery and Rebalancing" },
  "l7.t4.b": { ar: "ما يقوله العلم عن طرق المساعدة والشفاء العصبي بعد الصدمة.",
                he: "מה אומר המדע על דרכי תמיכה והחלמה עצבית לאחר טראומה.",
                en: "What science says about support and neural healing after trauma." },
  "l7.audience": { ar: "للمعالجين النفسيين، الأطباء، الأهالي، ولكل من يهتم بفهم آثار الصدمة والتعافي منها.",
                    he: "למטפלים נפשיים, רופאים, הורים — ולכל מי שמעוניין להבין את השפעות הטראומה ואת מסע ההחלמה ממנה.",
                    en: "For mental-health practitioners, physicians, parents — and anyone wanting to understand trauma and the recovery journey." },

  // ===== LECTURE 8 — Corporate =====
  "l8.overview.1": { ar: "في عالم الأعمال، تُتخذ القرارات يوميًا في ظل ضغوط، ومعلومات غير مكتملة، ومستويات مختلفة من عدم اليقين. لكن الأبحاث في علم الأعصاب وعلم النفس المعرفي تظهر أن قراراتنا ليست دائمًا عقلانية وواعية كما نعتقد.",
                     he: "בעולם העסקים, החלטות מתקבלות מדי יום תחת לחצים, מידע חלקי, ורמות שונות של אי-ודאות. אך המחקר במדעי המוח ובפסיכולוגיה הקוגניטיבית מראה שההחלטות שלנו אינן תמיד רציונליות ומודעות כפי שאנו חושבים.",
                     en: "In business, decisions are made daily under pressure, with incomplete information and varying levels of uncertainty. But research in neuroscience and cognitive psychology shows our decisions aren't always as rational and conscious as we think." },
  "l8.overview.2": { ar: "في هذه المحاضرة نستكشف كيف يعمل الدماغ أثناء اتخاذ القرار، ودور المناطق الدماغية والأنظمة العاطفية في تقييم المخاطر والاختيارات. كما سنتناول كيف يمكن للانحيازات الإدراكية أن تؤثر على القرارات المهنية والمالية داخل المؤسسات.",
                     he: "בהרצאה נחקור כיצד פועל המוח בעת קבלת החלטות, ואת תפקיד אזורי המוח והמערכות הרגשיות בהערכת סיכונים ובחירות. כמו כן, נדון בהשפעת ההטיות הקוגניטיביות על החלטות מקצועיות ופיננסיות בארגונים.",
                     en: "We'll explore how the brain operates during decision-making, the role of neural regions and emotional systems in evaluating risks and choices, and how cognitive biases shape professional and financial decisions in organizations." },
  "l8.overview.3": { ar: "تتضمن المحاضرة استراتيجيات وأدوات تطبيقية مستندة إلى الأدلة، مع أمثلة واقعية من بيئات العمل لتحسين جودة القرارات، والتعامل بشكل أفضل مع عدم اليقين والضغوطات في بيئة العمل.",
                     he: "ההרצאה כוללת אסטרטגיות וכלים יישומיים מבוססי-ראיות, עם דוגמאות מהשטח לשיפור איכות ההחלטות והתמודדות טובה יותר עם אי-ודאות ולחצים בעבודה.",
                     en: "The lecture includes evidence-based strategies and applied tools, with real workplace examples for improving decision quality and managing uncertainty and pressure." },
  "l8.t1.h": { ar: "آليات اتخاذ القرار في الدماغ", he: "מנגנוני קבלת החלטות במוח", en: "Decision Mechanisms in the Brain" },
  "l8.t1.b": { ar: "ما تكشفه الأبحاث الحديثة عن كيفية تقييم الدماغ للخيارات والمخاطر.",
                he: "מה מגלים המחקרים העדכניים על אופן הערכת אפשרויות וסיכונים על ידי המוח.",
                en: "What recent research reveals about how the brain evaluates options and risks." },
  "l8.t2.h": { ar: "العاطفة والحدس في القرار", he: "רגש ואינטואיציה בהחלטות", en: "Emotion and Intuition in Decisions" },
  "l8.t2.b": { ar: "متى تساعد العاطفة على اتخاذ قرار أفضل، ومتى تكون عبئًا.",
                he: "מתי הרגש מסייע להחלטה טובה יותר, ומתי הוא מהווה מכשול.",
                en: "When emotion helps better decisions — and when it gets in the way." },
  "l8.t3.h": { ar: "الانحيازات الإدراكية", he: "הטיות קוגניטיביות", en: "Cognitive Biases" },
  "l8.t3.b": { ar: "أبرز الانحيازات التي تؤثر على القرارات المهنية والاستراتيجية.",
                he: "ההטיות הבולטות המשפיעות על החלטות מקצועיות ואסטרטגיות.",
                en: "Key biases that shape professional and strategic decisions." },
  "l8.t4.h": { ar: "أدوات تطبيقية للقادة", he: "כלים יישומיים למנהיגים", en: "Applied Tools for Leaders" },
  "l8.t4.b": { ar: "استراتيجيات علمية لتحسين جودة القرار في بيئات العمل المعقدة.",
                he: "אסטרטגיות מדעיות לשיפור איכות ההחלטות בסביבות עבודה מורכבות.",
                en: "Science-backed strategies for improving decision quality in complex workplaces." },
  "l8.audience": { ar: "للمدراء التنفيذيين، القادة، فرق الموارد البشرية، وبيئات الأعمال التي تسعى لتحسين جودة قراراتها.",
                    he: "למנהלים, מנהיגים, צוותי משאבי אנוש וסביבות עסקיות השואפות לשפר את איכות תהליך קבלת ההחלטות בארגון.",
                    en: "For executives, leaders, HR teams, and any business environment seeking to improve the quality of its decisions." }
};

// ====== Language switching logic ======
const SUPPORTED = ['ar', 'he', 'en'];
const DEFAULT_LANG = 'ar';

function getLang() {
  const stored = localStorage.getItem('bby_lang');
  if (stored && SUPPORTED.includes(stored)) return stored;
  return DEFAULT_LANG;
}

function setLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
  localStorage.setItem('bby_lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = (lang === 'en') ? 'ltr' : 'rtl';

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      el.textContent = TRANSLATIONS[key][lang];
    }
  });

  // Attribute translations: data-i18n-attr="placeholder:form.name;alt:hero.name"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr');
    spec.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && key && TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.setAttribute(attr, TRANSLATIONS[key][lang]);
      }
    });
  });

  // Update language switcher state
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      setLang(btn.getAttribute('data-lang-btn'));
    });
  });
});
