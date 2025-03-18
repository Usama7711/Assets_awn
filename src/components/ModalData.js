// Import your indicators or assets
import Wavy_Check from '../assets/modal/Wavy_Check.svg';
import Wavy_Warning from "../assets/modal/Wavy_Warning.svg";
import Arrows_Reload_01 from '../assets/modal/Arrows_Reload_01.svg';
import delet from '../assets/modal/Delete Option.svg';
import Circle_Check from '../assets/modal/Circle_Check.svg';
import Stop_Sign from '../assets/modal/Stop_Sign.svg';

const modals = [
    {
        indicator: Wavy_Check,
        heading: 'Requests Added Successfully!',
        Details: 'The request has been removed from the system. All related data has been deleted.',
        leftBTN: 'Back to Request',
        LeftColorBTN: "greenBTN",
        colorCode: 'green',
    },
    {
        indicator: Wavy_Warning,
        heading: 'Deactivate Requests!',
        Details: 'Are you sure you want to deactivate this Requests? Once deactivated, the Employee will lose access to their account until reactivated.',
        leftBTN: 'Yes Deactivate',
        LeftColorBTN: "redBTN",
        rightBTN: 'Cancel',
        colorCode: 'red',
        conformationData: '6',
    },
    {
        indicator: Arrows_Reload_01,
        heading: 'Reactivate Employee',
        Details: 'Restore access for an inactive employee. Confirm the details below to reactivate their profile and allow them to resume their activities.',
        leftBTN: 'Yes Reactivate',
        LeftColorBTN: "orgBTN",
        rightBTN: 'Cancel',
        colorCode: 'orange',
        conformationData: '4',
    },
    {
        indicator: delet,
        heading: 'Requests Deleted Successfully!',
        Details: 'The request has been removed from the system. All related data has been deleted.',
        leftBTN: 'Back to Request',
        LeftColorBTN: "greenBTN",
        colorCode: 'green',
        conformationData: '',
    },
    {
        indicator: Circle_Check,
        heading: 'Reactivation Successful!',
        Details: 'The employee profile has been successfully reactivated and they now have access to the platform.',
        leftBTN: 'Back to Request',
        LeftColorBTN: "greenBTN",
        colorCode: 'green',
        conformationData: '',
    },
    {
        indicator: Wavy_Warning,
        heading: 'Are you sure you want to delete this Requests?',
        Details: 'This action will permanently remove the Requests and all associated data. This cannot be undone.',
        leftBTN: 'Yes Delete',
        LeftColorBTN: "redBTN",
        rightBTN: 'Cancel',
        colorCode: 'red',
        conformationData: '3',
    },
    {
        indicator: Stop_Sign,
        heading: 'Requests Deactivated Successfully!',
        Details: 'The Employee has been deactivated. They no longer have access to their account.',
        leftBTN: 'Back to Request',
        LeftColorBTN: "greenBTN",
        colorCode: 'green',
        conformationData: '',
    },
];

export default modals;
