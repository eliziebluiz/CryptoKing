import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  }, 

  header:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: 360,
    height: 100,
    left: 0,
    backgroundColor: '#43DC9C',
  },

  imageLogo:{
    top:15,
    height:70,
  },

  headerText:{
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold:{
    fontWeight: 'bold',
  },

  description:{
    marginBottom: 16,
    marginTop: 60,
    fontSize: 18,
    lineHeight: 22,
    textAlign:'center',
    color: '#C7BF02',
  },

  search:{
    height: 40,
    width:'85%',
    justifyContent: "center",
    alignItems: "center",
  },

  textTable:{
    color:'#43DC9C', 
    textAlign: 'center',
    marginBottom: 20,
  },

  incidentList:{
    marginTop: 32,
  },

  incident: {
    flexDirection:'row',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#43DC9C',
    marginBottom: 13,
  },

  incidentProperty:{
    fontSize:14,
    color: '#FFF',
    fontWeight: 'bold',
  },

  valuesCoins:{
    fontSize:14,
    color: '#FFF504',
    fontWeight: 'bold',
  },

  incidentValue:{
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  detailsButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText:{
    fontSize: 15,
    fontWeight: 'bold',
  }

});