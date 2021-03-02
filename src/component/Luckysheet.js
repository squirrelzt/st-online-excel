import React from 'react';
import { connect } from 'react-redux';
import { initDataAction } from './store/actionCreators'


class Luckysheet extends React.Component {


    componentDidMount() {
        this.props.initData();
        let luckysheet = window.luckysheet;
        // 配置项
        const options = {
            container: 'luckysheet', // 设定DOM容器的id
            title: 'online-excel', // 设定表格名称
            lang: 'zh', // 设定表格语言
            allowUpdate: true,
            hook: {
                cellDragStop: function (cell, postion, sheetFile, ctx, event) {
                    console.info(cell, postion, sheetFile, ctx, event);
                },
                rowTitleCellRenderBefore:function(rowNum,postion,ctx){
                    // console.log(rowNum);
                },
                rowTitleCellRenderAfter:function(rowNum,postion,ctx){
                    // console.log(ctx);
                },
                columnTitleCellRenderBefore:function(columnAbc,postion,ctx){
                    // console.log(columnAbc);
                },
                columnTitleCellRenderAfter:function(columnAbc,postion,ctx){
                    // console.log(postion);
                },
                cellRenderBefore:function(cell,postion,sheetFile,ctx){
                    // console.log(cell,postion,sheetFile,ctx);
                },
                cellRenderAfter:function(cell,postion,sheetFile,ctx){
                    // console.log(postion);
                },
                cellMousedownBefore:function(cell,postion,sheetFile,ctx){
                    // console.log(postion);
                },
                cellMousedown:function(cell,postion,sheetFile,ctx){
                    // console.log(sheetFile);
                },
                sheetMousemove:function(cell,postion,sheetFile,moveState,ctx){
                    // console.log(cell,postion,sheetFile,moveState,ctx);
                },
                sheetMouseup:function(cell,postion,sheetFile,moveState,ctx){
                    // console.log(cell,postion,sheetFile,moveState,ctx);
                },
                cellAllRenderBefore:function(data,sheetFile,ctx){
                    // console.info(data,sheetFile,ctx)
                },
                updated:function(operate){
                    // console.info(operate)
                },
                cellUpdateBefore:function(r,c,value,isRefresh){
                    // console.info('cellUpdateBefore',r,c,value,isRefresh)
                },
                cellUpdated:function(r,c,oldValue, newValue, isRefresh){
                    console.info('cellUpdated',r,c,oldValue, newValue, isRefresh)
                },
                sheetActivate:function(index, isPivotInitial, isNewSheet){
                    // console.info(index, isPivotInitial, isNewSheet)
                },
                rangeSelect:function(index, sheet){
                    // console.info(index, sheet)
                },
                commentInsertBefore:function(r, c){
                    // console.info(r, c)
                },
                commentInsertAfter:function(r, c, cell){
                    // console.info(r, c, cell)
                },
                commentDeleteBefore:function(r, c, cell){
                    // console.info(r, c, cell)
                },
                commentDeleteAfter:function(r, c, cell){
                    // console.info(r, c, cell)
                },
                commentUpdateBefore:function(r, c, value){
                    // console.info(r, c, value)
                },
                commentUpdateAfter:function(r, c, oldCell, newCell ){
                    // console.info(r, c, oldCell, newCell)
                },
                cellEditBefore:function(range ){
                    // console.info(range)
                },
                workbookCreateAfter:function(json){
                    // console.info(json)
                },
                rangePasteBefore:function(range,data){
                    // console.info('rangePasteBefore',range,data)
                    // return false; //Can intercept paste
                },
            },
            data: [
                {
                    "name": "Sheet1", //工作表名称
                    "color": "", //工作表颜色
                    "index": 0, //工作表索引
                    "status": 1, //激活状态
                    "order": 0, //工作表的下标
                    "hide": 0,//是否隐藏
                    "row": 36, //行数
                    "column": 18, //列数
                    "defaultRowHeight": 19, //自定义行高
                    "defaultColWidth": 73, //自定义列宽
                    "celldata": [], //初始化使用的单元格数据
                    "config": {
                        "merge":{}, //合并单元格
                        "rowlen":{}, //表格行高
                        "columnlen":{}, //表格列宽
                        "rowhidden":{}, //隐藏行
                        "colhidden":{}, //隐藏列
                        "borderInfo":{}, //边框
                        "authority":{}, //工作表保护

                    },
                    "scrollLeft": 0, //左右滚动条位置
                    "scrollTop": 315, //上下滚动条位置
                    "luckysheet_select_save": [], //选中的区域
                    "calcChain": [],//公式链
                    "isPivotTable":false,//是否数据透视表
                    "pivotTable":{},//数据透视表设置
                    "filter_select": {},//筛选范围
                    "filter": null,//筛选配置
                    "luckysheet_alternateformat_save": [], //交替颜色
                    "luckysheet_alternateformat_save_modelCustom": [], //自定义交替颜色
                    "luckysheet_conditionformat_save": {},//条件格式
                    "frozen": {}, //冻结行列配置
                    "chart": [], //图表配置
                    "zoomRatio":1, // 缩放比例
                    "image":[], //图片
                    "showGridLines": 1, //是否显示网格线
                    "dataVerification":{} //数据验证配置
                },
                {
                    "name": "Sheet2",
                    "color": "",
                    "index": 1,
                    "status": 0,
                    "order": 1,
                    "celldata": [],
                    "config": {}
                },
                {
                    "name": "Sheet3",
                    "color": "",
                    "index": 2,
                    "status": 0,
                    "order": 2,
                    "celldata": [],
                    "config": {},
                }
            ],

            // 更多其他设置...
        };
        luckysheet.create(
            options
        );

    }

    render() {
        const luckyCss = {
            margin: '0px',
            padding: '0px',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '0px',
            top: '0px'
        };
        return (
            <div
            id="luckysheet"
            style={luckyCss}
            ></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        // focused: state.getIn(['header', 'focused']),
        // list: state.getIn(['header', 'list']),
        // page: state.getIn(['header', 'page']),
        // totalPage: state.getIn(['header', 'totalPage']),
        // mouseIn: state.getIn(['header', 'mouseIn'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initData() {
            console.log('initDataAction')
            dispatch(initDataAction())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Luckysheet)
