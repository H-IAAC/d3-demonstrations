// Copyright (c) Daniel Adam Miranda
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';
import { scatterplot } from './graphs/scatterplot';
import { linearplot } from './graphs/linearplot';
import { histogramplot } from './graphs/histogramplot';
import { linearhist } from './graphs/linearhist';

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
      data: [],
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
    this.value_changed();
    this.model.on('change:value', this.value_changed, this);
  }

  value_changed() {
    var data = this.model.get('data');
    scatterplot(data, this.el);
  }
}

export class LinearplotModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: LinearplotModel.model_name,
      _model_module: LinearplotModel.model_module,
      _model_module_version: LinearplotModel.model_module_version,
      _view_name: LinearplotModel.view_name,
      _view_module: LinearplotModel.view_module,
      _view_module_version: LinearplotModel.view_module_version,
      data: [],
      x_axis: String,
      y_axis: String,
      xStart: String,
      xEnd: String,
      clickedValue: String,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'LinearplotModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'LinearplotView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class LinearplotView extends DOMWidgetView {
  render() {
    this.value_changed();
    this.model.on('change:data', this.value_changed, this);
  }

  value_changed() {
    let that = this

    var data = this.model.get('data');
    var x_axis = this.model.get('x_axis');
    var y_axis = this.model.get('y_axis');
    var xStart = this.model.get('xStart');
    var xEnd = this.model.get('xEnd');
    linearplot(that, data, this.el, x_axis, y_axis, xStart, xEnd, this.setValue);
  }

  setValue(text: string, that: any) {
    that.model.set({'clickedValue': text})
    that.model.save_changes();
  }
}

export class HistogramplotModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: HistogramplotModel.model_name,
      _model_module: HistogramplotModel.model_module,
      _model_module_version: HistogramplotModel.model_module_version,
      _view_name: HistogramplotModel.view_name,
      _view_module: HistogramplotModel.view_module,
      _view_module_version: HistogramplotModel.view_module_version,
      data: [],
      value: String,
      xStart: String,
      xEnd: String,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'HistogramplotModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'HistogramplotView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class HistogramplotView extends DOMWidgetView {
  render() {
    this.value_changed();
    this.model.on('change:data', this.value_changed, this);
  }

  value_changed() {
    var data = this.model.get('data');
    var value = this.model.get('value');
    var xStart = this.model.get('xStart');
    var xEnd = this.model.get('xEnd');
    histogramplot(data, this.el, value, xStart, xEnd);
  }
}

export class LinearHistModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: LinearHistModel.model_name,
      _model_module: LinearHistModel.model_module,
      _model_module_version: LinearHistModel.model_module_version,
      _view_name: LinearHistModel.view_name,
      _view_module: LinearHistModel.view_module,
      _view_module_version: LinearHistModel.view_module_version,
      data: [],
      x_axis: String,
      y_axis: String,
      xStart: String,
      xEnd: String,
      clickedValue: String,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'LinearHistModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'LinearHistView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class LinearHistView extends DOMWidgetView {
  render() {
    this.value_changed();
    this.model.on('change:pdpData', this.value_changed, this);
  }

  value_changed() {
    let that = this

    var pdpData = this.model.get('pdpData');
    var histData = this.model.get('histData');
    var x_axis = this.model.get('x_axis');
    var y_axis = this.model.get('y_axis');
    var histValue = this.model.get('histValue');
    linearhist(that, pdpData, histData, this.el, x_axis, y_axis, histValue, this.setValue);
  }

  setValue(text: string, that: any) {
    that.model.set({'clickedValue': text})
    that.model.save_changes();
  }
}