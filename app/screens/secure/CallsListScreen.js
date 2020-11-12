import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native'

import styles from '../../styles'
import { useStore } from '../../store'
import {
  CallListItem,
  HeaderContainer,
  HeaderIcon,
  HeaderSwitcher,
} from '../../components'


const listFirst = [
  { id: '111q', title: 'Миша', type:'missed' },
  { id: '222w', title: 'Леся', type:'incoming' },
  { id: '333e', title: 'Боря', type:'forwarded' },
  { id: '444r', title: 'Лара', type:'missed' },
  { id: '555t', title: 'Саша', type:'forwarded' },
  { id: '666y', title: 'Даша', type:'incoming' },
  { id: '777u', title: 'Женя', type:'missed' },
  { id: '888i', title: 'Ира', type:'forwarded' },
  { id: '999o', title: 'Коля', type:'incoming' },
  { id: '111a', title: 'Миша', type:'missed' },
  { id: '222s', title: 'Леся', type:'incoming' },
  { id: '333d', title: 'Боря', type:'forwarded' },
  { id: '444f', title: 'Лара', type:'missed' },
  { id: '555g', title: 'Саша', type:'forwarded' },
  { id: '666h', title: 'Даша', type:'incoming' },
  { id: '777j', title: 'Женя', type:'missed' },
  { id: '888k', title: 'Ира', type:'forwarded' },
  { id: '999l', title: 'Коля', type:'incoming' },
];

const listSecond = [
  { id: '888a', title: 'Марина', type:'forwarded' },
  { id: '999s', title: 'Нина', type:'missed' },
  { id: '666d', title: 'Света', type:'forwarded' },
  { id: '777f', title: 'Наташа', type:'incoming' },
  { id: '333g', title: 'Юра', type:'missed' },
  { id: '444h', title: 'Никита', type:'forwarded' },
  { id: '555j', title: 'Борис', type:'forwarded' },
  { id: '111k', title: 'Терен', type:'missed' },
  { id: '222l', title: 'Назар', type:'incoming' },
  { id: '888z', title: 'Марина', type:'forwarded' },
  { id: '999x', title: 'Нина', type:'missed' },
  { id: '666c', title: 'Света', type:'forwarded' },
  { id: '777v', title: 'Наташа', type:'incoming' },
  { id: '333b', title: 'Юра', type:'missed' },
  { id: '444n', title: 'Никита', type:'forwarded' },
  { id: '555m', title: 'Борис', type:'forwarded' },
  { id: '111a', title: 'Терен', type:'missed' },
  { id: '222q', title: 'Назар', type:'incoming' },
];

const Component = () => {
  const [active, setActive] = React.useState(listFirst)

  const changeHandler = (flag)=>{
    setActive(!flag ? listFirst : listSecond)
  }

  return (
    <SafeAreaView style={{ flex:1, height:'100%' }}>
      <HeaderContainer 
        leftIcon="menu" leftClick={()=>{console.log('menu left click')}}
        title="switcher-component" changeHandler={changeHandler}
        rightIcon="call-plus" rightClick={()=>{console.log('menu right click')}}
      />
      <ScrollView style={{ flex:1 }}>
        <FlatList
          data={active}
          renderItem={
            ({item})=>(<CallListItem item={item}/>)
          }
          keyExtractor={item => item.id}
          style={{width:'100%', flex:1, backgroundColor:'#FFCCCC'}} 
        />
      </ScrollView>
    </SafeAreaView>
  )
} 

export default Component
