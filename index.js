import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, TouchableOpacity, ViewPropTypes,Text,Modal,ScrollView } from 'react-native';

class MKMenu extends Component{
    constructor(){
        super();
        this.state={
            MKMenuVisible: true
        }
    }
    render(){
        let {modalTitle,data,clickMenu} = this.props;
        const datas = data.map( (menu, index) => {
            return(
                <TouchableOpacity style={styles.MKMenuItem} onPress={ () => {
                     this.setState({ MKMenuVisible:false }); 
                     setTimeout(() =>{this.props.onPress(index, menu.menuTitle)},0)
                     }}>
                    <Text> {menu.menuIcon} {menu.menuTitle}</Text>
                </TouchableOpacity>
            )
        })
        return(
            <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.MKMenuVisible}
            >
            <View style={{backgroundColor:'#000',width:'100%',height:'100%',opacity:0.4,position:'absolute'}}/>
            <View style={styles.MKMenu}>
                <View style={styles.MKMenuTitle}>
                    <Text style={{color:'#fff',fontSize:19}}> {modalTitle} </Text>
                </View>
                <View>
                    <ScrollView contentHeight={'20%'}>
                    {datas}
                    </ScrollView>
                </View>
            </View>
          </Modal>
        )
    }
}

const styles = StyleSheet.create({
    MKMenu:{
        width:'80%',
        maxHeight:'56%',
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:'50%',
        borderRadius:30
    },
    MKMenuTitle:{
        backgroundColor:'#38a9f6',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        borderTopLeftRadius:10,       
        borderTopRightRadius:10,       
    },
    MKMenuItem:{
        padding:15,
        borderTopWidth:1,
        borderTopColor:'#ecf0f1',
    }
});

MKMenu.defaultProps={
    modalTitle:'Select item',
    onPress: (select) => console.log('Selected: ' + select)
}

MKMenu.propTypes={
    modalTitle: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
}

export default MKMenu;