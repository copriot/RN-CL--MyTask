import {DocumentUpload, Driving, NoteText, Xrp} from 'iconsax-react-native';
import themeColors from '../theme';

export const tasksValues = [
  {
    status: 1,
    title: 'Ongoing',
    color: themeColors.ONGOING,
    icon: <Driving size="32" color={themeColors.textColor} />,
  },
  {
    status: 2,
    title: 'Pending',
    color: themeColors.PENDING,
    icon: <DocumentUpload size="32" color={themeColors.textColor} />,
  },
  {
    status: 3,
    title: 'Complated',
    color: themeColors.COMPLATED,
    icon: <NoteText size="32" color={themeColors.textColor} />,
  },
  {
    status: 4,
    title: 'Cancel',
    color: themeColors.CANCEL,
    icon: <Xrp size="32" color={themeColors.textColor} />,
  },
];

const status = {
  ONGOING: 1,
  PENDING: 2,
  COMPLETED: 3,
  CANCEL: 4,
};
export default status;
