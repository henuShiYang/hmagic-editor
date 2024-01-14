import type { Component } from 'vue';

export interface MenuComponent {
  type: 'component';
  /** Vue3组件 */
  component: any;
  /** 传入组件的props对象 */
  props?: Record<string, any>;
  /** 组件监听的事件对象，如：{ click: () => { console.log('click'); } } */
  listeners?: Record<string, Function>;
  slots?: Record<string, any>;
  /** 是否显示，默认为true */
  display?: boolean | ((data?: any) => Promise<boolean> | boolean);
}
/**
 * 菜单按钮
 */
export interface MenuButton {
    /**
     * 按钮类型
     * button: 只有文字不带边框的按钮
     * text: 纯文本
     * dropdown: 下拉菜单
     * divider: 分隔线
     * zoom: 放大缩小
     */
    type: 'button' | 'dropdown' | 'text' | 'divider' | 'zoom';
    /** 展示的文案 */
    text?: string;
    /** 鼠标悬浮是显示的气泡中的文案 */
    tooltip?: string;
    /** element-plus icon class */
    icon?: string | Component<{}, {}, any>;
    /** 是否置灰，默认为false */
    disabled?: boolean | ((data?: any) => boolean);
    /** 是否显示，默认为true */
    display?: boolean | ((data?: any) => boolean);
    /** type为button/dropdown时点击运行的方法 */
    handler?: (data?: any) => Promise<any> | any;
    /** type为dropdown时，下拉的菜单列表 */
    items?: {
        /** 展示的文案 */
        text: string;
        /** 点击运行的方法 */
        handler(data: any): any;
    }[];
}
export type MenuItem =
    | '/'
    | 'delete'
    | 'undo'
    | 'redo'
    | 'zoom'
    | 'zoom-in'
    | 'zoom-out'
    | 'guides'
    | 'rule'
    | MenuButton
    | MenuComponent
/** 工具栏 */
export interface MenuBarData {
    /** 顶部工具栏左边项 */
    left?: MenuItem[]
    /** 顶部工具栏中间项 */
    center?: MenuItem[]
    /** 顶部工具栏右边项 */
    right?: MenuItem[]
}
