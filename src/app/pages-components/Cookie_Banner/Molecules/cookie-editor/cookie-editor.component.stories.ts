import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CookieEditorComponent } from './cookie-editor.component';
import { CookiePrimaryButtonComponent } from '../../Atoms/buttons/cookie-primary-button/cookie-primary-button.component';
import { CookieSecondaryButtonComponent } from '../../Atoms/buttons/cookie-secondary-button/cookie-secondary-button.component';

const props = {};

export default {
  title: 'Cookie Banner/Moleules',
  decorators: [
    moduleMetadata({
      declarations: [
        CookieEditorComponent,
        CookieSecondaryButtonComponent,
        CookiePrimaryButtonComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CookieEditorComponent> = (args: CookieEditorComponent) => ({
  component: CookieEditorComponent,
  props: args,
});

export const Editor = Template.bind({});
Editor.args = {
  intialHTMLContent: `
  <section class="buttons">
    <h1>Button Hover Effects</h1>
  <div class="container">
  
  <a href="https://twitter.com/Dave_Conner" class="btn btn-1">
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%"/>
    </svg>
    Hover
  </a>
  <!--svg hover inspired by https://codepen.io/karimbalaa/pen/qERbBY?editors=110 -->
  <!--End of Button 1 -->
  `,
  intialCSSContent: `
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);
  //colors
  $red: #E1332D;
  $white: #fff;

  //base styles

  * {
    box-sizing: inherit;
    transition-property: all;
    transition-duration: .6s;
    transition-timing-function: ease;
  }

  .button {
    width: 100%;
    height: 100%;
    
    font-family: 'Helvetica', 'open-sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
  }
  `,
  onCSSEdit: () => console.log('css editor works'),
  onHTMLEdit: () => console.log('html editor works'),
  onClose: () => console.log('component closed'),
  onSave: () => console.log('component saved'),
};