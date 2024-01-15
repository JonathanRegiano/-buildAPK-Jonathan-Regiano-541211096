import{View, Text, Image, TextInput, Button, Linking, ScrollView,} from 'react-native';


const login = () => {
  return(
    <View style={{backgroundColor:'BLUE'}}>
    <Image 
        style={{backgroundColor: 'black',
      height: 88,
      width: 88,
      borderRadius: 44,
      marginTop:50,
      marginBottom:20,
      marginLeft:'auto',
      marginRight:'auto'}} 
        source = {{ uri: 'https://mbtskoudsalg.com/images/letter-l-png-2.png'}}
         
    />
    <Text style={{marginTop: 10,
    fontSize: 27,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    justifycontent: 'center'}}>
      Halo Selamat Datang!
    </Text>
    <Text style={{marginBottom: 20,
    marginTop: 10,
    fontSize: 18,
    color: 'grey',
    textAlign:'center',
    justifyContent: 'center'}}>
      Silahkan masuk untuk melanjutkan
    </Text>  
    <TextInput placeholder='Username' style={{margin:20,marginTop:-5,textAlign:'left',color:'white',borderColor:'gray',backgroundColor:'black', padding:20, borderRadius:10}} />
    <TextInput placeholder='Password' style={{margin:20,marginTop:0,textAlign:'left',color:'white',borderColor:'gray',backgroundColor:'black', padding:20, borderRadius:10}} /> 

    <Text style={{marginTop:-20,padding:20,fontWeight:'medium', fontSize:15,textAlign:'right', color:'#72a4d4'}}>
      Forgot Pasword?
    </Text>
    <View style={{padding:80, marginTop:-60,}}>
    <Button title="Login" color='red' onPress={() => Linking .openURL(contactme)}/>
    </View>
    <Text style={{marginTop:-90,padding:20,fontWeight:'medium', fontSize:15,textAlign:'center', color:'black'}}>
      ------------  atau  ------------
    </Text>  
    <View style={{padding:80, marginTop:-90,}}>
    <Button title="Google" color='red' onPress={() => Linking .openURL(contactme)}/>
    </View>
    <Text style={{marginTop:-70,padding:20,fontWeight:'medium', fontSize:15,textAlign:'center', color:'#808080'}}>
      Belum punya akun? <Text style={{color:'#72a4d4',fontWeight:'Bold'}}>Daftar Sekarang!</Text>
    </Text>  

  </View>  
  )
}

export default login;