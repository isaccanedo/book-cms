import { VisibilityFilters } from '../actions';

const filter = (state = VisibilityFilters.ALL, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter.filter;
    default:
      return state;
  }
};

export default filter;
