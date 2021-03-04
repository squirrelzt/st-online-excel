import * as actionTypes from './actionTypes';
import { fromJS } from "immutable";

// const defaultState = fromJS({
//     data: []
// });

const defaultState = {
    data: [
        {
            "name": "Sheet1",
            "color": "",
            "index": 0,
            "status": 1,
            "order": 0,
            "hide": 0,
            "row": 36,
            "column": 18,
            "defaultRowHeight": 19,
            "defaultColWidth": 73,
            "celldata": [],
            "config": {
                "merge":{},
                "rowlen":{},
                "columnlen":{},
                "rowhidden":{},
                "colhidden":{},
                "borderInfo":{},
                "authority":{}

            },
            "scrollLeft": 0,
            "scrollTop": 315,
            "luckysheet_select_save": [],
            "calcChain": [],
            "isPivotTable":false,
            "pivotTable":{},
            "filter_select": {},
            "filter": null,
            "luckysheet_alternateformat_save": [],
            "luckysheet_alternateformat_save_modelCustom": [],
            "luckysheet_conditionformat_save": {},
            "frozen": {},
            "chart": [],
            "zoomRatio":1,
            "image":[],
            "showGridLines": 1,
            "dataVerification":{}
        }
    ]

};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.INIT_DATA :
            // return state.set('data', action.data);

            newState.data = action.data;
            console.log('reducer --------------');
            console.log(action.data);
            console.log(newState);
            return newState;
        default :
            return state;
    }
}
