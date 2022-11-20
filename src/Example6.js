
//import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
function Example() {
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
  
    const checkRule = (key, checked) => {
      setRules((rules) =>
        rules.map((rule) => {
          if (key === rule.key) {
            rule.checked = checked;
          }
          return rule;
        })
      );
    };
    const levels = [
      { key: "beginner", value: "Başlangıç" },
      { key: "jr_developer", value: "Jr. Developer" },
      { key: "sr_developer", value: "Sr. Developer" },
    ];
  
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
    const [level, setLevel] = useState("sr_developer");
    const [avatar, setAvatar] = useState(false);
    const [image, setImage] = useState(false);
  
    useEffect(() => {
      if (avatar) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", function () {
          //console.log(this.result)
          setImage(this.result);
        });
        fileReader.readAsDataURL(avatar);
      }
    }, [avatar]);
    // const selectedGender=useMemo(()=>{
    //   return genders[gender]
    // },[gender])
  
    const submitHandle = () => {
      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("name", name);
  
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData,
      });
    };
  
    const selectedGender = genders.find((g) => g.key === gender);
    const selectedCategories =
      categories && categoryList.filter((c) => categories.includes(c.key));
    const enabled = rules.every((rule) => rule.checked);
    const selectedLevel = levels.find((g) => g.key === level);
    // eslint-disable-next-line no-self-compare
    const imageEnabled = 1 === 1 && avatar;
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
            <input
              type="checkbox"
              checked={rule.checked}
              onChange={(e) => checkRule(rule.key, e.target.checked)}
            ></input>
            {rule.value}
          </label>
        ))}
        <br></br>
        <pre> {JSON.stringify(rules, null, 2)}</pre>
        <br></br>
        <button disabled={!enabled}>Devam Et</button>
        <br></br>
        {levels.map((lv, index) => (
          <label key={index}>
            <input
              type="radio"
              value={lv.key}
              checked={lv.key === level}
              onChange={(e) => setLevel(e.target.value)}
            ></input>
            {lv.value}
          </label>
        ))}
        <br></br>
        {level} <br></br>
        <pre>{JSON.stringify(selectedLevel)}</pre>
        <br></br>
        <label>
          <input
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
          ></input>
        </label>
        <br />
        {avatar && (
          <>
            <h3>{avatar.name}</h3>
            {image && <img src={image} alt=""></img>}
          </>
        )}
        <br></br>
        <button disabled={!imageEnabled} onClick={submitHandle}>
          Resim Göster
        </button>
      </>
    );
  }

export default Example;