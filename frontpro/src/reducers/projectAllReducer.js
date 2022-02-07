import {
    ALL_PROJECTALL_FAIL,
    ALL_PROJECTALL_REQUEST,
    ALL_PROJECTALL_SUCCESS,

    ADMIN_PROJECTALL_REQUEST,
    ADMIN_PROJECTALL_FAIL,
    ADMIN_PROJECTALL_SUCCESS,

    NEW_PROJECT_FAIL,
    NEW_PROJECT_REQUEST,
    NEW_PROJECT_SUCCESS,
    NEW_PROJECT_RESET,

    DELETE_PROJECT_FAIL,
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_RESET,
    DELETE_PROJECT_SUCCESS,

    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_FAIL,
    PROJECT_DETAILS_SUCCESS,
    CLEAR_ERRORS
}from '../constants/projectAllConstants'
export const projectAllReducer=(state={projectDetails:[]},action)=>{
    switch (action.type){
        case ALL_PROJECTALL_REQUEST:
            case ADMIN_PROJECTALL_REQUEST:
            return{
                loading:true,
                projectDetails:[],
            }
        case ALL_PROJECTALL_SUCCESS:
            case ADMIN_PROJECTALL_SUCCESS:
            return{
                loading:false,
                projectDetails:action.payload.projectDetails
            };
        case ALL_PROJECTALL_FAIL:
            case ADMIN_PROJECTALL_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null,
                };
        default:
            return state;
    }
};

export const projectDeleteDetailsReducer=(state={},action)=>{
  switch (action.type){
      case DELETE_PROJECT_REQUEST:
          return{
              
              ...state,
              loading:true,
          }
      case DELETE_PROJECT_SUCCESS:
          return{
            ...state,
              loading:false,
             isDeleted:action.payload,
          };
      case DELETE_PROJECT_FAIL:
          return{
            ...state,
              loading:false,
              error:action.payload,
          };

          case DELETE_PROJECT_RESET:
          return{
            ...state,
              isDeleted:false,
          };
          
          case CLEAR_ERRORS:
              return{
                  ...state,
                  error:null,
              };
      default:
          return state;
  }
};

export const projectAllDetailsReducer=(state={projectDetail:{}},action)=>{
    switch (action.type){
        case PROJECT_DETAILS_REQUEST:
            return{
                loading:true,
                ...state,
            }
        case PROJECT_DETAILS_SUCCESS:
            return{
                loading:false,
                projectDetail:action.payload.projectDetail
            };
        case PROJECT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null,
                };
        default:
            return state;
    }
};
//new create admin project
export const newProjectReducer = (state = { projectDetail: {} }, action) => {
    switch (action.type) {
      case NEW_PROJECT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_PROJECT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          projectDetail: action.payload.projectDetail,
        };
      case NEW_PROJECT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_PROJECT_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  