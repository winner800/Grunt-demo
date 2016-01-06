/**
 * theme for Highcharts JS
 * @author changjianwang@cyou-inc.com
 */

Highcharts.theme = {
	global:{
		useUTC : false //时区设置
	},
	/**
	 * 版权信息配置，不用修改直接复制
	 * 
	 * @param {boolean} enabled 是否显示版权信息
	 * @param {string} href 版权信息所链接到的地址
	 * @param {string} text 版权信息所显示的文字内容
	 */
	credits: {//右下角版权设置
		enabled : false ,//是否显示右下角的标志
		href: "http://www.17173.com",//链接
		text: '17173.com',//显示内容
		position: {//显示为准
			align: 'right',
			x: -20,
			verticalAlign: 'bottom',
			y: -20
		}
	},
   colors: ['#2f7ed8', '#8bbc21', '#910000', '#1aadce', '#492970',
		'#f28f43', '#77a1e5', '#c42525', '#a6c96a', "#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee", '#0d233a'],
   //colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
/*   colors: [
		'#6e99fe', //蓝
		'#fd8116', //橙
		'#8bd350', //绿
		'#f3d216', //黄
		'#9e6efe', //紫
		'#d8ac74', //褐
		'#ff71be', //桃
		'#1bd6fd', //青
		'#c42525', 
		'#a6c96a' 
	],*/ 

   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 4 },
         stops: [
            [0, '#fff'],
            [1, '#d3d4d4']
         ]
      },
	  borderColor: '#e5e5e5',
      borderWidth: 1,
      borderRadius: 10,
	  spacingLeft: 30,
	  spacingRight: 30,
      plotBackgroundColor: null,
      plotShadow: false,
      plotBorderWidth: 0
   },
   title: {
      style: {
		  display:'none',
         color: '#000',
         font: '18px bold "Microsoft YaHei"'
      }
   },
   subtitle: {
      style: {
		  display:'none',
         color: '#DDD',
         font: '12px Arial, Helvetica, Lucida Grande, Lucida Sans Unicode, Verdana, sans-serif'
      }
   },
   xAxis: {
      gridLineWidth: 0,
      lineColor: '#999',
      tickColor: '#999',
      labels: {
         style: {
            color: '#999',
            fontWeight: 'normal'
         }
      },
      title: {
         style: {
			display:'none',
            color: '#AAA',
            font: 'normal 12px  Arial, Helvetica, Lucida Grande, Lucida Sans Unicode, Verdana, sans-serif'
         }
      }
   },
   yAxis: {
      alternateGridColor: null,
      minorTickInterval: null,
      gridLineColor: 'rgba(153, 153, 153, .4)',
      minorGridLineColor: 'rgba(255,255,255,0.07)',
      lineWidth: 0,
      tickWidth: 0,
      labels: {
         style: {
            color: '#999',
            fontWeight: 'normal'
         }
      },
      title: {
         style: {
			display:'none',
            color: '#767575',
            font: 'normal 12px Arial, Helvetica, Lucida Grande, Lucida Sans Unicode, Verdana, sans-serif'
         }
      }
   },
   legend: {
      itemStyle: {
         color: '#6b6b6b'
      },
      itemHoverStyle: {
         color: '#000'
      },
      itemHiddenStyle: {
         color: '#ccc'
      }
   },
   labels: {
      style: {
         color: '#000'
      }
   },
   tooltip: {
	   shared:true,
	   backgroundColor: 'rgba(255, 255, 255, .8)',
/*      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, 'rgba(160, 160, 160, .8)'],
            [1, 'rgba(160, 160, 160, .8)']
         ]
      },*/
      borderWidth: 1,
      style: {
         color: '#000'
      }
   },


   plotOptions: {
      series: {
		 marker: {
			radius: 5,
			enabled: false	 
		 },
         shadow: true
      },
	  column: {
		 zIndex : 7  
	  },
	  area: {
		 fillOpacity: 0.1,
		 zIndex : 8  
	  },
      line: {
         dataLabels: {
            color: '#CCC'
         },
         marker: {
            //lineColor: '#333'
         },
		 zIndex : 9 
      },
      spline: {
         marker: {
            lineColor: '#333'
         },
		 zIndex : 9 
      },
	  pie: {
		 zIndex : 10 
	  },
      scatter: {
         marker: {
            lineColor: '#333'
         }
      },
	  columnrange: {
		  
	  },
      candlestick: {
         lineColor: 'white'
      }
   },

   toolbar: {
      itemStyle: {
         color: '#CCC'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         hoverSymbolStroke: '#FFFFFF',
         theme: {
            fill: {
               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
               stops: [
                  [0.4, '#606060'],
                  [0.6, '#333333']
               ]
            },
            stroke: '#000000'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
               [0.4, '#888'],
               [0.6, '#555']
            ]
         },
         stroke: '#000000',
         style: {
            color: '#CCC',
            fontWeight: 'bold'
         },
         states: {
            hover: {
               fill: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                     [0.4, '#BBB'],
                     [0.6, '#888']
                  ]
               },
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                     [0.1, '#000'],
                     [0.3, '#333']
                  ]
               },
               stroke: '#000000',
               style: {
                  color: 'yellow'
               }
            }
         }
      },
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(16, 16, 16, 0.5)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      }
   },

   scrollbar: {
      barBackgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
               [0.4, '#888'],
               [0.6, '#555']
            ]
         },
      barBorderColor: '#CCC',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
               [0.4, '#888'],
               [0.6, '#555']
            ]
         },
      buttonBorderColor: '#CCC',
      rifleColor: '#FFF',
      trackBackgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, '#000'],
            [1, '#333']
         ]
      },
      trackBorderColor: '#666'
   },

   // special colors for some of the demo examples
   legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
   legendBackgroundColorSolid: 'rgb(70, 70, 70)',
   dataLabelsColor: '#444',
   textColor: '#E0E0E0',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);