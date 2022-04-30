import Litepicker from "litepicker";
import Alpine from "alpinejs";
import Choices from "choices.js";

window.Litepicker = Litepicker;
window.Alpine = Alpine;
window.Choices = Choices;

require("./bootstrap");
require("./plugins"); 
require("./modules/basic"); 
require("./modules/layout"); 

window.Alpine.start();


