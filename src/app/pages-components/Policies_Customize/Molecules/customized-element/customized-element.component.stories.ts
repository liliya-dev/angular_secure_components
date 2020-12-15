import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesCustomizedElementComponent } from './customized-element.component';
import { PoliciesDynamicTableComponent } from '../../Atoms/dynamic-table/dynamic-table.component';
import { PoliciesDarkAddButtonComponent } from '../../Atoms/buttons/dark-add-button/dark-add-button.component';
import { PoliciesDynamicListComponent } from '../../Atoms/dynamic-list/dynamic-list.component';
import { PoliciesDynamicTextComponent } from '../../Atoms/dynamic-text/dynamic-text.component';
import { AddComponent } from './add-dynamic-component/add-dynamic.component';
import { AddDirective } from './add-dynamic-component/add.directive';
import { AddService } from './add-dynamic-component/add.service';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { PoliciesSmallLightAddButtonComponent } from '../../Atoms/buttons/small-light-add-button/small-light-add-button.component';

const props = {};

export default {
  title: 'Policies Customize/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        AddComponent,
        AddDirective,
        PoliciesCustomizedElementComponent,
        PoliciesDynamicTableComponent,
        PoliciesDynamicListComponent,
        PoliciesDynamicTextComponent,
        PoliciesDarkAddButtonComponent,
        PoliciesSmallLightAddButtonComponent
      ],
      providers: [AddService],
      entryComponents: [
        PoliciesDynamicTableComponent,
        PoliciesDynamicListComponent,
        PoliciesDynamicTextComponent,
     ],
      imports: [TextareaAutosizeModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PoliciesCustomizedElementComponent> = (args: PoliciesCustomizedElementComponent) => ({
  component: PoliciesCustomizedElementComponent,
  props: args,
});

export const DynamicSection = Template.bind({});
DynamicSection.args = {
  initialState: [
    {
      type: 'text',
      dataFromParent: {
        title: `For the purpose of this Privacy Policy, we are a Data Controller of your personal information. Our legal basis for collecting and using your personal information, as described in this Privacy Policy, depends on the information we collect and the specific context in which we collect it. We may process your personal information because:`
      }
    },
    {
      type: 'list',
      dataFromParent: {
        listTitle: 'list title',
        titles: ['first item', 'second item']
      }
    },
    {
      type: 'list',
      dataFromParent: {
        titles: ['first item', 'second item']
      }
    },
    {
      type: 'table',
      dataFromParent: {
        heads: ['text 1'],
        tableData: [ 
          { 'text 1' : '1.1. Text' },
     
        ]
      }
    }
  ]
};