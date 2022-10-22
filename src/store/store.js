import { reactive } from 'vue'

export const store = reactive({
  // Static button data
  buttonWhatWeDo: {
    title: 'What we do',
    description: 'More than tech.',
    sectionName: 'WhatWeDoSection',
    // Styles
    mainColor: '#323ff8',
    bgColor: 'bg-[#323ff8]',
    textColor: 'text-[#fefefe]',
    rounded: 'rounded-tl-[30px]',
    animationColor: 'rgb(234 225 254 / 20%)',
    animationDirection: 'alternate',
  },
  buttonStories: {
    title: 'Stories',
    description: 'Our customer and company stories',
    sectionName: 'StoriesSection',
    // Styles
    mainColor: '#f77c2f',
    bgColor: 'bg-[#f77c2f]',
    textColor: 'text-[#fefefe]',
    rounded: 'rounded-tr-[30px]',
    animationColor: 'rgb(234 225 254 / 20%)',
    animationDirection: 'alternate-reverse',
  },
  buttonAbout: {
    title: 'About',
    description: 'Our company history',
    sectionName: 'AboutSection',
    // Styles
    mainColor: '#e8e0fe',
    bgColor: 'bg-[#e8e0fe]',
    textColor: 'text-[#6f74cf]',
    rounded: 'rounded-bl-[30px]',
    animationColor: 'rgb(50 63 248 / 20%)',
    animationDirection: 'alternate',
  },
  buttonHelp: {
    title: 'Help',
    description: 'FAQ and Support',
    sectionName: 'HelpSection',
    // Styles
    mainColor: '#6f74cf',
    bgColor: 'bg-[#6f74cf]',
    textColor: 'text-[#fefefe]',
    rounded: 'rounded-br-[30px]',
    animationColor: 'rgb(234 225 254 / 20%)',
    animationDirection: 'alternate-reverse',
  },

  // Default section
  selectedSection: 'HomeSection',
  menuBorder: '',

  // Actions
  changeSelectedSection(newSection, menuBorder) {
    this.selectedSection = newSection
    console.log('HERE => ', this);
    this.menuBorder = menuBorder
  }
})