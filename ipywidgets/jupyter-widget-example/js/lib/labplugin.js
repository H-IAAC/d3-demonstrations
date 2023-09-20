import {HelloModel, HelloView, version} from './index';
import {IJupyterWidgetRegistry} from '@jupyter-widgets/base';

export const helloWidgetPlugin = {
  id: 'jupyter-widget-example:plugin',
  requires: [IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-widget-example',
          version: version,
          exports: { HelloModel, HelloView }
      });
  },
  autoStart: true
};

export default helloWidgetPlugin;
