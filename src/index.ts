/**
 * This is the entrypoint file of the application. It communicates the
 * important features of this microfrontend to the app shell. It
 * connects the app shell to the React application(s) that make up this
 * microfrontend.
 */
import { getAsyncLifecycle, defineConfigSchema } from "@openmrs/esm-framework";

const moduleName = "openmrs-patient-finder-app";

const options = {
  featureName: "patient-finder",
  moduleName,
};

/*This microfrontend is not configurable*/
const configSchema = {};

/**
 * This tells the app shell how to obtain translation files: that they
 * are JSON files in the directory `../translations` (which you should
 * see in the directory structure).
 */
export const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

/**
 * This function performs any setup that should happen at microfrontend
 * load-time (such as defining the config schema) and then returns an
 * object which describes how the React application(s) should be
 * rendered.
 */
export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}

/**
 * This named export tells the app shell that the default export of `app.component.tsx`
 * should be rendered when the route matches `patient-finder`. The full route
 * will be `/openmrs/spa/patient-finder`.
 */
export const root = getAsyncLifecycle(() => import("./app.component"), options);
