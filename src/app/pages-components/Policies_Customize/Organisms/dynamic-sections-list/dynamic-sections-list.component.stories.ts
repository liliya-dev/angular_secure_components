import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesDynamicSectionsListComponent } from './dynamic-sections-list.component';
import { PoliciesCustomizedElementComponent } from '../../Molecules/customized-element/customized-element.component';
import { PoliciesDynamicTableComponent } from '../../Atoms/dynamic-table/dynamic-table.component';
import { PoliciesDarkAddButtonComponent } from '../../Atoms/buttons/dark-add-button/dark-add-button.component';
import { PoliciesDynamicListComponent } from '../../Atoms/dynamic-list/dynamic-list.component';
import { PoliciesDynamicTextComponent } from '../../Atoms/dynamic-text/dynamic-text.component';
import { AddComponent } from '../../Molecules/customized-element/add-dynamic-component/add-dynamic.component';
import { AddDirective } from '../../Molecules/customized-element/add-dynamic-component/add.directive';
import { AddService } from '../../Molecules/customized-element/add-dynamic-component/add.service';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { PoliciesSmallLightAddButtonComponent } from '../../Atoms/buttons/small-light-add-button/small-light-add-button.component';
import { SimplePolicyGeneratorButtonComponent } from '../../Atoms/buttons/simple-policy-generator-button/simple-policy-generator-button.component';

const props = {};

export default {
  title: 'Policies Customize/Organisms',
  decorators: [
    moduleMetadata({
    declarations: [
      AddDirective,
      AddComponent,
      PoliciesSmallLightAddButtonComponent,
      PoliciesDynamicTextComponent,
      PoliciesDynamicListComponent,
      PoliciesDarkAddButtonComponent,
      PoliciesCustomizedElementComponent,
      PoliciesDynamicTableComponent,
      PoliciesDynamicSectionsListComponent,
      SimplePolicyGeneratorButtonComponent
    ],
    providers: [AddService],
    imports: [CommonModule, TextareaAutosizeModule],
    entryComponents: [
      PoliciesDynamicTextComponent,
      PoliciesDynamicListComponent,
      PoliciesCustomizedElementComponent,
      PoliciesDynamicTableComponent,
    ],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PoliciesDynamicSectionsListComponent> = (args: PoliciesDynamicSectionsListComponent) => ({
  component: PoliciesDynamicSectionsListComponent,
  props: args,
});

const text = `For the purpose of this Privacy Policy, we are a Data Controller of your personal information. Our legal basis for collecting and using your personal information, as described in this Privacy Policy, depends on the information we collect and the specific context in which we collect it. We may process your personal information because:`

export const SectionsList = Template.bind({});
SectionsList.args = {
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

