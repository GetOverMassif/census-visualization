// 历次人口普查数量及年均增长率
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_growth = echarts.init(document.getElementById('growth'));

    // 指定图表的配置项和数据
    option = {
        backgroundColor: '#313131',
        title: {
            text: '历次人口普查人口数及年均增长率',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['人口总数（除港澳台外地区）', '人口总数（港澳台外地区）', '平均年增长率'],
            top: "90%",
            left: "17%",
        },
        grid:{
            top:'20%',
            bottom:'18%',
            left:'15%',
            right:'10%'
        },
        xAxis: [
            {
                type: 'category',
                data: ['1953/6/30', '1964/6/30', '1982/7/1', '1990/7/1', '2000/11/1', '2010/11/1', '2020/11/1'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '人口总数',
                min: 0,
                max: 1600000000,
                interval: 200000000,
                axisLabel: {
                    formatter: '{value} '
                }
            },
            {
                type: 'value',
                name: '平均年增长率',
                min: 0,
                max: 2.5,
                interval: 0.5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '人口总数（除港澳台外地区）',
                type: 'bar',
                data: [594346737, 694581759, 1008175288, 1133682501, 1265830000, 1339724852, 1411778724]
            },
            {
                name: '人口总数（港澳台外地区）',
                type: 'bar',
                data: [7591298, 28488510, 23707223, 26334880, 29500000, 30812023, 31718654]
            },
            {
                name: '平均年增长率',
                type: 'line',
                color: "yellow",
                yAxisIndex: 1,
                data: [ , 1.61, 2.09, 1.48, 1.07, 0.57, 0.53]
            }
        ]
    };

    // dispatchAction({
    //     type: 'legendToggleSelect',
    //     // 图例名称
    //     name: '总人口'
    // });

    // 使用刚指定的配置项和数据显示图表
    myChart_growth.setOption(option);
})();

// 各省人口数量
(function() {
    //装载地图
    option = {
        backgroundColor: '#313131',
        title: {
            text: '各省人口数量',
            subtext: '31个省、自治区、直辖市',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: '8%',
            top: '85%',
            data: ['人口分布']
        },
        visualMap: {
            min: 683218,
            max: 126012510,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            inRange: {
                color: ['#e7a278', '#742d02'] //取值范围的颜色
                    // color: ['#e2ebf4', '#de1f05'] //取值范围的颜色
            },
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {

                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            name: '人口分布',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 21893095
            }, {
                name: '天津',
                value: 13866009
            }, {
                name: '河北',
                value: 74610235
            }, {
                name: '山西',
                value: 34915616
            }, {
                name: '内蒙古',
                value: 24049155
            }, {
                name: '辽宁',
                value: 42591407
            }, {
                name: '吉林',
                value: 24073453
            }, {
                name: '黑龙江',
                value: 31850088
            }, {
                name: '上海',
                value: 24870895
            }, {
                name: '江苏',
                value: 84748016
            }, {
                name: '浙江',
                value: 64567588
            }, {
                name: '安徽',
                value: 61027171
            }, {
                name: '福建',
                value: 41540086
            }, {
                name: '江西',
                value: 45188635
            }, {
                name: '山东',
                value: 101527453
            }, {
                name: '河南',
                value: 99365519
            }, {
                name: '湖北',
                value: 57752557
            }, {
                name: '湖南',
                value: 66444864
            }, {
                name: '广东',
                value: 126012510
            }, {
                name: '广西',
                value: 50126804
            }, {
                name: '海南',
                value: 10081232
            }, {
                name: '重庆',
                value: 32054159
            }, {
                name: '四川',
                value: 83674866
            }, {
                name: '贵州',
                value: 38562148
            }, {
                name: '云南',
                value: 47209277
            }, {
                name: '西藏',
                value: 3648100
            }, {
                name: '陕西',
                value: 39528999
            }, {
                name: '甘肃',
                value: 25019831
            }, {
                name: '青海',
                value: 5923957
            }, {
                name: '宁夏',
                value: 7202654
            }, {
                name: '新疆',
                value: 25852345
            }, {
                name: '香港',
                value: 7474200
            }, {
                name: '澳门',
                value: 683218
            }, {
                name: '台湾',
                value: 23561236
            }]            
        }]
    };;
    if (option && typeof option === "object") {
        myChart1.setOption(option, true);
    }
})();

// 城乡人口变化
(function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_urban = echarts.init(document.getElementById('UrbanizationRate'));

    // 指定图表的配置项和数据
    option = {
        backgroundColor: '#313131',
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
            text: '城镇乡村人口变化',
            left:"45%",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['城镇人口', '乡村人口'],
            left: "40%",
            top: "95%"
        },
        grid:{
            top:'20%',
            bottom:'30%',
            left:'15%',
            right:'10%'
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1953.6.30', '1964.6.30', '1982.7.1', '1990.7.1', '2000.11.1', '2010.11.1', '2020.11.1']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '城镇人口',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(128, 255, 165)'
                    }, {
                        offset: 1,
                        color: 'rgba(1, 191, 236)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [77257282, 127108462, 206588582, 296512111, 455940000, 665575306, 901991162]
            },
            {
                name: '乡村人口',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 221, 255)'
                    }, {
                        offset: 1,
                        color: 'rgba(77, 119, 255)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [517089455, 567473297, 801586706, 837170390, 809890000, 674149546, 509787562]
            }
        ]
    };

    // dispatchAction({
    //     type: 'legendToggleSelect',
    //     // 图例名称
    //     name: '总人口'
    // });

    // 使用刚指定的配置项和数据显示图表
    myChart_urban.setOption(option);
})();

// 人口流动状况
(function(){
    var myChart_movement = echarts.init(document.getElementById('movement'));

    // 指定图表的配置项和数据
    option = {
        backgroundColor: '#313131',
        title: {
            text: '人口流动状况',
            subtext: '采用第七次人口普查数据',
            left:"40%",
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'right',
        },
        grid:{
            right: "0%",
        },
        series: [
            {
                name: '人口流动状况',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 919016218, name: '非人户分离人口'},
                    {value: 116945747, name: '市辖区人户分离人口'},
                    {value: 124837153, name: '跨省流动人口'},
                    {value: 250979606, name: '省内流动人口'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart_movement.setOption(option);
})();

// 性别比
(function() {
    //装载地图
    option = {
        backgroundColor: '#313131',
        title: {
            text: '性别比',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: '8%',
            top: '85%',
            data: ['性别比（以女性为100，男性对女性的比例）']
        },
        visualMap: {
            min: 99.69,
            max: 113.08,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            inRange: {
                color: ['#a5e398', '#20890c'] //取值范围的颜色
                    // color: ['#e2ebf4', '#de1f05'] //取值范围的颜色
            },
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {

                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            name: '性别比（以女性为100，男性对女性的比例）',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 104.65
            }, {
                name: '天津',
                value: 106.31
            }, {
                name: '河北',
                value: 102.02
            }, {
                name: '山西',
                value: 104.06
            }, {
                name: '内蒙古',
                value: 104.26
            }, {
                name: '辽宁',
                value: 99.7
            }, {
                name: '吉林',
                value: 99.69
            }, {
                name: '黑龙江',
                value: 100.35
            }, {
                name: '上海',
                value: 107.33
            }, {
                name: '江苏',
                value: 103.15
            }, {
                name: '浙江',
                value: 109.04
            }, {
                name: '安徽',
                value: 103.94
            }, {
                name: '福建',
                value: 106.94
            }, {
                name: '江西',
                value: 106.62
            }, {
                name: '山东',
                value: 102.67
            }, {
                name: '河南',
                value: 100.6
            }, {
                name: '湖北',
                value: 105.83
            }, {
                name: '湖南',
                value: 104.77
            }, {
                name: '广东',
                value: 113.08
            }, {
                name: '广西',
                value: 107.04
            }, {
                name: '海南',
                value: 112.86
            }, {
                name: '重庆',
                value: 102.21
            }, {
                name: '四川',
                value: 102.19
            }, {
                name: '贵州',
                value: 104.5
            }, {
                name: '云南',
                value: 107.16
            }, {
                name: '西藏',
                value: 110.32
            }, {
                name: '陕西',
                value: 104.79
            }, {
                name: '甘肃',
                value: 103.1
            }, {
                name: '青海',
                value: 104.97
            }, {
                name: '宁夏',
                value: 103.83
            }, {
                name: '新疆',
                value: 106.85
            }]
        }]
    };;
    if (option && typeof option === "object") {
        myChart2.setOption(option, true);
    }
})();

// 受教育情况
(function() {
    //装载地图
    option = {
        backgroundColor: '#313131',
        title: {
            text: '受教育状况',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: '8%',
            top: '85%',
            data: ['15岁以上人口平均受教育年限']
        },
        visualMap: {
            min: 6.75,
            max: 12.64,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            inRange: {
                color: ['#eab0b3', '#d10b13'] //取值范围的颜色
                    // color: ['#e2ebf4', '#de1f05'] //取值范围的颜色
            },
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {

                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            name: '15岁以上人口平均受教育年限',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 12.64
            }, {
                name: '天津',
                value: 11.29
            }, {
                name: '河北',
                value: 9.84
            }, {
                name: '山西',
                value: 10.45
            }, {
                name: '内蒙古',
                value: 10.08
            }, {
                name: '辽宁',
                value: 10.34
            }, {
                name: '吉林',
                value: 10.17
            }, {
                name: '黑龙江',
                value: 9.93
            }, {
                name: '上海',
                value: 11.81
            }, {
                name: '江苏',
                value: 10.21
            }, {
                name: '浙江',
                value: 9.79
            }, {
                name: '安徽',
                value: 9.35
            }, {
                name: '福建',
                value: 9.66
            }, {
                name: '江西',
                value: 9.7
            }, {
                name: '山东',
                value: 9.75
            }, {
                name: '河南',
                value: 9.79
            }, {
                name: '湖北',
                value: 10.02
            }, {
                name: '湖南',
                value: 9.88
            }, {
                name: '广东',
                value: 10.38
            }, {
                name: '广西',
                value: 9.54
            }, {
                name: '海南',
                value: 10.1
            }, {
                name: '重庆',
                value: 9.8
            }, {
                name: '四川',
                value: 9.24
            }, {
                name: '贵州',
                value: 8.75
            }, {
                name: '云南',
                value: 8.82
            }, {
                name: '西藏',
                value: 6.75
            }, {
                name: '陕西',
                value: 10.26
            }, {
                name: '甘肃',
                value: 9.13
            }, {
                name: '青海',
                value: 8.85
            }, {
                name: '宁夏',
                value: 9.81
            }, {
                name: '新疆',
                value: 10.11
            }]
        }]
    };;
    if (option && typeof option === "object") {
        myChart7.setOption(option, true);
    }
})();

// 年龄构成0-14岁
(function() {
    //装载地图
    option = {
        backgroundColor: '#313131',
        title: {
            text: '0-14岁',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: '8%',
            top: '85%',
            data: ['0-14']
        },
        visualMap: {
            min: 9.8,
            max: 24.53,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            inRange: {
                color: ['#145ab1', '#95efff'] //取值范围的颜色
                    // color: ['#e2ebf4', '#de1f05'] //取值范围的颜色
            },
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {

                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            left:"12%",
            right:"20%",
            name: '0-14岁',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 11.84
            }, {
                name: '天津',
                value: 13.47
            }, {
                name: '河北',
                value: 20.22
            }, {
                name: '山西',
                value: 16.35
            }, {
                name: '内蒙古',
                value: 14.04
            }, {
                name: '辽宁',
                value: 11.12
            }, {
                name: '吉林',
                value: 11.71
            }, {
                name: '黑龙江',
                value: 10.32
            }, {
                name: '上海',
                value: 9.8
            }, {
                name: '江苏',
                value: 15.21
            }, {
                name: '浙江',
                value: 13.45
            }, {
                name: '安徽',
                value: 19.24
            }, {
                name: '福建',
                value: 19.32
            }, {
                name: '江西',
                value: 21.96
            }, {
                name: '山东',
                value: 18.78
            }, {
                name: '河南',
                value: 23.14
            }, {
                name: '湖北',
                value: 16.31
            }, {
                name: '湖南',
                value: 19.52
            }, {
                name: '广东',
                value: 18.85
            }, {
                name: '广西',
                value: 23.63
            }, {
                name: '海南',
                value: 19.97
            }, {
                name: '重庆',
                value: 15.91
            }, {
                name: '四川',
                value: 16.1
            }, {
                name: '贵州',
                value: 23.97
            }, {
                name: '云南',
                value: 19.57
            }, {
                name: '西藏',
                value: 24.53
            }, {
                name: '陕西',
                value: 17.33
            }, {
                name: '甘肃',
                value: 19.4
            }, {
                name: '青海',
                value: 20.81
            }, {
                name: '宁夏',
                value: 20.38
            }, {
                name: '新疆',
                value: 22.46
            }]
        }]
    };;
    if (option && typeof option === "object") {
        myChart3.setOption(option, true);
    }
})();

// 年龄构成15-59
(function() {
    //装载地图
    option = {
        backgroundColor: '#313131',
        title: {
            text: '15-59岁',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['15-59']
        },
        visualMap: {
            min: 58.79,
            max: 68.8,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            inRange: {
                color: ['#145ab1', '#95efff'] //取值范围的颜色
                    // color: ['#e2ebf4', '#de1f05'] //取值范围的颜色
            },
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {

                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            left:"12%",
            right:"20%",
            name: '15-59岁',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 68.53
            }, {
                name: '天津',
                value: 64.87
            }, {
                name: '河北',
                value: 59.92
            }, {
                name: '山西',
                value: 64.72
            }, {
                name: '内蒙古',
                value: 66.17
            }, {
                name: '辽宁',
                value: 63.16
            }, {
                name: '吉林',
                value: 65.23
            }, {
                name: '黑龙江',
                value: 66.46
            }, {
                name: '上海',
                value: 66.82
            }, {
                name: '江苏',
                value: 62.95
            }, {
                name: '浙江',
                value: 67.86
            }, {
                name: '安徽',
                value: 61.96
            }, {
                name: '福建',
                value: 64.7
            }, {
                name: '江西',
                value: 61.17
            }, {
                name: '山东',
                value: 60.32
            }, {
                name: '河南',
                value: 58.79
            }, {
                name: '湖北',
                value: 63.26
            }, {
                name: '湖南',
                value: 60.6
            }, {
                name: '广东',
                value: 68.8
            }, {
                name: '广西',
                value: 59.69
            }, {
                name: '海南',
                value: 65.38
            }, {
                name: '重庆',
                value: 62.22
            }, {
                name: '四川',
                value: 62.19
            }, {
                name: '贵州',
                value: 60.65
            }, {
                name: '云南',
                value: 65.52
            }, {
                name: '西藏',
                value: 66.95
            }, {
                name: '陕西',
                value: 63.46
            }, {
                name: '甘肃',
                value: 63.57
            }, {
                name: '青海',
                value: 67.04
            }, {
                name: '宁夏',
                value: 66.09
            }, {
                name: '新疆',
                value: 66.26
            }]
        }]
    };;
    if (option && typeof option === "object") {
        myChart4.setOption(option, true);
    }
})();

// 年龄构成60以上
(function() {
    //装载地图
    option = {
        backgroundColor: '#313131',
        title: {
            text: '≥60岁',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['60']
        },
        visualMap: {
            min: 8.52,
            max: 25.72,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            inRange: {
                color: ['#145ab1', '#95efff'] //取值范围的颜色
                    // color: ['#e2ebf4', '#de1f05'] //取值范围的颜色
            },
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {

                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            left:"12%",
            right:"20%",
            name: '60岁以上',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 19.63
            }, {
                name: '天津',
                value: 21.66
            }, {
                name: '河北',
                value: 19.85
            }, {
                name: '山西',
                value: 18.92
            }, {
                name: '内蒙古',
                value: 19.78
            }, {
                name: '辽宁',
                value: 25.72
            }, {
                name: '吉林',
                value: 23.06
            }, {
                name: '黑龙江',
                value: 23.22
            }, {
                name: '上海',
                value: 23.38
            }, {
                name: '江苏',
                value: 21.84
            }, {
                name: '浙江',
                value: 18.7
            }, {
                name: '安徽',
                value: 18.79
            }, {
                name: '福建',
                value: 15.98
            }, {
                name: '江西',
                value: 16.87
            }, {
                name: '山东',
                value: 20.9
            }, {
                name: '河南',
                value: 18.08
            }, {
                name: '湖北',
                value: 20.42
            }, {
                name: '湖南',
                value: 19.88
            }, {
                name: '广东',
                value: 12.35
            }, {
                name: '广西',
                value: 16.69
            }, {
                name: '海南',
                value: 14.65
            }, {
                name: '重庆',
                value: 21.87
            }, {
                name: '四川',
                value: 21.71
            }, {
                name: '贵州',
                value: 15.38
            }, {
                name: '云南',
                value: 14.91
            }, {
                name: '西藏',
                value: 8.52
            }, {
                name: '陕西',
                value: 19.2
            }, {
                name: '甘肃',
                value: 17.03
            }, {
                name: '青海',
                value: 12.14
            }, {
                name: '宁夏',
                value: 13.52
            }, {
                name: '新疆',
                value: 11.28
            }]
        }]
    };;
    if (option && typeof option === "object") {
        myChart5.setOption(option, true);
    }
})();

// 年龄构成65以上
(function() {
    //装载地图
    option = {
        backgroundColor: '#313131',
        title: {
            text: '≥65岁',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['65岁']
        },
        visualMap: {
            min: 5.67,
            max: 17.42,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            inRange: {
                color: ['#145ab1', '#95efff'] //取值范围的颜色
                    // color: ['#e2ebf4', '#de1f05'] //取值范围的颜色
            },
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {

                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            left:"12%",
            right:"20%",
            name: '65岁以上',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: 13.3
            }, {
                name: '天津',
                value: 14.75
            }, {
                name: '河北',
                value: 13.92
            }, {
                name: '山西',
                value: 12.9
            }, {
                name: '内蒙古',
                value: 13.05
            }, {
                name: '辽宁',
                value: 17.42
            }, {
                name: '吉林',
                value: 15.61
            }, {
                name: '黑龙江',
                value: 15.61
            }, {
                name: '上海',
                value: 16.28
            }, {
                name: '江苏',
                value: 16.2
            }, {
                name: '浙江',
                value: 13.27
            }, {
                name: '安徽',
                value: 15.01
            }, {
                name: '福建',
                value: 11.1
            }, {
                name: '江西',
                value: 11.89
            }, {
                name: '山东',
                value: 15.13
            }, {
                name: '河南',
                value: 13.49
            }, {
                name: '湖北',
                value: 14.59
            }, {
                name: '湖南',
                value: 14.81
            }, {
                name: '广东',
                value: 8.58
            }, {
                name: '广西',
                value: 12.2
            }, {
                name: '海南',
                value: 10.43
            }, {
                name: '重庆',
                value: 17.08
            }, {
                name: '四川',
                value: 16.93
            }, {
                name: '贵州',
                value: 11.56
            }, {
                name: '云南',
                value: 10.75
            }, {
                name: '西藏',
                value: 5.67
            }, {
                name: '陕西',
                value: 13.32
            }, {
                name: '甘肃',
                value: 12.58
            }, {
                name: '青海',
                value: 8.68
            }, {
                name: '宁夏',
                value: 9.62
            }, {
                name: '新疆',
                value: 7.76
            }]
        }]
    };;
    if (option && typeof option === "object") {
        myChart6.setOption(option, true);
    }
})();

// 民族人口占比变化
(function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_people = echarts.init(document.getElementById('people'));

    // 指定图表的配置项和数据
    option = {
        backgroundColor: '#313131',
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
            text: '民族人口占比变化',
            left:"45%",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['汉族人口占比', '少数民族人口占比'],
            left: "36%",
            top: "95%"
        },
        grid:{
            top:'20%',
            bottom:'30%',
            left:'15%',
            right:'10%'
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '8%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1953.6.30', '1964.6.30', '1982.7.1', '1990.7.1', '2000.11.1', '2010.11.1', '2020.11.1']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '汉族人口占比',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(128, 255, 165)'
                    }, {
                        offset: 1,
                        color: 'rgba(1, 191, 236)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [0.9394, 0.9423, 0.9330, 0.9196, 0.9159, 0.9151, 0.9111]
            },
            {
                name: '少数民族人口占比',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 221, 255)'
                    }, {
                        offset: 1,
                        color: 'rgba(77, 119, 255)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [0.0606, 0.0577, 0.0670, 0.0804, 0.0841, 0.0849, 0.0889]
            }
        ]
    };

    // dispatchAction({
    //     type: 'legendToggleSelect',
    //     // 图例名称
    //     name: '总人口'
    // });

    // 使用刚指定的配置项和数据显示图表
    myChart_people.setOption(option);
})();

// 少数民族人口构成
(function(){
    var myChart_minority = echarts.init(document.getElementById('minority'));

    // 指定图表的配置项和数据
    option = {
        backgroundColor: '#313131',
        title: {
            text: '少数民族人口构成',
            subtext: '\n       由于第七次人口普查少数民族\n\n详细数据未公布，此处采用\n\n第六次人口普查数据.',
            left: 'left',
        },
        tooltip: {
            trigger: 'item'
        },
        label: {
            position: 'outer',
        },
        legend: {
            orient: 'vertical',
            top: "68%", // bottom:"20%" // 组件离容器的距离
            height: "23%",
            left: "5%", //left:"10%"  // // 组件离容器的距离
            itemGap: 5,
        },
        grid:{
            left:"0%",
        },
        series: [
            {
                name: '民族总人口',
                type: 'pie',
                center:["50%","35%"],
                radius: '50%',
                data: [
                    {value: 5981840, name: '蒙古族'},
                    {value: 10586087, name: '回族'},
                    {value: 3682, name: '珞巴族'},
                    {value: 23143, name: '基诺族'},
                    {value: 702839, name: '傈僳族'},
                    {value: 429709, name: '佤族'},
                    {value: 708651, name: '畲族'},
                    {value: 4009, name: '高山族'},
                    {value: 485966, name: '拉祜族'},
                    {value: 6282187, name: '藏族'},
                    {value: 10069346, name: '维吾尔族'},
                    {value: 411847, name: '水族'},
                    {value: 621500, name: '东乡族'},
                    {value: 326295, name: '纳西族'},
                    {value: 147828, name: '景颇族'},
                    {value: 186708, name: '柯尔克孜族'},
                    {value: 289565, name: '土族'},
                    {value: 131992, name: '达斡尔族'},
                    {value: 216257, name: '仫佬族'},
                    {value: 309576, name: '羌族'},
                    {value: 119639, name: '布朗族'},
                    {value: 130607, name: '撒拉族'},
                    {value: 101192, name: '毛南族'},
                    {value: 550746, name: '仡佬族'},
                    {value: 190481, name: '锡伯族'},
                    {value: 9426007, name: '苗族'},
                    {value: 8714393, name: '彝族'},
                    {value: 3556, name: '塔塔尔族'},
                    {value: 6930, name: '独龙族'},
                    {value: 8659, name: '鄂伦春族'},
                    {value: 5354, name: '赫哲族'},
                    {value: 10561, name: '门巴族'},
                    {value: 16926381, name: '壮族'},
                    {value: 2870034, name: '布依族'},
                    {value: 1830929, name: '朝鲜族'},
                    {value: 10387958, name: '满族'},
                    {value: 2879974, name: '侗族'},
                    {value: 2796003, name: '瑶族'},
                    {value: 1933510, name: '白族'},
                    {value: 8353912, name: '土家族'},
                    {value: 1660932, name: '哈尼族'},
                    {value: 1462588, name: '哈萨克族'},
                    {value: 1261311, name: '傣族'},
                    {value: 1463064, name: '黎族'},
                    {value: 39555, name: '阿昌族'},
                    {value: 42861, name: '普米族'},
                    {value: 51069, name: '塔吉克族'},
                    {value: 37523, name: '怒族'},
                    {value: 10569, name: '乌孜别克族'},
                    {value: 15393, name: '俄罗斯族'},
                    {value: 30875, name: '鄂温克族'},
                    {value: 20556, name: '德昂族'},
                    {value: 20074, name: '保安族'},
                    {value: 14378, name: '裕固族'},
                    {value: 28199, name: '京族'},
                    {value: 640101, name: '其他未识别的民族'},
                    {value: 1448, name: '外国人加入中国籍'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart_minority.setOption(option);
})();

// 港澳台居民及外籍人员情况
(function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_outsidefrom = echarts.init(document.getElementById('outsidefrom'));

    // 指定图表的配置项和数据
    option = {
        backgroundColor: '#313131',
        title: {
            text: '境内港澳台居民及外籍人员构成',
            left: '30%',
            top: "5%",
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        grid:{
            top: "60%",
        },
        series: {
            left: "10%",
            top: "20%",
            right: "10%",
            bottom: "5%",
            type: 'sankey',
            layout: 'none',
            center: ["20%","70%"],
            emphasis: {
                focus: 'adjacency'
            },
            data: [{
                name: '内地港澳台居民及外籍人士',
            }, {
                name: '香港特别行政区居民'
            }, {
                name: '澳门特别行政区居民'
            }, {
                name: '台湾地区居民'
            }, {
                name: '外籍人员'
            },{
                name: '男性'
            },{
                name: '女性',
                itemStyle: {
                    'color': '#f18bbf',
                    'borderColor': '#f18bbf'
                }
            }],
            links: [{
                source: '内地港澳台居民及外籍人士',
                target: '香港特别行政区居民',
                value: 371380
            }, {
                source: '内地港澳台居民及外籍人士',
                target: '澳门特别行政区居民',
                value: 55732
            }, {
                source: '内地港澳台居民及外籍人士',
                target: '台湾地区居民',
                value: 157886
            }, {
                source: '内地港澳台居民及外籍人士',
                target: '外籍人员',
                value: 845697
            }, {
                source: '香港特别行政区居民',
                target: '男性',
                value: 202296
            }, {
                source: '香港特别行政区居民',
                target: '女性',
                value: 169084
            }, {
                source: '澳门特别行政区居民',
                target: '男性',
                value: 29067
            }, {
                source: '澳门特别行政区居民',
                target: '女性',
                value: 26665
            }, {
                source: '台湾地区居民',
                target: '男性',
                value: 102897
            }, {
                source: '台湾地区居民',
                target: '女性',
                value: 54989
            }, {
                source: '外籍人员',
                target: '男性',
                value: 402026
            }, {
                source: '外籍人员',
                target: '女性',
                value: 443671
            }],
            label: {
                color: 'white',
                fontFamily: 'Arial',
                fontSize: 12
            }
        }
    };

    // 使用刚指定的配置项和数据显示图表
    myChart_outsidefrom.setOption(option);
})();

// 港澳台居民及外籍人员来内地/来华情况
(function(){
    var myChart_outsidefor = echarts.init(document.getElementById('outsidefor'));

    // 指定图表的配置项和数据
    option = {
        backgroundColor: '#313131',
        title: {
            text: '港澳台居民及外籍人员情况',
            left: 'center',
        },
        tooltip: {
            trigger: 'item'
        },
        label: {
            position: 'outer',
        },
        legend: {
            // data = ['']
            // orient: 'vertical',
            top: "95%", // bottom:"20%" // 组件离容器的距离
            height: "23%",
            // left: "5%", //left:"10%"  // // 组件离容器的距离
            // itemGap: 5,
            data: ['来内地/来华目的','居住地点','居住时长']
        },
        grid:{
            left:"0%",
        },
        series: [
            {
                name: '来内地/来华目的',
                type: 'pie',
                center:["50%","35%"],
                radius: '35%',
                center: ['50%', '30%'],
                data: [
                    { name: '就业', value: 444336},
                    { name: '定居', value: 419517},
                    { name: '学习', value: 219761},
                    { name: '其他', value: 195338},
                    { name: '商务', value: 77008},
                    { name: '探亲', value: 74735}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },{
                name: '居住地点',
                type: 'pie',
                center:["50%","35%"],
                radius: '35%',
                center: ['30%', '70%'],
                data: [
                    { name: '广东', value: 418509},
                    { name: '云南', value: 379281},
                    { name: '上海', value: 163954},
                    { name: '福建', value: 106248},
                    { name: '北京', value: 62812},
                    { name: '江苏', value: 58201},
                    { name: '浙江', value: 46189},
                    { name: '广西', value: 26043},
                    { name: '山东', value: 21829},
                    { name: '辽宁', value: 20562},
                    { name: '其他省份', value: 127067}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },{
                name: '居住时长',
                type: 'pie',
                center:["50%","35%"],
                radius: '35%',
                center: ['70%', '70%'],
                data: [
                    { name: '3个月以下', value: 40659},
                    { name: '三个月至半年', value: 56342},
                    { name: '半年至一年', value: 166884},
                    { name: '一年至两年', value: 248174},
                    { name: '两年至五年', value: 314954},
                    { name: '五年以上', value: 603682}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart_outsidefor.setOption(option);
})();