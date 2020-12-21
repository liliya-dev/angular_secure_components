import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MapChartComponent } from './map-chart.component';
import { ReportsSelectWithInitialValueComponent } from '../../../Atoms/inputs/reports-select-with-initial-value/reports-select-with-initial-value.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {};

export default {
  title: 'Reports/Molecules/Charts',
  decorators: [
    moduleMetadata({
      declarations: [
        MapChartComponent,
        ReportsSelectWithInitialValueComponent
      ],
      providers: [],
      imports: [NgSelectModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<MapChartComponent> = (args: MapChartComponent) => ({
  component: MapChartComponent,
  props: args,
});

export const Map = Template.bind({});
Map.args = {
  countriesData: {
    europe: [{ id: "UA", name: "Ukraine", value: 900 }, { id: "PL", name: "Poland", value: 700 }, { id: "FR", name: "France", value: 1230 }],
    northAmerica: [{ id: "US", name: "USA", value: 200 }],
    southAmerica: [{ id: "BR", name: "Brasil", value: 960 }],
    asia: [],
    australia: [{ id: "AU", name: "Australia", value: 764 }],
    africa: [],
  }
};
