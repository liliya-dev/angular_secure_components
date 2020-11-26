import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

Chart.defaults.RoundedDoughnut    = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
    draw: function(ease) {
        const ctx           = this.chart.ctx;
        const easingDecimal = ease || 1;
        const arcs          = this.getMeta().data;
        Chart.helpers.each(arcs, function(arc, i) {
            arc.transition(easingDecimal).draw();

            const pArc   = arcs[i === 0 ? arcs.length - 1 : i - 1];
            const pColor = pArc._view.backgroundColor;

            const vm         = arc._view;
            const radius     = (vm.outerRadius + vm.innerRadius) / 2;
            const thickness  = (vm.outerRadius - vm.innerRadius) / 2;
            const startAngle = Math.PI - vm.startAngle - Math.PI / 2;
            const angle      = Math.PI - vm.endAngle - Math.PI / 2;

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

@Component({
  selector: 'app-round-chart',
  templateUrl: './round-chart.component.html',
  styleUrls: ['./round-chart.component.scss']
})
export class RoundChartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const ctx = <HTMLCanvasElement>document.getElementById('usersChart')

    new Chart(ctx, {
      type   : 'RoundedDoughnut',
      data   : {
          datasets: [
              {
                  data: [40, 20, 20, 20, 11],
                  backgroundColor: [
                      '#F8BD5A',
                      '#5da4e7',
                      '#8f75e7',
                      '#509AAF', 
                      '#9ED0E0',
                      '#FF9F68'
                  ],
                  borderWidth    : 0
              }]
      },
      options: {
          cutoutPercentage: 70
      }
  });

    console
  }

}
