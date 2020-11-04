import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RollUpComponent } from './roll-up.component';
import { RoundIconComponent } from '../../atoms/icons/round-icon/round-icon.component';
import { TextWithGradientBackComponent } from '../../atoms/text/text-with-gradient-back/text-with-gradient-back.component';
import { TransparentTableComponent } from '../../atoms/tables/transparent-table/transparent-table.component';

const props = {};

export default {
  title: 'Molecules/Roll up ',
  decorators: [
    moduleMetadata({
      declarations: [
        RollUpComponent,
        TransparentTableComponent,
        TextWithGradientBackComponent,
        RoundIconComponent 
      ],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RollUpComponent> = (args: RollUpComponent) => ({
  component: RollUpComponent,
  props: args,
  template: `
  <app-roll-up [title]="title" [number]="number">
    <app-transparent-table 
      [mainColumn]="mainColumn"
      [data]="data"
      [heads]="heads"
    >
      </app-transparent-table>
  </app-roll-up>
  `,
});

export const WithTable = Template.bind({});
WithTable.args = {
  mainColumn: 'name',
  title: 'Cookies',
  number: 6,
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
};

