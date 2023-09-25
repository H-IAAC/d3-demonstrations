import { DOMWidgetModel, DOMWidgetView } from '@jupyter-widgets/base';

// See example.py for the kernel counterpart to this file.

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be serialized.

var d3_scatterplot = require('./scatterplot.js');

export class HelloModel extends DOMWidgetModel {
    defaults() {
      return {
        ...super.defaults(),
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'jupyter-widget-example',
        _view_module : 'jupyter-widget-example',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World!'
      };
    }
  }

export class HelloView extends DOMWidgetView {
    render() {
        this.value_changed();

        // Observe and act on future changes to the value attribute
        this.model.on('change:value', this.value_changed, this);
    }

    value_changed() {
        this.el.textContent = this.model.get('value');
    }
}

export class ScatterplotModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name : 'ScatterplotModel',
      _view_name : 'ScatterplotView',
      _model_module : 'jupyter-widget-example',
      _view_module : 'jupyter-widget-example',
      _model_module_version : '0.1.0',
      _view_module_version : '0.1.0'
    };
  }
}

export class ScatterplotView extends DOMWidgetView {
  render() {
      // explicit
      let that = this;
      this.loadAndCreateToolElement();

      // Observe changes in the value traitlet in Python, and define
      // a custom callback.
      that.model.on('change:value', that.value_changed, that);
      // debug in browser
      window.dom = that.el;
  }

  value_changed() {
      this.el.textContent = this.model.get('value');
      this.render();
  }

  loadAndCreateToolElement() {
      let that = this;

      // scatterplot rendering
      d3_scatterplot.create(that);
  }
}
