const stateListMove = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana","Himachal Pradesh","Jharkhand", "Karnataka", "Kerala","Madhya Pradesh","Maharashtra","Manipur",
  "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh","Uttarakhand","West Bengal"]
const districtListMove = {
  "Andhra Pradesh":[
    "Anakapalli","Anantapur","Annamayya","Bapatla","Chittoor",
    "Dr. B. R. Ambedkar Konaseema","East Godavari","Eluru",
    "Guntur","Kakinada","Krishna","Kurnool","Nandyal","Nellore",
    "NTR","Palnadu","Parvathipuram Manyam","Prakasam","Srikakulam",
    "Sri Sathya Sai","Tirupati","Visakhapatnam","Vizianagaram","West Godavari",
    "YSR","Alluri Sitharama Raju"
  ],
  "Arunachal Pradesh":[
    "Tawang","West Kameng","East Kameng","Pakke-Kessang","Papum Pare","Kra Daadi",
    "Kurung Kumey","Kamle","Lower Subansiri","Upper Subansiri","West Siang",
    "East Siang","Siang","Upper Siang","Lower Siang","Leparada","Lower Dibang Valley",
    "Dibang Valley","Anjaw","Lohit","Namsai","Changlang","Tirap","Longding",
    "Itanagar Capital Complex","Shi-Yomi"
  ],
  "Assam":[
    "Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang",
    "Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat",
    "Hailakandi","Hojai","Jorhat","Kamrup","Kamrup Metropolitan","Karbi Anglong",
    "Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari",
    "Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri",
    "West Karbi Anglong","Tamulpur","Bajali"
  ],
  "Bihar":[
    "Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga",
    "East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar",
    "Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur",
    "Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran",
    "Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"
  ],
  "Chhattisgarh":[
    "Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur",
    "Dantewada","Dhamtari","Durg","Gariaband","Gaurela-Pendra-Marwahi",
    "Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba",
    "Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon",
    "Sukma","Surajpur","Surguja","Sarangarh-Bilaigarh","Khairagarh-Chhuikhadan-Gandai",
    "Manendragarh-Chirmiri-Bharatpur","Mohla-Manpur-Ambagarh Chowki","Shakti"
  ],
  "Goa":[
    "North Goa","South Goa"
  ],
  "Gujarat":[
    "Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar",
    "Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar",
    "Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana",
    "Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha",
    "Surat","Surendranagar","Tapi","Vadodara","Valsad"
  ],
  "Haryana":[
    "Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar",
    "Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh",
    "Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"
  ],
  "Himachal Pradesh":[
    "Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu",
    "Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"
  ],
  "Jharkhand":[
    "Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih",
    "Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga",
    "Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela-Kharsawan","Simdega","West Singhbhum"
  ],
  "Karnataka":[
    "Bagalkot","Ballari","Belagavi","Bengaluru Rural","Bengaluru Urban","Bidar","Chamarajanagar",
    "Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad",
    "Gadag","Hassan","Haveri","Kalaburagi","Kodagu","Kolar","Koppal","Mandya","Mysuru","Raichur",
    "Ramanagara","Shivamogga","Tumakuru","Udupi","Uttara Kannada","Vijayapura","Yadgir","Vijayanagara"
  ],
  "Kerala":[
    "Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode",
    "Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"
  ],
  "Madhya Pradesh":[
    "Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind",
    "Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori",
    "Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa",
    "Khargone","Maihar","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Niwari",
    "Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol",
    "Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria",
    "Vidisha","Nagda","Sausar","Chachaura"
  ],
  "Maharashtra":[
    "Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur",
    "Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City",
    "Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani",
    "Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"
  ],
  "Manipur":[
    "Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching",
    "Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"
  ],
  "Meghalaya":[
    "East Garo Hills","West Garo Hills","South Garo Hills","North Garo Hills","East Khasi Hills",
    "West Khasi Hills","South West Khasi Hills","Ri-Bhoi","Eastern West Khasi Hills",
    "West Jaintia Hills","East Jaintia Hills","South West Garo Hills"
  ],
  "Mizoram":[
    "Aizawl","Champhai","Hnahthial","Khawzawl","Kolasib","Lawngtlai",
    "Lunglei","Mamit","Saitual","Serchhip","Siaha"
  ],
  "Nagaland":[
    "Chümoukedima","Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Niuland",
    "Noklak","Peren","Phek","Shamator","Tseminyü","Tuensang","Wokha","Zünheboto"
  ],
  "Odisha":[
    "Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati",
    "Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal",
    "Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur",
    "Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundargarh"
  ],
  "Punjab":[
    "Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka",
    "Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Malerkotla",
    "Mansa","Moga","Mohali (SAS Nagar)","Muktsar","Pathankot","Patiala",
    "Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar (Nawanshahr)","Tarn Taran"
  ],
  "Rajasthan":[
    "Aauwa", "Abhaneri", "Abohar", "Abu Road", "Achal Gadh", "Achrol", "Ahor", "Air Force Area",
  "Ajit Colony", "Ajmer", "Aklera", "Alot", "Alsisar", "Alwar", "Amar Sagar Pol", "Ambah",
  "Amer", "Amet", "Ani", "Anjna", "Anupgarh", "Arnaud", "Asind", "Aspur", "Atru", "Bagar",
  "Bagar Meo", "Bagidora", "Bagru", "Bah", "Balesar", "Bali", "Balotra", "Bamanwas", "Bamora",
  "Banar", "Bandikui", "Banera", "Bansur", "Banswara", "Bap", "Baran", "Barar", "Bari",
  "Bari Sadri", "Barmer", "Baseri", "Bassi", "Bassi", "Baswa", "Bawal", "Bayana", "Begun",
  "Behror", "Bera", "Beāwar", "Bhachau", "Bhadesar", "Bhadra", "Bhagat Ki Kothi", "Bhangarh",
  "Bhanpura", "Bharatpur", "Bhehna", "Bhiloda", "Bhilwara", "Bhim", "Bhinai", "Bhinmal",
  "Bhiwadi", "Bhopalgarh", "Bhīndar", "Bijaipur", "Bijaynagar", "Bijolia", "Bikaner",
  "Bilara", "Bilonchi", "Bilonā", "Binawas", "Bisalpur", "Bishangarh", "Bonali", "Bundi",
  "Bānkli", "Central Area", "Chachaura", "Chaksu", "Chamboa Sarjela", "Chandan", "Chandelao",
  "Chandrawati", "Chauhtan", "Chhabra", "Chhata", "Chhipa Barod", "Chhoti Sadri", "Chikalwas",
  "Chirawa", "Chittorgarh", "Chomu", "Chopasni Housing Board", "Churu", "Chānod", "Dabok",
  "Dabwali", "Daijar", "Dakan Kotra", "Dandhera", "Danta", "Dantiwara", "Dausa", "Dechu",
  "Dedha", "Deeg", "Degana", "Delwara", "Deopura", "Deshnoke", "Desuri", "Devgarh", "Devli",
  "Dhanera", "Dhariyawad", "Dhaulpur", "Dheerpura", "Dholpur", "Dhānd", "Didwana", "Digod",
  "Dudu", "Dungargarh", "Dungarpur", "Eklingji", "Elaka", "Falna", "Fatehabad", "Fatehabad",
  "Fatehpur", "Fazilka", "Ferozpur Jhirka", "Gajner", "Gangapur", "Gangapur", "Gangdhar",
  "Gangrar", "Gangānagar", "Garhi", "Garot", "Ghanerao", "Ghatol", "Goga Medi", "Gogunda",
  "Gosunda", "Gudha Gorji", "Gulabpura", "Guman", "Guna", "Gījgarh", "Gūdha", "Hanumangarh",
  "Hindaun", "Hindoli", "Hisar", "Honkra", "Jahazpur", "Jaipur", "Jaipur District", "Jairāmpura",
  "Jaisalmer", "Jaisamand", "Jaitaran", "Jalor", "Jamool Khera", "Jamwa Ramgarh", "Jawad",
  "Jawai Bandh", "Jayal", "Jhalamand", "Jhalarapatan", "Jhalawar", "Jhalod", "Jharol",
  "Jhunjhunu", "Jirapur", "Jodhpur", "Jojawar", "Jora", "Juliāsar", "Kalakho", "Kalinjara",
  "Kalwad Kalan and Khurd", "Kaman", "Kanooja", "Kapasan", "Karanpur", "Karauli", "Karlai",
  "Karnu", "Kekri", "Keshorai Patan", "Ketu Barabas", "Khairagarh", "Khandar", "Khandela",
  "Khandi", "Khanjipeer", "Khanpur", "Kharda", "Khed Brahma", "Khejarla", "Kherli Kalan",
  "Kherwara", "Khetri", "Khichan", "Khilchipur", "Khimsar", "Khiyansaria", "Khonda", "Khuri",
  "Kiraoli", "Kishanganj", "Kishangarh", "Kishangarh Bas", "Kivarli", "Kolaras", "Kolayat",
  "Kolu", "Kookas", "Kota", "Kotputli", "Kotra", "Kotri", "Kuchaman", "Kukas", "Kuldhar",
  "Kumbhalgarh", "Kumher", "Kālwāra", "Kānota", "Lachhmangarh", "Lachhmangarh", "Lachhmangarh",
  "Ladnun", "Lake Swaroop Sagar", "Lakhau", "Lakāwās", "Lalsot", "Lasadia", "Loharu", "Lunda",
  "Luni", "Lunkaransar", "Mahamandir", "Mahansar", "Mahendragarh", "Mahwah", "Malhargarh",
  "Malpura", "Manasa", "Mandai Charnan", "Mandal", "Mandalgarh", "Mandawa", "Mandawar",
  "Mandore", "Mandsaur", "Mangalwad", "Mangrol", "Mathura", "Meghraj", "Mehandipur", "Menal",
  "Merta", "Mogana", "Mogra", "Morena", "Mount Abu", "Māvli", "Nadbai", "Naenwa", "Nagar",
  "Nagaur", "Nakoda", "Nandauti", "Naorangdesar", "Narlai", "Narnaul", "Nasirabad", "Nathdwara",
  "Nathrau", "Nawa", "Nawalgarh", "Neem Ka Thana", "Neemrana", "Neemuch", "Nimaaj", "Nimbahera",
  "Niwai", "Nohar", "Nokha", "Nuh", "Nāi", "Nīmri", "Ordi", "Osian", "Pachpadra", "Pachpahar",
  "Padampur", "Pal", "Pali", "Pallu", "Paota", "Parsoli", "Parvatsar", "Peharsar", "Phagi",
  "Phalodi", "Phalsiya", "Phulera", "Pichiyak", "Pichola", "Pilani", "Pilibangan", "Pindwara",
  "Pipalda Kalan", "Pirawa", "Pohri", "Pokhran", "Poshina", "Pratapgarh", "Prempura",
  "Punawali", "Pushkar", "Pākhar", "Raghogarh", "Raipur", "Raipur", "Raisinghnagar",
  "Rajawas", "Rajgarh", "Rajgarh", "Rajgarh", "Rajod", "Rajsamand", "Ramdevra", "Ramganj Mandi",
  "Ramgarh", "Ramgarh", "Ranakpur", "Raniwara", "Rashmi", "Ratanada", "Ratangarh", "Ratanpur",
  "Rathaia", "Rawatbhata", "Rawatsar", "Rawla Mandi", "Rehandri", "Relmagra", "Revdar", "Rewari",
  "Rohat", "Roop Pura", "Rughnathpura", "Rupbas", "Rāma", "Rūpnagar",
  ],
  "Sikkim":[
    "Gangtok","Gyalshing","Mangan","Namchi","Pakyong","Soreng"
  ],
  "Tamil Nadu":[
    "Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul",
    "Erode","Kallakurichi","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai",
    "Mayiladuthurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram",
    "Ranipet","Salem","Sivaganga","Tenkasi","Thanjavur","Theni","Thiruvallur","Thiruvarur","Thoothukudi",
    "Tiruchirappalli","Tirunelveli","Tirupathur","Tiruppur","Tiruvannamalai","Vellore",
    "Viluppuram","Virudhunagar"
  ],
  "Telangana":[
    "Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhupalpally",
    "Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad",
    "Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal-Malkajgiri","Mulugu",
    "Nagarkurnool","Nalgonda","Narayanpet","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla",
    "Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal","Hanumakonda","Yadadri Bhuvanagiri"
  ],
  "Tripura":[
    "Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"
  ],
  "Uttar Pradesh":[
    "Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha","Auraiya","Ayodhya","Azamgarh","Baghpat",
    "Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor",
    "Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur",
    "Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur",
    "Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj",
    "Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri",
    "Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Prayagraj",
    "Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Sharavasti",
    "Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"
  ],
  "Uttarakhand":[
    "Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital",
    "Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"
  ],
  "West Bengal":[
    "Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly",
    "Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia",
    "North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman",
    "Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"
  ]
}


export {stateListMove,districtListMove};