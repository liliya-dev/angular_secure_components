import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent } from './app.component';
import  { IconContainerComponent } from './atoms/iconContainer/iconContainer.component';

const props = {

};

export default {
  title: 'TaskList',
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [AppComponent, IconContainerComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<AppComponent> = (args: AppComponent) => ({
    component: AppComponent,
    props: args,
  });

  export const f = Template.bind({});
  f.args = {
    title: "next",
    classes: "btn-app--asimetric btn-app btn-grad fs-16-sofia-800"
  };

