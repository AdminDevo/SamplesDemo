/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Modal,
  TextInput,
} from 'react-native';
import styles from './styles';
import SegmentedControl from '../Components';

var timer = null;
const Home = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [duration, setDuration] = useState(10);
  const [flowDuration, setFlowDuration] = useState(10);
  const [flowType, setFlowType] = useState(0);
  const [manualFlowType, setManualFlowType] = useState(false);

  const handleTabsChange = index => {
    console.log(index);
    setTabIndex(index);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => showSettings()} title="Settings" />
      ),
    });
  }, [navigation]);

  const showSettings = () => {
    setShowModal(true);
  };

  const [timeLeft, setTimeLeft] = useState(flowDuration);

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        start();
        return false;
      }
      setTimeLeft(timeLeft - 1);
      console.log('vikram', timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const start = () => {
    setTimeLeft(flowDuration);
    clearTimeout(timer);
    startTimer();
    if (manualFlowType == true) {
      setManualFlowType(false);
      alert('ddd');
    } else {
      if (flowType == 0) {
        if (activeTab == 1) {
          setActiveTab(4);
        } else if (activeTab == 2) {
          setActiveTab(1);
        } else if (activeTab == 3) {
          setActiveTab(2);
        } else if (activeTab == 4) {
          setActiveTab(3);
        }
      } else if (flowType == 1) {
        if (activeTab == 1) {
          setActiveTab(2);
        } else if (activeTab == 2) {
          setActiveTab(3);
        } else if (activeTab == 3) {
          setActiveTab(4);
        } else if (activeTab == 4) {
          setActiveTab(1);
        }
      } else if (flowType == 2) {
        if (activeTab == 1) {
          setActiveTab(3);
        } else if (activeTab == 2) {
          setActiveTab(4);
        } else if (activeTab == 3) {
          setActiveTab(2);
        } else if (activeTab == 4) {
          setActiveTab(1);
        }
      }
    }
  };

  const changeManually = signalNumber => {
    setActiveTab(signalNumber, setManualFlowType(false), start());
  };
  const onPressModolClose = () => {
    setShowModal(false);
  };
  const onPressUpdate = () => {
    if (duration && duration < 301 && duration >= 10) {
      console.log(duration);
      setFlowType(tabIndex);
      setFlowDuration(duration);
      setTimeLeft(duration);
      onPressModolClose();
      alert('Updated');
    } else {
      // eslint-disable-next-line no-alert
      alert('Duration should be 10 to 300');
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={styles.hintText}>{`Signal Duration is:${flowDuration}`}</Text>
      <Text style={styles.hintText}>{`Signal Rotation is:${
        flowType == 0
          ? 'Clockwise'
          : flowType == 1
          ? 'Anti-Clockwise'
          : 'Up to Down - Left to Right'
      }`}</Text>
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
        <View
          style={[
            styles.secondView,
            {backgroundColor: activeTab == 1 ? 'green' : 'red'},
          ]}
        />
        <Text style={{alignItems: 'center', marginVertical: 8}}>
          {activeTab == 1 ? timeLeft : 'Wait'}
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
          <View
            style={[
              styles.otherView,
              {backgroundColor: activeTab == 2 ? 'green' : 'red'},
            ]}
          />
          <Text style={styles.textMiddle}>
            {activeTab == 2 ? timeLeft : 'Wait'}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textMiddle}>
            {activeTab == 4 ? timeLeft : 'Wait'}
          </Text>
          <View
            style={[
              styles.otherView,
              {backgroundColor: activeTab == 4 ? 'green' : 'red'},
            ]}
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
          {activeTab == 3 ? timeLeft : 'Wait'}
        </Text>
        <View
          style={[
            styles.secondView,
            {backgroundColor: activeTab == 3 ? 'green' : 'red'},
          ]}
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
      <Modal
        //backdropOpacity={0.3}
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {}}>
        <View style={styles.modalView}>
          <View style={styles.subModalView}>
            <Text style={styles.hintText}>Select the Signal rotation</Text>
            <Text style={styles.hintText}>
              {'1.Clockwise 2.Anti-Clockwise 3.Up to Down - Left to Right'}
            </Text>
            <SegmentedControl
              tabs={['Clock', 'Anti-C', 'U-D , L-R']}
              currentIndex={tabIndex}
              onChange={handleTabsChange}
              segmentedControlBackgroundColor="#86c4fd"
              activeSegmentBackgroundColor="#0482f7"
              activeTextColor="white"
              textColor="black"
              paddingVertical={18}
            />
            <Text style={styles.hintText}>Enter Signal Duration</Text>
            <TextInput
              maxLength={3}
              keyboardType="number-pad"
              underlineColorAndroid="transparent"
              value={String(duration)}
              placeholder="Enter The Time Duration"
              returnKeyType={'done'}
              onChangeText={text => setDuration(text)}
              style={styles.InputTextStyle}
            />
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={onPressUpdate}
              underlayColor="#fff">
              <Text style={styles.loginText}>UPDATE</Text>
            </TouchableOpacity>
            <Button
              title={'Cancel'}
              onPress={onPressModolClose}
              textStyle={{marginHorizontal: 30}}
              color="red"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Home;
