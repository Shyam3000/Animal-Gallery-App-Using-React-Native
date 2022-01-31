import React, { Component } from 'react'
import { Text,Image, View,ScrollView,StyleSheet,TouchableOpacity,Modal,ImageBackground } from 'react-native'

const img1 = require("./asset/Images/a.jpg");
const img2 = require("./asset/Images/animal.jpg");
const img3 = require("./asset/Images/b.jpg");
const img4 = require("./asset/Images/bird1.jpg");
const img5 = require("./asset/Images/bird2.jpg");
const img6 = require("./asset/Images/c.jpg");
const img7 = require("./asset/Images/cat.jpg");
const img8 = require("./asset/Images/d.jpg");
const img9 = require("./asset/Images/dear.jpg");
const img10 = require("./asset/Images/dogs.jpg");
const img11 = require("./asset/Images/e.jpg");
const img12 = require("./asset/Images/f.jpg");
const img13 = require("./asset/Images/fox.jpg");
const img14 = require("./asset/Images/g.jpg");
const img15 = require("./asset/Images/h.jpg");
const img16 = require("./asset/Images/i.jpg");
const img17 = require("./asset/Images/k.jpg");
const img18 = require("./asset/Images/l.jpg");
const img19 = require("./asset/Images/lion.jpg");
const img20 = require("./asset/Images/m.jpg");
const img21 = require("./asset/Images/parrot.jpg");
const img22 = require("./asset/Images/parrot1.jpg");
const img23 = require("./asset/Images/parrot2.jpg");
const img24 = require("./asset/Images/parrot3.jpg");
const img25 = require("./asset/Images/peacock.jpg");
const img26 = require("./asset/Images/squreel.jpg");
const img27 = require("./asset/Images/tiger.jpg");
const img28 = require("./asset/Images/u.jpg");
const img29 = require("./asset/Images/v.jpg");
const img30 = require("./asset/Images/x.jpg");
const img31 = require("./asset/Images/y.jpg");
const img32 = require("./asset/Images/z.jpg");
const img33 = require("./asset/Images/img1.jpg");
const img34 = require("./asset/Images/img2.jpg");
const img35 = require("./asset/Images/img3.jpg");
const img36 = require("./asset/Images/img4.jpg");
const img37 = require("./asset/Images/img5.jpg");
const img38 = require("./asset/Images/img6.jpg");
const img39 = require("./asset/Images/img7.jpg");
const img40 = require("./asset/Images/img8.jpg");
const img41 = require("./asset/Images/img9.jpg");
const img42 = require("./asset/Images/img10.jpg");
const img43 = require("./asset/Images/img11.jpg");
const img44 = require("./asset/Images/img12.jpg");
const img45 = require("./asset/Images/img13.jpg");
const img46 = require("./asset/Images/img14.jpg");
const img47 = require("./asset/Images/img15.jpg");
const img48 = require("./asset/Images/img16.jpg");
const img49 = require("./asset/Images/img17.jpg");
const img50 = require("./asset/Images/img18.jpg");

export default class ScrollView2 extends Component {
    constructor(){
        super();
        this.state={
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            show5:false,
            show6:false,
            show7:false,
            show8:false,
            show9:false,
            show10:false,
            show11:false,
            show12:false,
            show13:false,
            show14:false,
            show15:false,
            show16:false,
            show17:false,
            show18:false,
            show19:false,
            show20:false,
            show21:false,
            show22:false,
            show23:false,
            show24:false,
            show25:false,
            show26:false,
            show27:false,
            show28:false,
            show29:false,
            show30:false,
            show31:false,
            show32:false,
            show33:false,
            show34:false,
            show35:false,
            show36:false,
            show37:false,
            show38:false,
            show39:false,
            show40:false,
            show41:false,
            show42:false,
            show43:false,
            show44:false,
            show45:false,
            show46:false,
            show47:false,
            show48:false,
            show49:false,
            show50:false

        }
      }
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.header}>Animal Gallery</Text>
               <ScrollView>
                {/* img1 */}
                <View style={styles.firstcontainer}>
                    <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show1:true})}}>
                                <Image style={styles.viewStyle} source={img1}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show1}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img1}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity
                                        onPress={()=>{this.setState({show1:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img2 */}
                        <TouchableOpacity
                                onPress={()=>{this.setState({show2:true})}}>
                                <Image style={styles.viewStyle} source={img2}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show2}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img2}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity
                                        onPress={()=>{this.setState({show2:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img3 */}
                        <TouchableOpacity
                                onPress={()=>{this.setState({show3:true})}}>
                                <Image style={styles.viewStyle} source={img3}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show3}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img3}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity
                                        onPress={()=>{this.setState({show3:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img4 */}
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show4:true})}}>
                                <Image style={styles.viewStyle} source={img4}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show4}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img4}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show4:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img5 */}
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show5:true})}}>
                                <Image style={styles.viewStyle} source={img5}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show5}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img5}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show5:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        </ScrollView>
                        </View>
                    </View>
                {/* 3 */}
                <View style={styles.firstcontainer}>
                        <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {/* img6 */}
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show6:true})}}>
                                <Image style={styles.viewStyle} source={img6}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show6}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img6}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show6:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img7 */}


                        <TouchableOpacity 
                                onPress={()=>{this.setState({show7:true})}}>
                                <Image style={styles.viewStyle} source={img7}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show7}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img7}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show7:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img8 */}

                        <TouchableOpacity 
                                onPress={()=>{this.setState({show9:true})}}>
                                <Image style={styles.viewStyle} source={img9}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show9}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img9}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show9:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img9 */}

                        <TouchableOpacity 
                                onPress={()=>{this.setState({show10:true})}}>
                                <Image style={styles.viewStyle} source={img10}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show10}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img10}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show10:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img10 */}
                        
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show11:true})}}>
                                <Image style={styles.viewStyle} source={img11}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show11}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img11}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show11:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>




 {/* end */}
                        </ScrollView>
                        </View>
                    </View>
                {/* 4 */}

                <View style={styles.firstcontainer}>
                        <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
{/* img8 */}
<TouchableOpacity 
                                onPress={()=>{this.setState({show8:true})}}>
                                <Image style={styles.viewStyle} source={img8}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show8}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img8}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show8:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img12 */}
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show12:true})}}>
                                <Image style={styles.viewStyle} source={img12}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show12}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img12}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show12:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img13 */}
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show13:true})}}>
                                <Image style={styles.viewStyle} source={img13}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show13}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img13}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show13:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img14 */}
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show14:true})}}>
                                <Image style={styles.viewStyle} source={img14}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show14}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img14}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show14:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        {/* img15 */}
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show15:true})}}>
                                <Image style={styles.viewStyle} source={img15}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show15}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img15}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show15:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>

                       </ScrollView>
                        </View>
                    </View>
                {/* 5 */}

                <View style={styles.firstcontainer}>
                        <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        {/* img16 */}
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show16:true})}}>
                                <Image style={styles.viewStyle} source={img16}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show16}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img16}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show16:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img17 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show17:true})}}>
                                <Image style={styles.viewStyle} source={img17}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show17}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img17}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show17:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img18 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show18:true})}}>
                                <Image style={styles.viewStyle} source={img18}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show18}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img18}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show18:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img19 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show19:true})}}>
                                <Image style={styles.viewStyle} source={img19}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show19}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img19}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show19:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img20 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show20:true})}}>
                                <Image style={styles.viewStyle} source={img20}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show20}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img20}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show20:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>


                       
                        </ScrollView>
                        </View>
                    </View>
                {/* 6 */}

                <View style={styles.firstcontainer}>
                        <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        {/* img21 */}
                        <TouchableOpacity 
                                onPress={()=>{this.setState({show21:true})}}>
                                <Image style={styles.viewStyle} source={img15}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show21}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img21}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show21:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img22 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show22:true})}}>
                                <Image style={styles.viewStyle} source={img22}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show22}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img22}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show22:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img23 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show23:true})}}>
                                <Image style={styles.viewStyle} source={img23}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show23}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img23}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show23:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img24 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show24:true})}}>
                                <Image style={styles.viewStyle} source={img24}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show24}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img24}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show24:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img25 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show25:true})}}>
                                <Image style={styles.viewStyle} source={img25}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show25}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img25}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show25:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>

                       </ScrollView>
                        </View>
                    </View>
                {/* 7 */}

                <View style={styles.firstcontainer}>
                        <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                       {/* img26 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show26:true})}}>
                                <Image style={styles.viewStyle} source={img26}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show26}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img26}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show26:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img27 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show27:true})}}>
                                <Image style={styles.viewStyle} source={img27}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show27}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img27}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show27:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img28 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show28:true})}}>
                                <Image style={styles.viewStyle} source={img28}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show28}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img28}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show28:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img29 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show29:true})}}>
                                <Image style={styles.viewStyle} source={img29}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show29}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img29}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show29:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img30 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show30:true})}}>
                                <Image style={styles.viewStyle} source={img30}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show30}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img30}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show30:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>

                      </ScrollView>
                        </View>
                    </View>

                <View style={styles.firstcontainer}>
                        <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                       {/* img31 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show31:true})}}>
                                <Image style={styles.viewStyle} source={img31}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show31}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img31}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show31:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img32 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show32:true})}}>
                                <Image style={styles.viewStyle} source={img32}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show32}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img32}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show32:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img15 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show33:true})}}>
                                <Image style={styles.viewStyle} source={img33}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show33}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img33}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show33:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img34 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show34:true})}}>
                                <Image style={styles.viewStyle} source={img34}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show34}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img34}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show34:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img35 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show35:true})}}>
                                <Image style={styles.viewStyle} source={img35}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show35}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img35}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show35:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        </ScrollView>
                        </View>
                    </View>
                {/* 10 */}

                <View style={styles.firstcontainer}>
                        <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                       {/* img36 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show36:true})}}>
                                <Image style={styles.viewStyle} source={img36}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show36}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img36}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show36:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img37 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show37:true})}}>
                                <Image style={styles.viewStyle} source={img37}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show37}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img37}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show37:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img38 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show38:true})}}>
                                <Image style={styles.viewStyle} source={img38}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show38}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img38}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show38:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img39 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show39:true})}}>
                                <Image style={styles.viewStyle} source={img39}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show39}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img39}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show39:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img40 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show40:true})}}>
                                <Image style={styles.viewStyle} source={img40}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show40}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img40}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show40:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>

                        </ScrollView>
                        </View>
                    </View>
{/* check from here */}
                    <View style={styles.firstcontainer}>
                        <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                       {/* img46 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show46:true})}}>
                                <Image style={styles.viewStyle} source={img46}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show46}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img46}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show46:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img47 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show47:true})}}>
                                <Image style={styles.viewStyle} source={img47}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show47}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img47}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show47:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img43 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show48:true})}}>
                                <Image style={styles.viewStyle} source={img48}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show48}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img48}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show48:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img49 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show49:true})}}>
                                <Image style={styles.viewStyle} source={img49}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show49}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img49}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show49:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img45 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show50:true})}}>
                                <Image style={styles.viewStyle} source={img50}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show50}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img50}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show50:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        </ScrollView>
                        </View>
                    </View>
                    <View style={styles.firstcontainer}>
                        <View style={styles.harcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                       {/* img41 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show41:true})}}>
                                <Image style={styles.viewStyle} source={img41}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show41}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img41}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show41:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img42 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show42:true})}}>
                                <Image style={styles.viewStyle} source={img42}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show42}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img42}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show42:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img43 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show43:true})}}>
                                <Image style={styles.viewStyle} source={img43}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show43}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img43}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show43:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img44 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show44:true})}}>
                                <Image style={styles.viewStyle} source={img44}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show44}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img44}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show44:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                       {/* img45 */}
                       <TouchableOpacity 
                                onPress={()=>{this.setState({show45:true})}}>
                                <Image style={styles.viewStyle} source={img45}/>
                        </TouchableOpacity>
                        <Modal transparent={false} visible={this.state.show45}>
                            <View style={styles.modalBox}>
                               <ImageBackground  source={img45}
                               resizeMode='contain'
                                     style={styles.mainContainer}>
                                    <TouchableOpacity 
                                        onPress={()=>{this.setState({show45:false})}}
                                        style={styles.btnHome}>
                                        <Text style={styles.btnClose}>X</Text>
                                      </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </Modal>
                        </ScrollView>
                        </View>
                    </View>


                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lime',
        alignItems: 'center',
        justifyContent: 'center',
      },
      firstcontainer: {
        flex: 1,
        margin:20,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      viewStyle: {
        width:160,
        margin:20,
        height:200,
        backgroundColor:'green',
        borderRadius:20,
        borderColor:'red',
        borderWidth:1
      },
      header: {
        color:'black',
        padding:15,
        paddingTop:20,
        backgroundColor:'white',
        width:400,
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:32
      },
      harcontainer: {
        color:'black',
        flexDirection:'row',
        width:400,
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:32
      },
      btnHome: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius:100,
        marginTop:20,
        marginRight:20
      },
      mainContainer: {
        flex: 1,
        margin:20,
        backgroundColor:'black',
        flexDirection:'row',
        borderRadius:20,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
      },
      btnClose: {
        fontSize: 20 ,
        color:'white',
        alignItems:'center',
        borderRadius:20
      },
      modalBox: {
        flex: 1 ,
        backgroundColor:'lime',
      }
      });
  