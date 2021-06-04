import { ShapeAttrs } from '@antv/g2';
import { Options, StyleAttr } from '../../types';
import { HierarchyOption } from '../../utils/hierarchy/types';

type DrilldownConfig = {
  readonly breadCrumb?: {
    /** 根文本 */
    rootText?: string;
    /** 分割线文本 */
    dividerText?: string;
    /** 字体样式 */
    textStyle?: ShapeAttrs;
    /** 激活的字体样式 */
    activeStyle?: ShapeAttrs;
  };
};

export interface TreemapOptions extends Omit<Options, 'data'> {
  /** 颜色字段 */
  readonly colorField?: string;
  /** 数据字段 */
  readonly data?: Record<string, any>;
  /** 图形样式 */
  readonly rectStyle?: StyleAttr;
  /** 层级布局配置 */
  readonly hierarchyConfig?: Omit<HierarchyOption, 'as' | 'type' | 'field'>;

  // 矩阵树图 内置一些交互
  /** 是否允许下钻，默认为：false */
  readonly enableDrillDown?: boolean;
  /** 下钻交互相关配置 */
  readonly drillDownConfig?: DrilldownConfig;
}
