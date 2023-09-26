#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Daniel Adam Miranda.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode, List
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

    value = List([]).tag(sync=True)
