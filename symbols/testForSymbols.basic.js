var role = Symbol('user role');

var score = Symbol('user score');

var user = {
    name: 'Suren',
    age: 23,
    [role]: 'own',
    [score]: 12001
}

var symbolProperties = Object.getOwnPropertySymbols(user);

var usualProperties = Object.getOwnPropertyNames(user); 

var allProperties = user; 

var json = JSON.stringify(user); 

var reflectProperties = Reflect.ownKeys(user);

console.log('All properties ::: ', allProperties);

console.log('Symbol properties ::: ', symbolProperties);

console.log('Reflect properties ::: ', reflectProperties);

console.log('Usual properties ::: ', usualProperties);

console.log('Json ::: ', json);

// ex. 2

console.log('//////////////////////////////////////');

var Project = (function() {

  var projectData = Symbol('data');
  var projectStatus = Symbol('status');
  var _projectTitle = Symbol('title');


  function Project(data, status) {
      this[projectData] = data;
      this[projectStatus] = status;
  }
  

  Project.prototype[_projectTitle] = function() {
      return `${this[projectData].name} (${this[projectData].description})`;
  }

  Project.prototype.getProjectTitle = function() {
      return this[_projectTitle]();
  }

  Project.prototype.getProjectStatus = function() {
      return this[projectStatus];
  }

  Project.prototype.setProjectStatus = function(status) {
      this[projectStatus] = status;
      return true;
  }

  return Project;

})();

var project = new Project(
  {
    name: 'any',
    description: 'my super project',
    role: 'unknown'
  },
  'active'
);

project.testForUsuallyProperty_01 = 'test1';

project.testForUsuallyProperty_02 = 'test2';

project.testForUsuallyProperty_03 = 'test3';

var project_allProperties = Reflect.ownKeys(project);

var project_usualProperties = Object.getOwnPropertyNames(project);

var project_symbolProperties = Object.getOwnPropertySymbols(project);

var project_json = JSON.stringify(project);

var _project = project;

console.log('Project all propertties ::: ', project_allProperties);

console.log('Project usual propertties ::: ', project_usualProperties);

console.log('Project symbol propertties ::: ', project_symbolProperties);

console.log('Project json ::: ', project_json);

console.log('Project ::: ', _project);
