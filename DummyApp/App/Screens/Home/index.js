/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {Text, View, TouchableOpacity, Button, Modal} from 'react-native';
import styles from './styles';
let interval = null;
const Home = ({navigation}) => {
  const initalState = 0;
  const [count, setCount] = useState(initalState);
  const counterRef = useRef(initalState);
  const [activeTab, setActiveTab] = useState(2);
  const [signalColorOne, setSignalColorOne] = useState('green');
  const [signalColorTwo, setSignalColorTwo] = useState('red');
  const [signalColorThree, setSignalColorThree] = useState('red');
  const [signalColorFour, setSignalColorFour] = useState('red');
  const [countOne, setCountOne] = useState(10);
  const [countTwo, setCountTwo] = useState(10);
  const [countThree, setCountThree] = useState(10);
  const [countFour, setCountFour] = useState(10);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    counterRef.current = count;
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => showSettings()} title="Settings" />
      ),
    });
  }, [navigation]);

  const showSettings = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    //For Resume the interval call
    const unsubscribe = navigation.addListener('focus', () => {
      interval = setInterval(() => {
        setCount(counterRef.current + 1);
      }, 1000);
      return () => clearInterval(interval);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (count % 10 == 0) {
      if (activeTab == 1) {
        setActiveTab(4);
        setSignalColorFour('green');
        setSignalColorOne('red');
        setSignalColorTwo('red');
        setSignalColorThree('red');
      } else if (activeTab == 2) {
        setActiveTab(1);
        setSignalColorFour('red');
        setSignalColorOne('green');
        setSignalColorTwo('red');
        setSignalColorThree('red');
      } else if (activeTab == 3) {
        setActiveTab(2);
        setSignalColorFour('red');
        setSignalColorOne('red');
        setSignalColorTwo('green');
        setSignalColorThree('red');
      } else if (activeTab == 4) {
        setActiveTab(3);
        setSignalColorFour('red');
        setSignalColorOne('red');
        setSignalColorTwo('red');
        setSignalColorThree('green');
      }
    }
    if (count > 86400000) {
      // Refresh the clock after 24 hr.
      setCount(0);
    }
    console.log('main effect', activeTab);
  }, [navigation, count]);

  const changeManually = signalNumber => {
    if (1 == signalNumber) {
      setActiveTab(signalNumber);
      setSignalColorFour('red');
      setSignalColorOne('green');
      setSignalColorTwo('red');
      setSignalColorThree('red');
    } else if (2 == signalNumber) {
      setActiveTab(signalNumber);
      setSignalColorFour('red');
      setSignalColorOne('red');
      setSignalColorTwo('green');
      setSignalColorThree('red');
    } else if (3 == signalNumber) {
      setActiveTab(signalNumber);
      setSignalColorFour('red');
      setSignalColorOne('red');
      setSignalColorTwo('red');
      setSignalColorThree('green');
    } else if (4 == signalNumber) {
      setActiveTab(signalNumber);
      setSignalColorFour('green');
      setSignalColorOne('red');
      setSignalColorTwo('red');
      setSignalColorThree('red');
    }
    // setCount(0);
  };
  return (
    <View style={styles.container}>
      <View style={styles.uperView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeManually(1)}>
          <Text
            style={{
              padding: 16,
            }}>
            AMB
          </Text>
        </TouchableOpacity>
        <View style={[styles.secondView, {backgroundColor: signalColorOne}]} />
        <Text style={{alignItems: 'center', marginVertical: 8}}>
          {countOne}
        </Text>
      </View>
      <View style={styles.horiView}>
        <View style={styles.text}>
          <TouchableOpacity
            style={styles.otherButton}
            onPress={() => changeManually(2)}>
            <Text
              style={{
                padding: 16,
              }}>
              AMB
            </Text>
          </TouchableOpacity>
          <View style={[styles.otherView, {backgroundColor: signalColorTwo}]} />
          <Text style={styles.textMiddle}>{countTwo}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textMiddle}>{countThree}</Text>
          <View
            style={[styles.otherView, {backgroundColor: signalColorFour}]}
          />
          <TouchableOpacity
            style={styles.otherButton}
            onPress={() => changeManually(4)}>
            <Text
              style={{
                padding: 16,
              }}>
              AMB
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.uperView}>
        <Text style={{alignItems: 'center', marginVertical: 8}}>
          {countFour}
        </Text>
        <View
          style={[styles.secondView, {backgroundColor: signalColorThree}]}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeManually(3)}>
          <Text
            style={{
              padding: 16,
            }}>
            AMB
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
