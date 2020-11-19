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
      DynamicSectionsListComponent
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

export const Dynamic = Template.bind({});
Dynamic.args = {};

