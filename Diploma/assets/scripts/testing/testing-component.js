class TestingController {
    constructor() {
       
    }

    $onInit() {
        debugger;
        this.label = "Testing";
    }
}

var component = {
    transclude: true,
    template: "{{vm.label}}",
    controller: TestingController,
    controllerAs: "vm",
    bindings: {}
};

export default component;