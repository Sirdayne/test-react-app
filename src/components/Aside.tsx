import React from 'react';
import {ReactComponent as DashboardLogo} from './../img/dashboard.svg';
import {ReactComponent as ChecksLogo} from './../img/checks.svg';
import {ReactComponent as CustomerLogo} from './../img/customer.svg';

function AppAside() {
  return (
    <aside className="app-aside">
      <div className="app-aside__nav app-aside__nav_active">
        <DashboardLogo />
      </div>
      <div className="app-aside__nav">
        <ChecksLogo />
      </div>
      <div className="app-aside__nav">
        <CustomerLogo />
      </div>
    </aside>
  );
}

export default AppAside;
