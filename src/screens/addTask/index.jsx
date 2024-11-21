/* eslint-disable react/react-in-jsx-scope */
import {Formik} from 'formik';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Input, Button, RadioGroup, Radio} from '@ui-kitten/components';
import CustomDatePicker from '../../components/uı/CustomDatePicker';
import {Dimensions} from 'react-native';
import themeColors from '../../theme';
import taskSchema from '../../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../utils/routesNames';

const AddTask = () => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('screen');

  const saveTask = async values => {
    try {
      await AsyncStorage.setItem('task', JSON.stringify(values));
    } catch (error) {
      console.error('Task kaydedilirken hata oluştu:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          description: '',
          startDate: null,
          endDate: null,
          category: null,
        }}
        validationSchema={taskSchema}
        onSubmit={async values => {
          await saveTask(values);
          navigation.navigate(screens.TASKS);
        }}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View>
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              status={errors.title ? 'danger' : 'basic'}
              label={'Title'}
              placeholder="Enter task title"
              onChangeText={handleChange('title')}
              caption={errors.title}
            />

            <Input
              multiline
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'Description'}
              status={errors.description ? 'danger' : 'basic'}
              caption={errors.description}
              placeholder=""
              onChangeText={handleChange('description')}
            />

            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              label="Start Date"
              onSelectDate={date => setFieldValue('startDate', date)}
              status={errors.startDate ? 'danger' : 'basic'}
              caption={errors.startDate}
            />

            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              label="End Date"
              onSelectDate={date => setFieldValue('endDate', date)}
              status={errors.endDate ? 'danger' : 'basic'}
              caption={errors.endDate}
            />
            <ScrollView
              style={{
                height: height * 0.15,
                marginVertical: 15,
                borderRadius: 10,
              }}>
              <RadioGroup
                style={{
                  backgroundColor: themeColors.textColor,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                }}
                selectedIndex={values.category}
                onChange={index => setFieldValue('category', index)}>
                <Radio status="warning" style={styles.radioStyle}>
                  Software
                </Radio>
                <Radio status="warning" style={styles.radioStyle}>
                  Design
                </Radio>
                <Radio status="warning" style={styles.radioStyle}>
                  Operation
                </Radio>
                <Radio status="warning" style={styles.radioStyle}>
                  Home Work
                </Radio>
              </RadioGroup>
            </ScrollView>
            <Button
              status="warning"
              style={{marginTop: 30}}
              onPress={handleSubmit}>
              CREATE
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 10},
  radioStyle: {
    borderBottomColor: themeColors.background,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginVertical: 13,
  },
});
