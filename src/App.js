//import { useMemo } from "react";
import { useState } from "react";

function App() {
  // const genders=['Erkek','Kadın']
  const genders = [
    { key: "1", value: "Erkek" },
    { key: "2", value: "Kadın" },
  ];
  const categoryList = [
    { key: 1, value: "Php" },
    { key: 2, value: "JavaScript" },
    { key: 3, value: "CSS" },
    { key: 4, value: "HTML" },
  ];

  const checkRule=(key,checked)=>{
    setRules(rules=>rules.map(rule=>{
      if(key===rule.key){
        rule.checked=checked
      }
      return rule
    }))
  }


  const [name, setName] = useState("kubilay");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("1");
  const [categories, setCategories] = useState([2, 4]);
  const [rule, setRule] = useState(true);
  const [rules, setRules] = useState([
    { key: 1, value: "1. kural kabul", checked: false },
    { key: 2, value: "2. kural kabul", checked: false },
    { key: 3, value: "3. kural kabul", checked: true },
  ]);
  // const selectedGender=useMemo(()=>{
  //   return genders[gender]
  // },[gender])

  const selectedGender = genders.find((g) => g.key === gender);
  const selectedCategories =
    categories && categoryList.filter((c) => categories.includes(c.key));
  const enabled=rules.every(rule=>rule.checked)
  return (
    <>
      <button onClick={() => setName("Yazı")}>Değiştir</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br></br>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        {/* <option value="">Seçin</option>
        <option value="1">Erkek</option>
        <option value="2">Kadın</option> */}
        {/* {genders.map((gender,index)=>(
          <option value={index} key={index}>{gender}</option>
        ))} */}
        {genders.map((gender) => (
          <option value={gender.key} key={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>
      <br></br>
      {gender}
      {/* {selectedGender} */}
      <pre> {JSON.stringify(selectedGender, null, 2)}</pre>

      <br></br>
      <button onClick={() => setCategories([2, 3, 4])}>Kategoriler Seç</button>
      <select
        value={categories}
        multiple={true}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((option) => +option.value)
          )
        }
      >
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <pre> {JSON.stringify(categories, null, 2)}</pre>
      <pre> {JSON.stringify(selectedCategories, null, 2)}</pre>

      <br />
      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        ></input>
        Kuralları Kabul Ediyorum
      </label>
      <br></br>
      <button disabled={!rule}>Devam Et</button>

      <br></br>

      {rules.map((rule) => (
        <label key={rule.key}>
          <input type="checkbox" checked={rule.checked} onChange={e =>checkRule(rule.key,e.target.checked)}></input>
          {rule.value}
        </label>
      ))}
      <br></br>
      <pre> {JSON.stringify(rules, null, 2)}</pre>
      <br></br>
      <button disabled={!enabled}>Devam Et</button>

    </>
  );
}

export default App;
