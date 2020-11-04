import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TransparentTableComponent } from './transparent-table.component';
import { RoundIconComponent } from '../../icons/round-icon/round-icon.component';
import { TextWithGradientBackComponent } from '../../text/text-with-gradient-back/text-with-gradient-back.component';

const props = {};

export default {
  title: 'Atoms/Tables',
  decorators: [
    moduleMetadata({
      declarations: [
        TransparentTableComponent,
        RoundIconComponent,
        TextWithGradientBackComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<TransparentTableComponent> = (args: TransparentTableComponent) => ({
  component: TransparentTableComponent,
  props: args,
});

export const First = Template.bind({});
First.args = {
  heads: ["name", "host", "expirity", "service", "type", "blocking", "purpose"],
  data: [{
    name: "IDE",
    host: ".doubleclick.net",
    expirity: "1 year",
    service: "Doubleclick",
    type: "Third party",
    blocking: true,
    purpose: "This cookie carries out information about how the end user uses the website and any advertising that the and user may have seen before visiting the said website."
  },
  {
    name: "fr",
    host: "facebook.com",
    expirity: "2 month",
    service: "Facebook",
    type: "Third party",
    blocking: false,
    purpose: "Contains browser and user unique ID combinator, used for targeted advertising."
  },
  {
    name: "IDE",
    host: ".doubleclick.net",
    expirity: "1 year",
    service: "Doubleclick",
    type: "Third party",
    blocking: true,
    purpose: "This cookie carries out information about how the end user uses the website and any advertising that the and user may have seen before visiting the said website."
  }
],
  mainColumn: "name",
};

export const Second = Template.bind({});
Second.args = {
  heads: ["name", "hq", "privacy", "DPA", "subprocessors", "hosting patterns", "data centers", "certifications"],
  data: [{
      name: "WhatsApp",
      hq: {
        type: 'image',
        path: 'assets/images/usaFlag.png'
      },
      privacy: "Privacy",
      DPA: "DPA",
      subprocessors: "",
      'hosting patterns': {
        type: 'gradientText',
        data: ['Facebook']
      },
      'data centers': {
        type: 'gradientText',
        data: ['EU', 'US']
      },
      certifications: {
        type: 'gradientText',
        data: ['EU-U.S. Privacy Shield', 'Swiss-U.SPrivacy Shield']
      },
    },
    {
      name: "Zoho",
      hq: {
        type: 'image',
        path: 'assets/images/usaFlag.png'
      },
      privacy: "Privacy",
      DPA: "",
      subprocessors: "Subprocessors",
      'hosting patterns': {
        type: 'gradientText',
        data: ['AWS', 'Google Cloud']
      },
      'data centers': {
        type: 'gradientText',
        data: ['EU', 'US']
      },
      certifications: {
        type: 'gradientText',
        data: ['ISO 27001']
      },
    },
    {
      name: "Zendesk",
      hq: {
        type: 'image',
        path: 'assets/images/usaFlag.png'
      },
      privacy: "Privacy",
      DPA: "",
      subprocessors: "Subprocessors",
      'hosting patterns': {
        type: 'gradientText',
        data: []
      },
      'data centers': {
        type: 'gradientText',
        data: ['EU', 'US']
      },
      certifications: {
        type: 'gradientText',
        data: []
      },
    },
    {
      name: "UVdesk Helpdesk",
      hq: {
        type: 'image',
        path: 'assets/images/usaFlag.png'
      },
      privacy: "Privacy",
      DPA: "",
      subprocessors: "",
      'hosting patterns': {
        type: 'gradientText',
        data: []
      },
      'data centers': {
        type: 'gradientText',
        data: []
      },
      certifications: {
        type: 'gradientText',
        data: ['EU-U.S. Privacy Shield']
      },
    },
    {
      name: "Woodpecker.co",
      hq: {
        type: 'image',
        path: 'assets/images/usaFlag.png'
      },
      privacy: "Privacy",
      DPA: "DPA",
      subprocessors: "Subprocessors",
      'hosting patterns': {
        type: 'gradientText',
        data: ['AWS']
      },
      'data centers': {
        type: 'gradientText',
        data: ['EU', 'US']
      },
      certifications: {
        type: 'gradientText',
        data: ['EU-U.S. Privacy Shield']
      },
    },
    {
      name: "WhatElse",
      hq: {
        type: 'image',
        path: 'assets/images/usaFlag.png'
      },
      privacy: "Privacy",
      DPA: "DPA",
      subprocessors: "Subprocessors",
      'hosting patterns': {
        type: 'gradientText',
        data: ['AWS']
      },
      'data centers': {
        type: 'gradientText',
        data: ['US']
      },
      certifications: {
        type: 'gradientText',
        data: []
      },
    },
  ],
  mainColumn: "name",
};