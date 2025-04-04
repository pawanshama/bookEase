import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/navbar.css'
import BsCxt from '../context/Bscontext'

const NavbarJs = (props) => {
  // const locationCountry='India'
  const context = useContext(BsCxt);
  const {cityList,setCityList,state,city,setCity} = context
  const navigate = useNavigate()
  const rst=[
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
  ]
  // const [cityList,setCityList] = useState('')
  if(!cityList){
    setCityList(rst);
  }
  // const [state,setState] = useState('');
  // const [city,setCity] = useState('');
  const [q,setQ] = useState('');
  // const {state,setState,city,setCity} = props;
  const handleCity=(e)=>{
      const attr = e.target.getAttribute("name")
      setCity(attr)
      // navigate(-1)
      navigate('/home')
  }
  const handleCityQuery=(e)=>{
      setCityList(pre=>{
        const filterData = rst.filter((item) =>
          item.toLowerCase().includes(String(e.target.value)?.toLowerCase())
        );
         return filterData
      })
      setQ(e.target.value)
  }
 
  
  return (
    <div>
       <div className='nav-section'>
         <div className='logo-section'>🎬logo</div>
         <input placeholder='city Name...' className='input-section' value={q} onChange={handleCityQuery}/>
         <div className='location-section'>{state}</div>
         <div className='choose-location'>🛖</div>
       </div>
       <br/>
       <div className='fulllist' onClick={handleCity}>
       {
         cityList && cityList.map((cl,index)=>{
           return (<div className='select-section' key={index} name={cl}>{cl}</div>)
          })
        }
      </div>
    </div>
  )
}

export default NavbarJs

