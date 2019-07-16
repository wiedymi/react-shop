import React from 'react'
import local from '../localization/index'

export default React.createContext({
    local,
    language: 'en',
    setLang: (lang) => {
        this.language = lang;
        this.local.setLanguage(lang);
    }
});