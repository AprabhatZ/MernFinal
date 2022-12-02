import Collapse from "./collapse";

const targetEl = document.getElementById('targetEl');
const triggerEl = document.getElementById('triggerEl');

const options = {
    triggerEl: triggerEl,
    onCollapse: () => {
        console.log('element has been collapsed')
    },
    onExpand: () => {
        console.log('element has been expanded')
    },
    onToggle: () => {
        console.log('element has been toggled')
    }
  };

const collapse = new Collapse(targetEl,options)

collapse.toggle();
