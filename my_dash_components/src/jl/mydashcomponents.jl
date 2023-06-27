# AUTO GENERATED FILE - DO NOT EDIT

export mydashcomponents

"""
    mydashcomponents(;kwargs...)
    mydashcomponents(children::Any;kwargs...)
    mydashcomponents(children_maker::Function;kwargs...)


A MyDashComponents component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `data` (Array of Bool | Real | String | Dict | Arrays; required): Update props to trigger callbacks.
"""
function mydashcomponents(; kwargs...)
        available_props = Symbol[:children, :id, :data]
        wild_props = Symbol[]
        return Component("mydashcomponents", "MyDashComponents", "my_dash_components", available_props, wild_props; kwargs...)
end

mydashcomponents(children::Any; kwargs...) = mydashcomponents(;kwargs..., children = children)
mydashcomponents(children_maker::Function; kwargs...) = mydashcomponents(children_maker(); kwargs...)

