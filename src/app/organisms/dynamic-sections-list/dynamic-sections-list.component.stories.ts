import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DynamicSectionsListComponent } from './dynamic-sections-list.component';
import { CustomizedElementComponent } from '../../molecules/customized-element/customized-element.component';
import { DynamicTableComponent } from '../../atoms/tables/dynamic-table/dynamic-table.component';
import { DarkAddButtonComponent } from '../../atoms/buttons/add-buttons/dark-add-button/dark-add-button.component';
import { DynamicListComponent } from '../../atoms/tables/dynamic-list/dynamic-list.component';
import { DynamicTextComponent } from '../../atoms/text/dynamic-text/dynamic-text.component';
import { AddComponent } from '../../molecules/customized-element/add-dynamic-component/add-dynamic.component';
import { AddDirective } from '../../molecules/customized-element/add-dynamic-component/add.directive';
import { AddService } from '../../molecules/customized-element/add-dynamic-component/add.service';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { SmallLightAddButtonComponent } from '../../atoms/buttons/add-buttons/small-light-add-button/small-light-add-button.component';
import { simpleButtonComponent } from '../../atoms/buttons/simpleButton/simpleButton.component';

const props = {};

export default {
  title: 'Organisms/Sections List',
  decorators: [
    moduleMetadata({
    declarations: [
      AddDirective,
      AddComponent,
      SmallLightAddButtonComponent,
      DynamicListComponent,
      DynamicTextComponent,
      DynamicTableComponent,
      DarkAddButtonComponent,
      CustomizedElementComponent,
      DynamicSectionsListComponent,
      simpleButtonComponent
    ],
    providers: [AddService],
    imports: [CommonModule, TextareaAutosizeModule],
    entryComponents: [
      DynamicTableComponent,
      DynamicListComponent,
      DynamicTextComponent,
      CustomizedElementComponent
    ],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DynamicSectionsListComponent> = (args: DynamicSectionsListComponent) => ({
  component: DynamicSectionsListComponent,
  props: args,
});

const text = `For the purpose of this Privacy Policy, we are a Data Controller of your personal information. 
Our legal basis for collecting and using your personal information, as described in this Privacy Policy, 
depends on the information we collect and the specific context in which we collect it. We may process your
personal information because:`

export const Dynamic = Template.bind({});
Dynamic.args = {
  initialSectionsList: [
  { 
    initialState: [
      { type: 'text', dataFromParent: { title: text }},
      { type: 'list', dataFromParent: { listTitle: 'Put list title', titles: [
        'We need to perform a contract with you, such as when you create a Policy with us',
        'You have given us permission to do so',
        'The processing is in our legitimate interests and its not overridden by your right'
      ] }},
      { type: 'text', dataFromParent: { title: text }},
      { type: 'table', dataFromParent: { heads: ['text 1'], tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }] }}
    ],
    title: `New section 1`,
    sectionId: Date.now() + 1,
  },
  { 
    initialState: [
      { type: 'text', dataFromParent: { title: text }},
      { type: 'text', dataFromParent: { title: text }},
      { type: 'text', dataFromParent: { title: text }},
      { type: 'table', dataFromParent: { heads: ['text 1'], tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }] }}
    ],
    title: `New section 2`,
    sectionId: Date.now() + 2,
  },
  { 
    initialState: [
      { type: 'text', dataFromParent: { title: text }},
      { type: 'text', dataFromParent: { title: text }},
      { type: 'text', dataFromParent: { title: text }},
      { type: 'table', dataFromParent: { heads: ['text 1'], tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }] }}
    ],
    title: `New section 3`,
    sectionId: Date.now() + 3,
  },
  { 
    initialState: [
      { type: 'text', dataFromParent: { title: text }},
      { type: 'text', dataFromParent: { title: text }},
      { type: 'list', dataFromParent: { listTitle: 'Put list title', titles: ['Type text here'] }},
      { type: 'table', dataFromParent: { heads: ['text 1'], tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }] }}
    ],
    title: `New section 4`,
    sectionId: Date.now() + 4,
  }]
};

