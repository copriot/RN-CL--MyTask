/* eslint-disable react/react-in-jsx-scope */
import {Formik} from 'formik';
import {StyleSheet, View} from 'react-native';
import {Input, Button, RadioGroup, Radio, Text} from '@ui-kitten/components';
import CustomDatePicker from '../../components/uı/CustomDatePicker';
import {Alert} from 'react-native';
import themeColors from '../../theme';
const AddTask = () => {
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
        onSubmit={values => Alert.alert(JSON.stringify(values, null, 2))}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View>
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              label={'Title'}
              placeholder=""
              onChangeText={handleChange('title')}
            />
            <Input
              multiline
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'Description'}
              placeholder=""
              onChangeText={handleChange('description')}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              label={'Start Date'}
              onSelectDate={date => setFieldValue('startDate', date)}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              label={'End Date'}
              onSelectDate={date => setFieldValue('endDate', date)}
            />
            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="warning">Software</Radio>
              <Radio status="warning">Design</Radio>
              <Radio status="warning">Operation</Radio>
            </RadioGroup>
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
  radioStyle: {textColor: themeColors.textColor},
});
