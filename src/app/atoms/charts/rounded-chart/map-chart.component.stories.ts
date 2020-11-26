import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MapChartComponent } from './map-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { SelectInputWithInitialValueComponent } from '../../inputs/select-input/select-input-with-initial-value/select-input-with-initial-value.component';
import { NgSelectModule } from '@ng-select/ng-select';


const props = {
  percent: { control: 'array' },
};

export default {
  title: 'Atoms/Charts',
  decorators: [
    moduleMetadata({
      declarations: [
        MapChartComponent,
        SelectInputWithInitialValueComponent
      ],
      providers: [],
      imports: [NgApexchartsModule, NgSelectModule],
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
