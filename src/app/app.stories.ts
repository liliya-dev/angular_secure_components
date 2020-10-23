import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent } from "./app.component";
import { AngularSvgIconModule } from 'angular-svg-icon';


const props = {
};

export default {
    title: 'App',
    decorators: [
        moduleMetadata({
        declarations: [
            AppComponent
        ],
        imports: [CommonModule, AngularSvgIconModule.forRoot()],
        }),
    ],
    argTypes: props,
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
    component: AppComponent,
    props: args,
});

export const Mobile = Template.bind({});
Mobile.args = {
    isMobile: true,
};


export const Desktop = Template.bind({});
Desktop.args = {
    isMobile: false,
};

