# app = Window(data=data)
# app.addGraph(scatterplotGraph()).addWidget(RangeSliderWidget(effectOnData=effectOnData, min=min, max=max, step=step))
# app.run()

from my_dash_components import ScatterplotComponent, LinearplotComponent, HistogramplotComponent, LinearHistComponent
from dash import dcc, html, Input, Output
from jupyter_dash import JupyterDash
from enum import Enum

class ComponentType(Enum):
  GRAPH = 0
  WIDGET = 1

class Window():  
  
  def __init__(self, data):
    self._app = JupyterDash(__name__)
    self._data = data
    self._components = []
    self._graphs = []

  def _build(self):
    self._app.layout = html.Div(list(map(lambda component : component._component, self._components)))
    for graph in self._graphs:
      for component in self._components:
        if component._effectOnData != None:
          self._app.callback(Output(graph, "data"), Input(component._component, "value"))(component._effectOnData)

  def add(self, component):
    self._components.append(component)
    if component._type == ComponentType.GRAPH:
      component._initialize(self._data)
      self._graphs.append(component._component)
      
    if component._type == ComponentType.WIDGET:
      component._initialize()
    return self

  def run(self):
    self._build()
    self._app.run(mode="jupyterlab")
      
class ScatterplotGraph():
  def __init__(self) -> None:
    self._type = ComponentType.GRAPH
    self._component = None
    self._effectOnData = None
    
  def _initialize(self, data):
    self._component = ScatterplotComponent(
      data = data
    )
  
class RangeSliderWidget():
  def __init__(self, min, max, step, effectOnData=None):
    self._type = ComponentType.WIDGET
    self._min = min
    self._max = max
    self._step = step
    self._effectOnData = effectOnData
    
  def addEffect(self, effectOnData):
    self._effectOnData = effectOnData
    
  def _initialize(self):
    marks = {}
    marks[self._min] = str(self._min)
    marks[self._max] = str(self._max)
    self._component = dcc.RangeSlider(
      min=self._min,
      max=self._max,
      step=self._step,
      marks=marks,
      value=[self._min, self._max]
    )