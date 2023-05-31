import {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import Header from './Header';


let liste = [{id_etudiant:"00", nom:"Aucun seléctionné", session:"1", cours:[]}];

const register = () => {}
const afficher = () => {}

export default function App() {


  
  const [msg, setMsg] = useState("Confirmez votre sélection");

  return (
    <View style={styles.container}>
      <Header titre = "INSCRIPTION AUX COURS" couleurFond = "blue"/>
      <View style={styles.select}>
        <Text>Id:</Text>
        <TextInput style={{borderWidth:1}} />
        <Text>{liste[0].nom}</Text>
        <Button title="SÉLECTIONNER UN ÉTUDIANT" onPress={()=>setMsg("Élève sélectionné")}/>
        <Text style={{color:'red'}}>{msg}</Text>
      </View>
      <View style={{marginTop:20}}>
        <Text>Session:</Text>
        <TextInput style={{borderWidth:1, width:'98%'}} />
        <Text>Enregistrer élève au cours:</Text>
        <TextInput style={{borderWidth:1, width:'98%'}} />
        <Button title="ENREGISTRER" onPress={register}/>
        <Button title="AFFICHER" onPress={afficher}/>
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
  paragraph: {
    margin: 24,
    fontSize: 20,
    backgroundColor:'blue',
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
