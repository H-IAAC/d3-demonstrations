#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Daniel Adam Miranda.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode, List, observe
from ._frontend import module_name, module_version


class Scatterplot(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('ScatterplotModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    
    _view_name = Unicode('ScatterplotView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    data = List([]).tag(sync=True)

class Linearplot(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('LinearplotModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    
    _view_name = Unicode('LinearplotView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    data = List([]).tag(sync=True)
    x_axis = Unicode().tag(sync=True)
    y_axis = Unicode().tag(sync=True)
    xStart = Unicode().tag(sync=True)
    xEnd = Unicode().tag(sync=True)
    clickedValue = Unicode().tag(sync=True)
    