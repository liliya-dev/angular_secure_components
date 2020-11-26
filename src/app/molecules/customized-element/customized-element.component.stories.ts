import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CustomizedElementComponent } from './customized-element.component';
import { DynamicTableComponent } from '../../atoms/tables/dynamic-table/dynamic-table.component';
import { DarkAddButtonComponent } from '../../atoms/buttons/add-buttons/dark-add-button/dark-add-button.component';
import { DynamicListComponent } from '../../atoms/tables/dynamic-list/dynamic-list.component';
import { DynamicTextComponent } from '../../atoms/text/dynamic-text/dynamic-text.component';
import { AddComponent } from './add-dynamic-component/add-dynamic.component';
import { AddDirective } from './add-dynamic-component/add.directive';
import { AddService } from './add-dynamic-component/add.service';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { SmallLightAddButtonComponent } from '../../atoms/buttons/add-buttons/small-light-add-button/small-light-add-button.component';

const props = {};

export default {
  title: 'Molecules/Customized Block',
  decorators: [
    moduleMetadata({
      declarations: [
        AddComponent,
        AddDirective,
        CustomizedElementComponent,
        DynamicTextComponent,
        DynamicTableComponent,
        SmallLightAddButtonComponent,
        DarkAddButtonComponent,
        DynamicListComponent
      ],
      providers: [AddService],
      entryComponents: [
        DynamicTableComponent,
        DynamicListComponent,
        DynamicTextComponent
     ],
      imports: [TextareaAutosizeModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CustomizedElementComponent> = (args: CustomizedElementComponent) => ({
  component: CustomizedElementComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
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