import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

import { APP_BACKGROUND } from './components/define';

const sceneStyle = {
  backgroundColor: APP_BACKGROUND,
};

const RouterComponent = () => (
  <Router sceneStyle={sceneStyle}>
    <Scene key="root" hideNavBar>
      <Scene key="auth" >
        <Scene key="login" initial component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main" >
        <Scene
          key="employeeList"
          initial
          component={EmployeeList}
          title="Employees"
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="New Employee"
        />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
