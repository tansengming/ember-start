## Notes

- router loads the data instead of the controller
- controllers are the proxy access to the data model
- controllers
  - on `Ember.Controller`, views just call the controller
  - `Ember.ObjectController`, views call controller.model
  - `Ember.ArrayController`, controller is an array, so you can do `{{#each controller}}`
- why is data setup on the router??
- render vs partial. Partial uses same controller. Render uses different controller and context.
- ![](naming-conventions.png)
- ![](debugging.png)