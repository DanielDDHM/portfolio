import { StyleSheet } from 'react-native';

const default_experience = {
    container:{
        width: '75%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    title:{

    },
    cards:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        gap: '20px',
        padding:'10px'
    }
};

export const experience_style_mobile = StyleSheet.create({});

export const experience_style_tablet = StyleSheet.create({});

export const experience_style_laptop = StyleSheet.create({
    ...default_experience
});

export const experience_style_desktop = StyleSheet.create({
    ...default_experience
});

export const experience_style_large = StyleSheet.create({
    ...default_experience
});
