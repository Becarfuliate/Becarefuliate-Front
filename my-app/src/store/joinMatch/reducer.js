const defaultDataJoinMatch = {
    "userLogin":"",
    "matchID": "",
    "robotID": ""
};

function reducer(dataJoinMatch = defaultDataJoinMatch, action){
    const  dataJoinMatchChange = ({attribute, value}) => {
        return { 
            ...dataJoinMatch, 
            [attribute]: value
        }; 
    };
    
    if (action.type === 'MODIFY_DATA_USER_JOIN')
        return dataJoinMatchChange({attribute:'userLogin', value: action.data});
    else if (action.type === 'MODIFY_DATA_MATCH_JOIN')
        return dataJoinMatchChange({attribute:'matchID', value: action.data});
    else if (action.type === 'MODIFY_DATA_ROBOT_JOIN')
        return dataJoinMatchChange({attribute:'robotID', value: action.data});

    return dataJoinMatch;
}

export default reducer;