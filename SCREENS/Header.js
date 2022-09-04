import { View, Text , StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'



const Header = () => {
  return (
    <View style={style.headercontainer}>
        <TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
        <Image source={{uri:"https://img.icons8.com/glyph-neue/64/FFFFFF/less-than.png"}} style={style.arrow}/>
    <Text style={style.words}>
        WORKOUTS
    </Text>
     </View>
    </TouchableOpacity>
    </View>  
  )
}

const style = StyleSheet.create({   
    words: {
        color: 'white',
        fontSize:20,
        
     },
    arrow: {
        height:30,
        width:30,
        marginRight:10,
        
},
  headercontainer:{
    backgroundColor:'#26409f',
    padding:30,
    marginTop:30,
    
    

  }
}
)
    
export default Header