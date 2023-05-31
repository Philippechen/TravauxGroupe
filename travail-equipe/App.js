import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, FlatList, Alert} from 'react-native';
import Constants from 'expo-constants';
import Header from './Header';

export default function App() {
  const [data, setData] = useState([]);
  const [idx, setIdx] = useState(0);
  const [idxSelected, setIdxSelected] = useState(0);

 //Prend les students et le met dans le DATA
 const getStudents = () => {
  fetch("https://raw.githubusercontent.com/izMind/JSONFINAL/main/etudiants%2Cjson").then(res => res.json())
    .then(json => {setData(json.etudiants)})
    .catch (error => {console.log(`Erreur ${error}`)})
  };

  useEffect(() => {
    getStudents();
  }, []);

  const [session, setSession] = useState("");
  const [nouCours, setNouCours] = useState([]);
  const [info, setInfo] = useState("Aucun étudiant sélectionné");
  const [msg, setMsg] = useState("Confirmez votre sélection");

  const idToName = (id) => {
    setMsg("Confirmez votre sélection");
    let idx = data.findIndex(it=>it.id_etudiant == id);
    if (idx > -1) {
      setIdx(idx);
      setInfo(data[idx].nom);
      setSession(data[idx].session);
    } else {
      setInfo(data[0].nom);
    }
  };
  const addCours = (cours) => {
    setNouCours(cours);
  };
  //---------------------------

  const register = () => {
    let allCours = [...data[idxSelected].cours,nouCours];
    console.log(allCours);
    if (allCours.length < 5) { 
      data[idxSelected] = {...data[idxSelected], cours:allCours};
    }
  }

  const afficher = () => {
    let msg = `Soumis\n${data[idxSelected].nom}, id ${data[idxSelected].id_etudiant}, prend les cours:\n`;
    for (let i = 0; i < data[idxSelected].cours.length; i++) {
      if (i == (data[idxSelected].cours.length - 1))
        msg += `${data[idxSelected].cours[i]}`
      else
        msg += `${data[idxSelected].cours[i]},\n`
    }
    alert(msg);
  }
  return (
    <View style={styles.container}>
      <Header titre = "INSCRIPTION AUX COURS" couleurFond = "blue"/>
      <View style={styles.select}>
        <Text>Id:</Text>
        <TextInput style={{borderWidth:1}} onChangeText={idToName} />
        <Text>{info}</Text>
        <Button title="SÉLECTIONNER UN ÉTUDIANT" onPress={()=>{setMsg("Élève sélectionné");setIdxSelected(idx);}}/>
        <Text style={{color:'red'}}>{msg}</Text>
      </View>
      <View style={{marginTop:20}}>
        <Text>Session:</Text>
        <TextInput style={{borderWidth:1, width:'98%'}} value={session} />
        <Text>Enregistrer élève au cours:</Text>
        <TextInput style={{borderWidth:1, width:'98%'}} onChangeText={addCours} />
        <Button style={styles.button} title="ENREGISTRER" onPress={register} />
        <Button style={styles.button} title="AFFICHER" onPress={afficher}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  select:{
    backgroundColor:'lightgreen',
    padding: 20,
    fontSize: 18
  },
  button: {
    margin:100,
    padding:100,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    backgroundColor:'blue',
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
