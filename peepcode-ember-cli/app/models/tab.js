import DS from 'ember-data';

var Tab = DS.Model.extend({
  
});

Tab.reopenClass({
  FIXTURES: [
    { id: 1, tabItems: [] }, 
    { id: 2, tabItems: [] }, 
    { id: 3, tabItems: [] }, 
    { id: 4, tabItems: [400, 401, 402, 403, 404] }, 
    { id: 5, tabItems: [] }, 
    { id: 6, tabItems: [] }
  ]
});

export default Tab;