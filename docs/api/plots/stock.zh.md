---
title: 股票图
order: 18
---

### 图表容器

`markdown:docs/common/chart-options.zh.md`

### 数据映射

#### data

<description>**required** _array object_</description>

设置图表数据源。数据源为对象集合，例如：

```ts
[
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-13',
    close: 2887.4265,
    open: 2804.2322,
    high: 2910.8812,
    low: 2799.9841,
    vol: 366450436,
    amount: 393019665.2,
  },
  {
    ts_code: '000001.SH',
    trade_date: '2020-03-12',
    close: 2923.4856,
    open: 2936.0163,
    high: 2944.4651,
    low: 2906.2838,
    vol: 307778457,
    amount: 328209202.4,
  },
];
```

#### xField 

<description>**required** _string_</description>

图形标记在 y 方向位置映射所对应的数据字段名，一般对应一个日期或者日期时间格式的字段(交易日)。

目前`xField`会自动识别如下形式的时间格式，当用户需要生成 time 类型的度量时，建议将原始时间数据转换为如下形式：

- 时间戳，如 1436237115500；
- 时间字符串： '2015-03-01'，'2015-03-01 12:01:40'，'2015/01/05'，'2015-03-01T16:00:00.000Z'。

#### yField 

<description>**required** _array string_</description>

该项为二维数组, 对应的是`[开盘价,收盘价,最高价,最低价]`字段的数组。

例如: `['open', 'close', 'high', 'low']`

#### meta

`markdown:docs/common/meta.zh.md`

[在线体验](/zh/examples/more-plots/stock#meta-alias)

### 图形样式

> 股票图只支持配置**上涨色**与**下跌色**，暂不支持 `color` 配置。

#### risingFill

<description>**optional** _number_ _default:_ `#ef5350`</description>

上涨色配置。

#### fallingFill

<description>**optional** _number_ _default:_ `#26a69a`</description>

下降色配置。

<playground path="more-plots/stock/demo/custom-color.ts" rid="custom-color"></playground>

#### style

<description>**可选** _StyleAttr | Function_</description>

股票图 图形样式。可以直接传入 `ShapeStyle` 结构，也可以使用回调函数的方式，针对不同的数据，来返回不同的样式。对于 ShapeStyle 的数据结构，可以参考：

`markdown:docs/common/shape-style.zh.md`

<playground path="more-plots/stock/demo/custom-style.ts" rid="custom-style"></playground>

### 图表组件

`markdown:docs/common/component.zh.md`

### 图表事件

`markdown:docs/common/events.zh.md`

### 图表方法

`markdown:docs/common/chart-methods.zh.md`

### 图表主题

`markdown:docs/common/theme.zh.md`
