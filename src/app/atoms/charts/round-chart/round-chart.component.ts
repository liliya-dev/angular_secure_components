import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js';

Chart.defaults.RoundedDoughnut = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
    draw: function(ease) {
      const ctx = this.chart.ctx;
      const easingDecimal = ease || 1;
      const arcs = this.getMeta().data;
      Chart.helpers.each(arcs, function(arc, i) {
          arc.transition(easingDecimal).draw();
          const pArc = arcs[i === 0 ? arcs.length - 1 : i - 1];
          const pColor = pArc._view.backgroundColor;
          const vm = arc._view;
          const radius = (vm.outerRadius + vm.innerRadius) / 2;
          const thickness = (vm.outerRadius - vm.innerRadius) / 2;
          const startAngle = Math.PI - vm.startAngle - Math.PI / 2;
          const angle = Math.PI - vm.endAngle - Math.PI / 2;

          ctx.save();
          ctx.translate(vm.x, vm.y);
          ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
          ctx.beginPath();
          ctx.arc(radius * Math.sin(startAngle), radius * Math.cos(startAngle), thickness, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = vm.backgroundColor;
          ctx.beginPath();
          ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
          ctx.fill();
          ctx.restore();
      });
    }
});

interface Data {
  title: string,
  value: number
}

@Component({
  selector: 'app-round-chart',
  templateUrl: './round-chart.component.html',
  styleUrls: ['./round-chart.component.scss']
})
export class RoundChartComponent implements OnInit {
  @Input() data: Data[];
  @Input() addWord: string;

  isTipVisible: boolean = false;
  values: number[];
  colorsList: string[] = ['#9ED0E0', '#612C83', '#509AAF', '#F8BD5A', '#FF9F68', '#645FC'];
  mainValue: number;
  mainLabel: string;
  tipsTop: number = 0;
  tipsLeft : number= 0;
  
  createChart() {
    const ctx = <HTMLCanvasElement>document.querySelector('.donut-rounded-chart__canvas')
    const passPropsToUpdateMainValue = (index) => {
      this.isTipVisible = true;
      this.updateMainValue(index)
    };
    const passPropsToHideTooltip = () => this.isTipVisible = false;
    new Chart(ctx, {
      type: 'RoundedDoughnut',
      data: {
        datasets: [
          {
            data: this.values,
            backgroundColor: this.colorsList,
            borderWidth: 0
          }
        ]
      },
      options: { 
        events: ['mousemove', 'mouseout'],
        onHover: (event) => {
          if (this.isTipVisible) {
            this.setCoordinates(event.pageY, event.pageX)
          }
        },
        cutoutPercentage: 81,
        tooltips: {
          enabled: false,
          custom: function(tooltipModel) {
            if (tooltipModel.dataPoints) {
              passPropsToUpdateMainValue(tooltipModel.dataPoints[0].index)
            } else {
              passPropsToHideTooltip ()
            }
          }
        }
      }
    });
  }

  updateMainValue (index: number) {
    this.mainValue = this.values[index];
    this.mainLabel = this.data[index].title;
  }

  setCoordinates(top:number, left: number) {
    this.tipsTop = top - 24 - (16 * this.data.length + 8 * (this.data.length + 1)) - 10;
    this.tipsLeft = left - 110;
  }

  ngOnInit(): void {
    this.values = this.data.map((item) => item.value);
    this.mainValue = this.values[0];
    this.mainLabel = this.data[0].title;
    this.createChart();
  }
}
