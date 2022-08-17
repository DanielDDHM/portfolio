import { StyleSheet } from 'react-native';

export const headerStyle = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    border: '1px solid white',
    fontFamily: 'Times New Roman, Times, serif',
  },
  nav_link_li: {
    fontSize: '30px',
    border: '2px solid #395b64',
    borderRadius: '15%',
    padding: '5px',
  },

  header_logo: {
    gap: '25px',
    fontSize: '30px',
  },

  header_div: {
    color: 'lightblue',
  },

  nav_link: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyleType: 'none',
    gap: '25px',
  },
});
