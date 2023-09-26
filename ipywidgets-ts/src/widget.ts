// Copyright (c) Daniel Adam Miranda
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';
import { scatterplot } from './graphs/scatterplot';

import { MODULE_NAME, MODULE_VERSION } from './version';

// Import the CSS
import '../css/widget.css';

export class ScatterplotModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ScatterplotModel.model_name,
      _model_module: ScatterplotModel.model_module,
      _model_module_version: ScatterplotModel.model_module_version,
      _view_name: ScatterplotModel.view_name,
      _view_module: ScatterplotModel.view_module,
      _view_module_version: ScatterplotModel.view_module_version,
      value: [],
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'ScatterplotModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ScatterplotView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class ScatterplotView extends DOMWidgetView {
  render() {
    // this.el.classList.add('custom-widget');

    this.value_changed();
    this.model.on('change:value', this.value_changed, this);
  }

  value_changed() {
    var data = this.model.get('value');
    scatterplot(data, this.el);
  }
}
