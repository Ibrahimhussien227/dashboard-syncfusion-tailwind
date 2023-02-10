import React from "react";
import ReactDOM from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

registerLicense(
  // eslint-disable-next-line max-len
  "Mgo+DSMBaFt/QHRqVVhkVFpHaV5DQmFJfFBmQGlYflRxckU3HVdTRHRcQl9jQH5WdURnWXZec30=;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmJIYVF2R2BJelRxdV9HZkwgOX1dQl9gSXxTf0VmWn5acH1XRmk=;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxIf0x0RWFab1t6dVRMYVpBNQtUQF1hSn5RdkxjXHxfdHRcQ2NY;MTA5NjYzM0AzMjMwMmUzNDJlMzBKRmxxUi9CWEhPUzVjSi93N09vTndVV1RReUJYRnlPRnRwSysyd3M3RUUwPQ==;MTA5NjYzNEAzMjMwMmUzNDJlMzBMREh3MGwzYVYrbjBiWll1ZmFreUNpUUZoYjNEUHhjUVlzL3JKQi85OTNZPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWf1JpR2NbfE51flRHal1XVAciSV9jS31TdEVqWXpdcXBURmZfUQ==;MTA5NjYzNkAzMjMwMmUzNDJlMzBUdVVEbjNOcjQ1Y0ErU09BclJ2UDRZYXVFeElLWlBmd0Y2K1RZREpoSlBvPQ==;MTA5NjYzN0AzMjMwMmUzNDJlMzBBQ3ZsQ3pRY0ZQa0J0QW5KVk5kc2tUQSs4ekRmakRPbXc5QUJKZGxZY2FJPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxIf0x0RWFab1t6dVRMYVpBNQtUQF1hSn5RdkxjXHxfdHVUT2ha;MTA5NjYzOUAzMjMwMmUzNDJlMzBnaUw5RTBxM0k4SWdMK1diQmdCL29aUEpISU4rVXdHWmVEaG9zVDRrT2ZZPQ==;MTA5NjY0MEAzMjMwMmUzNDJlMzBiZVpLNkh1Q0pnZDVyUUU3Wm5EZkJteUxDbHpFbXVpWVNOTytuSjhYYWVJPQ==;MTA5NjY0MUAzMjMwMmUzNDJlMzBUdVVEbjNOcjQ1Y0ErU09BclJ2UDRZYXVFeElLWlBmd0Y2K1RZREpoSlBvPQ=="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
